import { useState, useRef } from 'react';
import { FolderOpen, AlertCircle, Upload, Loader2, LogIn } from 'lucide-react';
import CertificateModal from './CertificateModal';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetAllCertificates, useUploadCertificate } from '../hooks/useQueries';
import { ExternalBlob } from '../backend';
import { Button } from './ui/button';
import { toast } from 'sonner';

interface Certificate {
  path: string;
  alt: string;
  title?: string;
}

const staticCertificates: Certificate[] = [];

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];

export default function CertificatesFolder() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const [loadingImages, setLoadingImages] = useState<Set<string>>(new Set());
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { identity, login, loginStatus } = useInternetIdentity();
  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';

  const { data: uploadedCertificates = [], isLoading: certificatesLoading } = useGetAllCertificates();
  const uploadMutation = useUploadCertificate();

  // Merge static and uploaded certificates
  const uploadedCerts: Certificate[] = uploadedCertificates.map((cert) => ({
    path: cert.blob.getDirectURL(),
    alt: cert.filename,
    title: cert.filename,
  }));

  const allCertificates = [...staticCertificates, ...uploadedCerts];

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (selectedIndex === null) return;
    
    if (direction === 'prev' && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else if (direction === 'next' && selectedIndex < allCertificates.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handleImageError = (path: string) => {
    setImageErrors(prev => new Set(prev).add(path));
    setLoadingImages(prev => {
      const next = new Set(prev);
      next.delete(path);
      return next;
    });
  };

  const handleImageLoad = (path: string) => {
    setLoadingImages(prev => {
      const next = new Set(prev);
      next.delete(path);
      return next;
    });
  };

  const handleImageLoadStart = (path: string) => {
    setLoadingImages(prev => new Set(prev).add(path));
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    for (const file of Array.from(files)) {
      // Validate file type
      if (!ALLOWED_TYPES.includes(file.type)) {
        toast.error(`Invalid file type: ${file.name}. Only JPEG, PNG, and PDF files are allowed.`);
        continue;
      }

      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        toast.error(`File too large: ${file.name}. Maximum size is 10MB.`);
        continue;
      }

      try {
        // Read file as ArrayBuffer
        const arrayBuffer = await file.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);

        // Create ExternalBlob with upload progress tracking
        const blob = ExternalBlob.fromBytes(uint8Array).withUploadProgress((percentage) => {
          setUploadProgress(prev => ({ ...prev, [file.name]: percentage }));
        });

        // Upload the certificate
        await uploadMutation.mutateAsync({
          filename: file.name,
          blob,
        });

        toast.success(`Successfully uploaded: ${file.name}`);
        setUploadProgress(prev => {
          const next = { ...prev };
          delete next[file.name];
          return next;
        });
      } catch (error) {
        console.error('Upload error:', error);
        toast.error(`Failed to upload: ${file.name}`);
        setUploadProgress(prev => {
          const next = { ...prev };
          delete next[file.name];
          return next;
        });
      }
    }

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleLogin = async () => {
    try {
      await login();
    } catch (error: any) {
      console.error('Login error:', error);
      toast.error('Failed to log in. Please try again.');
    }
  };

  const isUploading = Object.keys(uploadProgress).length > 0;

  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 mb-8 sm:mb-12">
            <div className="flex items-center gap-3">
              <FolderOpen className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-center">
                Professional Certificates
              </h2>
            </div>

            {/* Upload UI - only shown to authenticated users */}
            {isAuthenticated ? (
              <div className="flex flex-col items-center gap-3">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  multiple
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <Button
                  onClick={handleUploadClick}
                  disabled={isUploading || uploadMutation.isPending}
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                >
                  {isUploading || uploadMutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Certificates
                    </>
                  )}
                </Button>
                {isUploading && (
                  <div className="text-sm text-muted-foreground">
                    {Object.entries(uploadProgress).map(([filename, progress]) => (
                      <div key={filename} className="flex items-center gap-2">
                        <span className="truncate max-w-[200px]">{filename}</span>
                        <span>{progress}%</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  Log in to upload your certificates
                </p>
                <Button
                  onClick={handleLogin}
                  disabled={isLoggingIn}
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-950"
                >
                  {isLoggingIn ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    <>
                      <LogIn className="w-4 h-4 mr-2" />
                      Log In
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>

          {/* Loading state */}
          {certificatesLoading && (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-teal-600" />
            </div>
          )}
          
          {/* Certificates grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {allCertificates.map((cert, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-xl hover:border-teal-500/50 transition-all duration-300 ease-in-out cursor-pointer"
                onClick={() => handleImageClick(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleImageClick(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${cert.alt}`}
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                  {loadingImages.has(cert.path) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-teal-500/30 border-t-teal-500 rounded-full animate-spin" />
                    </div>
                  )}
                  
                  {imageErrors.has(cert.path) ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <AlertCircle className="w-12 h-12 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Certificate image unavailable
                      </p>
                    </div>
                  ) : (
                    <img
                      src={cert.path}
                      alt={cert.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      onError={() => handleImageError(cert.path)}
                      onLoad={() => handleImageLoad(cert.path)}
                      onLoadStart={() => handleImageLoadStart(cert.path)}
                      loading="lazy"
                    />
                  )}
                </div>
                
                {cert.title && (
                  <div className="p-3 bg-card">
                    <p className="text-sm font-medium text-foreground truncate">
                      {cert.title}
                    </p>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedIndex !== null && (
        <CertificateModal
          isOpen={selectedIndex !== null}
          onClose={handleCloseModal}
          certificates={allCertificates}
          currentIndex={selectedIndex}
          onNavigate={handleNavigate}
        />
      )}
    </>
  );
}
