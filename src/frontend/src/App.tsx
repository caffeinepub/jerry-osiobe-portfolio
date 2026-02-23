import { ThemeProvider } from 'next-themes';
import { Toaster } from './components/ui/sonner';
import HeroSection from './components/HeroSection';
import ProfessionalSummary from './components/ProfessionalSummary';
import CoreCompetencies from './components/CoreCompetencies';
import Education from './components/Education';
import ProfessionalCertifications from './components/ProfessionalCertifications';
import ProfessionalExperience from './components/ProfessionalExperience';
import ResearchPapers from './components/ResearchPapers';
import Interests from './components/Interests';
import CertificatesFolder from './components/CertificatesFolder';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background">
        <HeroSection />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ProfessionalSummary />
          <CoreCompetencies />
          <Education />
          <ProfessionalCertifications />
          <ProfessionalExperience />
          <ResearchPapers />
          <Interests />
          <CertificatesFolder />
        </main>
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
