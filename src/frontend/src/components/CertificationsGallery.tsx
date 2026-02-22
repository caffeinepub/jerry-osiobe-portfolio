import { useState } from 'react';
import { Award } from 'lucide-react';
import CertificateModal from './CertificateModal';

interface Certificate {
  src: string;
  alt: string;
}

const certificates: Certificate[] = [
  { src: '/assets/IMG_4327.jpeg', alt: 'NIMMME Corporate Membership Certificate' },
  { src: '/assets/IMG_4202.jpeg', alt: 'APISec University API Security Fundamentals Certificate' },
  { src: '/assets/IMG_4203.jpeg', alt: 'IBM Cybersecurity Intro Certificate' },
  { src: '/assets/IMG_4186.jpeg', alt: 'IBM Cloud Intro Certificate' },
  { src: '/assets/IMG_4192.jpeg', alt: 'HP LIFE Cybersecurity Awareness Certificate' },
  { src: '/assets/IMG_4188.jpeg', alt: 'Sololearn C++ Certificate' },
  { src: '/assets/IMG_4189.jpeg', alt: 'Google Technical Support Fundamentals Certificate' },
  { src: '/assets/IMG_4183.jpeg', alt: 'IBM Artificial Intelligence Intro Certificate' },
  { src: '/assets/IMG_4329.jpeg', alt: 'Nigerian Society of Engineers Membership Certificate' },
  { src: '/assets/IMG_4196.jpeg', alt: 'eLearning College Risk Management Certificate' },
  { src: '/assets/IMG_4185.jpeg', alt: 'IBM Quantum Computing Intro Certificate' },
  { src: '/assets/IMG_4190.jpeg', alt: 'APISec University Securing API Servers Certificate' },
  { src: '/assets/IMG_4195.jpeg', alt: 'eLearning College Project Management Certificate' },
  { src: '/assets/IMG_4187.jpeg', alt: 'Lean Six Sigma White Belt Certificate' },
  { src: '/assets/IMG_4194.jpeg', alt: 'Google Digital Marketing Fundamentals Certificate' },
  { src: '/assets/IMG_4184.jpeg', alt: 'IBM Data Science & Analytics Intro Certificate' },
  { src: '/assets/IMG_4193.jpeg', alt: 'HP LIFE Agile Project Management Certificate' },
  { src: '/assets/IMG_4198.jpeg', alt: 'National Youth Service Corps Certificate' },
  { src: '/assets/IMG_4181.jpeg', alt: 'Alison Manufacturing and Product Design Diploma' },
  { src: '/assets/IMG_4328.jpeg', alt: 'COREN Annual Practicing License' },
  { src: '/assets/IMG_4179.jpeg', alt: 'Six Sigma White Belt Certificate' },
  { src: '/assets/IMG_4180.jpeg', alt: 'Alison Systems Engineering Certificate' },
  { src: '/assets/IMG_4201.jpeg', alt: 'Senior School Certificate' },
  { src: '/assets/IMG_4197.jpeg', alt: 'IAENG International Association of Engineers Membership Letter' },
  { src: '/assets/IMG_4583-1.jpeg', alt: 'Lean Six Sigma White Belt Certification - Management and Strategy Institute' },
  { src: '/assets/IMG_4582.jpeg', alt: 'Microsoft IOE AI for SMEs Quiz Completion Certificate' },
  { src: '/assets/IMG_4203-2.jpeg', alt: 'IBM Cybersecurity Intro Certificate' },
  { src: '/assets/IMG_4177-1.jpeg', alt: 'Microsoft IOE AI Fluency Training Certificate' },
  { src: '/assets/IMG_4181-2.jpeg', alt: 'Alison Diploma in Manufacturing and Product Design' },
  { src: '/assets/IMG_4176.jpeg', alt: 'Techlytics Data Analytics Certificate' },
  { src: '/assets/IMG_4175-1.jpeg', alt: 'Management and Strategy Institute Project Management Essentials Certificate' },
  { src: '/assets/IMG_4173.jpeg', alt: 'ITF-NECA Technical Skills Development Project Cybersecurity Certificate' },
  { src: '/assets/IMG_4182.jpeg', alt: 'Alison Fundamentals of Network Security Certificate' },
  { src: '/assets/IMG_4180-2.jpeg', alt: 'Alison Systems Engineering Certificate' },
  { src: '/assets/IMG_4200.jpeg', alt: 'Akanu Ibiam Federal Polytechnic Unwana National Diploma Certificate' },
  { src: '/assets/IMG_4178-1.jpeg', alt: 'COREN 32nd Engineering Assembly Certificate of Participation' },
  { src: '/assets/IMG_4198-2.jpeg', alt: 'National Youth Service Corps Certificate of National Service' },
  { src: '/assets/IMG_4174-1.jpeg', alt: 'Data Protection Induction Training Certificate of Attendance' },
  { src: '/assets/IMG_4582-1.jpeg', alt: 'Microsoft IOE AI for SMEs Quiz Completion Certificate' },
  { src: '/assets/IMG_4583-2.jpeg', alt: 'Lean Six Sigma White Belt Certification - Management and Strategy Institute' },
  { src: '/assets/IMG_4203-3.jpeg', alt: 'IBM Cybersecurity Intro Certificate' },
  { src: '/assets/IMG_4181-3.jpeg', alt: 'Alison Diploma in Manufacturing and Product Design' },
  { src: '/assets/IMG_4199.jpeg', alt: 'Federal University of Technology Owerri Bachelor of Engineering Certificate' },
  { src: '/assets/IMG_4198-3.jpeg', alt: 'National Youth Service Corps Certificate of National Service' },
  { src: '/assets/IMG_4173-1.jpeg', alt: 'ITF-NECA Technical Skills Development Project Cybersecurity Certificate' },
  { src: '/assets/IMG_4177-2.jpeg', alt: 'Microsoft IOE AI Fluency Training Certificate' },
  { src: '/assets/IMG_4175-2.jpeg', alt: 'Management and Strategy Institute Project Management Essentials Certificate' },
  { src: '/assets/IMG_4182-1.jpeg', alt: 'Alison Fundamentals of Network Security Certificate' },
  { src: '/assets/IMG_4180-3.jpeg', alt: 'Alison Systems Engineering Certificate' },
  { src: '/assets/IMG_4176-1.jpeg', alt: 'Techlytics Data Analytics Certificate' },
  { src: '/assets/IMG_4178-2.jpeg', alt: 'COREN 32nd Engineering Assembly Certificate of Participation' },
  { src: '/assets/IMG_4174-2.jpeg', alt: 'Data Protection Induction Training Certificate of Attendance' },
  { src: '/assets/IMG_4200-1.jpeg', alt: 'Akanu Ibiam Federal Polytechnic Unwana National Diploma Certificate' },
  { src: '/assets/IMG_4199-1.jpeg', alt: 'Federal University of Technology Owerri Bachelor of Engineering Certificate' },
];

export default function CertificationsGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + certificates.length) % certificates.length);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % certificates.length);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Professional Certifications Gallery
            </h2>
          </div>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            A comprehensive collection of professional certifications, memberships, and credentials
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-lg overflow-hidden shadow-md border border-border hover:shadow-xl hover:border-teal-500/50 transition-all duration-300 cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={certificate.src}
                  alt={certificate.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e2e8f0" width="400" height="300"/%3E%3Ctext fill="%2394a3b8" font-family="sans-serif" font-size="18" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3ECertificate%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium line-clamp-2">
                    {certificate.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <CertificateModal
          certificate={certificates[selectedIndex]}
          onClose={handleClose}
          onPrevious={handlePrevious}
          onNext={handleNext}
          currentIndex={selectedIndex}
          totalCount={certificates.length}
        />
      )}
    </section>
  );
}
