import { Wrench, Pencil, Shield, BarChart3, Camera, Network, Hammer, AlertTriangle, MessageSquare } from 'lucide-react';

const competencies = [
  {
    icon: Wrench,
    title: 'Project & Systems Management',
  },
  {
    icon: Pencil,
    title: 'AutoCAD 2D/3D Design & Technical Drawings',
  },
  {
    icon: Shield,
    title: 'Cybersecurity (Pen Testing, Log Analysis, GRC)',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics (SQL, Power BI, Excel)',
  },
  {
    icon: Camera,
    title: 'CCTV & Access Control Systems',
  },
  {
    icon: Network,
    title: 'Computer Networking & Structured Cabling',
  },
  {
    icon: Hammer,
    title: 'Fabrication & Mechanical Installation',
  },
  {
    icon: AlertTriangle,
    title: 'Risk Assessment & Quality Management',
  },
  {
    icon: MessageSquare,
    title: 'Strong Communication (English & Urhobo)',
  },
];

export default function CoreCompetencies() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 sm:mb-12 text-center">
          Core Competencies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {competencies.map((competency, index) => {
            const Icon = competency.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-5 sm:p-6 shadow-md border border-border hover:shadow-xl hover:border-teal-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                    {competency.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
