import { Award, Briefcase, Database, Shield, TrendingUp, Code } from 'lucide-react';

const certifications = [
  {
    category: 'Professional Engineering Memberships',
    icon: Award,
    items: [
      'COREN Registered Engineer - ID: R75933 (2024)',
      'Member Nigerian Society of Engineers ID: 66190 - MNSE (2024)',
      'Member Nigerian Institution of Metallurgical, Materials and Mining Engineers ID: CM641 - MNIMMME (2025)',
      'Member International Association of Engineers ID: 521253 - MIAENG (2025)',
    ],
  },
  {
    category: 'Project & Risk Management',
    icon: Briefcase,
    items: [
      'Project Management Essentials Certification (2025)',
      'Agile Project Management (2025)',
      'Risk Management (2019)',
    ],
  },
  {
    category: 'Data & AI',
    icon: Database,
    items: [
      'Data Analytics Professional (2025)',
      'AI Fluency (Microsoft IOE, 2025)',
      'AI for SMEs (2026)',
      'IBM Explorer Certifications – Data Analytics, Cloud, AI, Cybersecurity & Quantum Computing (2019)',
    ],
  },
  {
    category: 'Cybersecurity',
    icon: Shield,
    items: [
      'Cybersecurity Awareness (2025)',
      'Cybersecurity Certification - NECA-ITF TSDP (2025)',
      'API Security Fundamentals (2025)',
      'Securing API Servers (2025)',
      'Fundamentals of Network Security (2015)',
    ],
  },
  {
    category: 'Process Improvement',
    icon: TrendingUp,
    items: [
      'Six Sigma & Lean Six Sigma White Belt (2025)',
    ],
  },
  {
    category: 'Technical Courses',
    icon: Code,
    items: [
      'Systems Engineering (2021)',
      'Product Design & Manufacturing (2015)',
      'C++ Programming (2019)',
    ],
  },
];

export default function ProfessionalCertifications() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 sm:mb-12 text-center">
          Professional Certifications
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 sm:p-8 shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {cert.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {cert.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm sm:text-base text-muted-foreground"
                    >
                      <span className="text-teal-500 mt-1.5 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
