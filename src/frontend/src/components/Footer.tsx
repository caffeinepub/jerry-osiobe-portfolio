import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'jerry-osiobe-portfolio';

  return (
    <footer className="bg-slate-900 text-slate-300 py-8 sm:py-10 mt-12 sm:mt-16 lg:mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm sm:text-base flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Engr. Jerry Ebruvwiyor Osiobe. All rights reserved.</span>
          </p>
          <p className="text-sm mt-3 flex items-center justify-center gap-2 flex-wrap">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 inline-block" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 font-semibold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
