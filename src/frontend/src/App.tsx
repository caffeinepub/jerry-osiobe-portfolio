import { ThemeProvider } from "next-themes";
import CertificatesFolder from "./components/CertificatesFolder";
import CoreCompetencies from "./components/CoreCompetencies";
import Education from "./components/Education";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Interests from "./components/Interests";
import ProfessionalCertifications from "./components/ProfessionalCertifications";
import ProfessionalExperience from "./components/ProfessionalExperience";
import ProfessionalSummary from "./components/ProfessionalSummary";
import ResearchPapers from "./components/ResearchPapers";
import { Toaster } from "./components/ui/sonner";

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
