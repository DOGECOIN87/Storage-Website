import { ArrowRight, ShieldCheck, Clock, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: ShieldCheck,
      title: "24/7 Security",
      desc: "Video surveillance & gated access",
    },
    {
      icon: Clock,
      title: "Extended Access",
      desc: "Access your unit 7 days a week",
    },
    {
      icon: MapPin,
      title: "Prime Location",
      desc: "Located in Gruene, TX",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#fdfbf7] dark:bg-slate-900 pt-20 pb-36 sm:pt-28 sm:pb-44 lg:pb-52 border-b-4 border-brand-700"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={`${import.meta.env.BASE_URL}hero.mp4`} type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 dark:bg-slate-900/75" />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 dark:from-slate-900/40 dark:via-slate-900/60 dark:to-slate-900/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-600 via-accent-500 to-brand-600 z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 transition-all duration-700 delay-100 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
            }`}
        >
          <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-300 bg-clip-text text-transparent drop-shadow-lg">
            A Gruene Self Storage
          </span>
        </h1>

        <p
          className={`max-w-2xl mx-auto text-lg sm:text-xl text-white/85 mb-12 leading-relaxed drop-shadow transition-all duration-700 delay-200 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
            }`}
        >
          Whether you're moving, decluttering, or need business storage, we offer
          clean, secure, and climate-controlled units to fit your needs.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
            }`}
        >
          <a
            href="#units"
            id="cta-view-units"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl transition-all duration-300 shadow-lg shadow-brand-700/30 hover:shadow-xl hover:shadow-brand-700/40 hover:-translate-y-0.5 group"
          >
            Unit Sizes & Rates
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            id="cta-contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/25 hover:bg-white/20 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Contact Us
          </a>
        </div>

        {/* Feature cards */}
        <div
          className={`mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-700 delay-500 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
            }`}
        >
          {features.map((feature, i) => (
            <div
              key={i}
              className="group flex flex-col items-center p-6 bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl border border-white/15 hover:border-brand-400/40 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="p-3 bg-brand-500/20 rounded-xl mb-4 group-hover:bg-brand-500/30 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-brand-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-white/60">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
