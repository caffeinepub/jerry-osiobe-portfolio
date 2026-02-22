import { Mail, Phone, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x600.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500 rounded-full blur-2xl opacity-20 animate-pulse" />
              <img
                src="/assets/generated/jerry-osiobe-headshot.dim_400x400.png"
                alt="Engr. Jerry Ebruvwiyor Osiobe - Professional Headshot"
                className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border-4 border-teal-500/30 shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
              Engr. Jerry Ebruvwiyor Osiobe
            </h1>
            <div className="text-lg sm:text-xl lg:text-2xl text-teal-400 font-semibold mb-2">
              MNSE, COREN
            </div>
            <p className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8 max-w-3xl mx-auto lg:mx-0">
              Registered Engineer (COREN) | Member, Nigerian Society of Engineers (MNSE)
            </p>

            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-slate-300">
              <a 
                href="mailto:osiobejerry7@gmail.com"
                className="flex items-center gap-2 hover:text-teal-400 transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base">osiobejerry7@gmail.com</span>
              </a>
              <a 
                href="tel:+2347025937757"
                className="flex items-center gap-2 hover:text-teal-400 transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base">+234-7025937757</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-sm sm:text-base">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
