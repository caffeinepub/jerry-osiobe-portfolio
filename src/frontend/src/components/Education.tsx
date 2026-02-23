import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'MSc in Systems Engineering (In View)',
    institution: 'University of Lagos, Akoka',
    year: '2026',
  },
  {
    degree: 'B.Eng, Materials & Metallurgical Engineering',
    institution: 'Federal University of Technology, Owerri',
    year: '2019',
  },
  {
    degree: 'OND, Ceramics & Glass Technology',
    institution: 'Akanu Ibiam Federal Polytechnic, Unwana',
    year: '2013',
  },
  {
    degree: 'NECO & WAEC, Senior School Certificate Examination',
    institution: 'Ibru College, Agbarha-Otor',
    year: '2010',
  },
];

export default function Education() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 sm:mb-12 text-center">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-5 sm:p-6 lg:p-8 shadow-md border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-base text-muted-foreground mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                    {edu.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
