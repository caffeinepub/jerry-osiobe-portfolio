import { BookOpen, Lightbulb, Waves, Plane, Trophy } from 'lucide-react';

const interests = [
  { name: 'Reading', icon: BookOpen },
  { name: 'Learning', icon: Lightbulb },
  { name: 'Swimming', icon: Waves },
  { name: 'Travelling', icon: Plane },
  { name: 'Football', icon: Trophy },
];

export default function Interests() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-8 sm:mb-12 text-center">
          Interests
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl px-6 py-4 shadow-md border border-border hover:shadow-lg hover:border-teal-500/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                    <Icon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  </div>
                  <span className="text-base sm:text-lg font-semibold text-foreground">
                    {interest.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
