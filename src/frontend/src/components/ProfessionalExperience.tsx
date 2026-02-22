import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Fabrication Engineer',
    company: 'Nehemiah Grace Developers Ltd, Lagos',
    period: 'Dec 2025 – Present',
    current: true,
    responsibilities: [
      'Lead design development using AutoCAD 2D/3D.',
      'Supervise fabrication technicians, ensuring compliance with engineering codes and standards.',
      'Coordinate projects and oversee site operations.',
    ],
  },
  {
    title: 'Cybersecurity Analyst (Internship)',
    company: 'NECA-ITF Technical Skills Development Projects, Lagos',
    period: 'Jun 2025 – Oct 2025',
    current: false,
    responsibilities: [
      'Conducted penetration testing, log analysis, and GRC compliance.',
      'Implemented security measures to safeguard networks and data.',
    ],
  },
  {
    title: 'Data Analyst (Internship)',
    company: 'Techlytics Africa, Lagos',
    period: 'Feb 2025 – Jun 2025',
    current: false,
    responsibilities: [
      'Applied SQL, Power BI, and Excel for database management, data cleaning, analysis, and visualization.',
      'Delivered insights to support business decisions and predictive modeling.',
    ],
  },
  {
    title: 'Project Engineer',
    company: 'Java Data Solution Ltd, Lagos',
    period: 'Nov 2023 – Sep 2024',
    current: false,
    responsibilities: [
      'Project supervision and site coordination.',
      'Designed and installed CCTV and access control systems.',
      'Trained technicians in AutoCAD 2D/ 3D modeling and LAN topology design for CCTV design and implementation.',
    ],
  },
  {
    title: 'Project Engineer (Contract)',
    company: 'Pavilion Technology Ltd, Lagos',
    period: 'Sep 2021 – Oct 2023',
    current: false,
    responsibilities: [
      'Supervised CCTV and access control implementation and installations.',
      'Assisted technical supervisors in designing and supervision of the CCTV real-time video surveillance projects.',
    ],
  },
  {
    title: 'Network Support Assistant',
    company: 'Michael & Cecilia Ibru University, Delta',
    period: 'Jan 2017 – Dec 2018',
    current: false,
    responsibilities: [
      'Implemented structured cabling and configured network devices.',
      'Supported JAMB CBT Centre networking infrastructure.',
    ],
  },
];

export default function ProfessionalExperience() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 sm:mb-12 text-center">
          Professional Experience
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
          
          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-8 top-8 w-4 h-4 rounded-full bg-teal-500 border-4 border-background transform -translate-x-1.5" />
                
                <div className="lg:ml-20 bg-card rounded-xl p-6 sm:p-8 shadow-md border border-border hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="lg:hidden flex-shrink-0 w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-base text-muted-foreground mt-1">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:flex-shrink-0">
                      <span className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="px-2 py-1 text-xs font-semibold bg-teal-500/20 text-teal-700 dark:text-teal-300 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2 ml-0 sm:ml-13 lg:ml-0">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li
                        key={respIndex}
                        className="flex items-start gap-2 text-sm sm:text-base text-muted-foreground"
                      >
                        <span className="text-teal-500 mt-1.5 flex-shrink-0">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
