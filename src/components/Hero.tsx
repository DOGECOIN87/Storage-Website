import { ArrowRight, ShieldCheck, Clock, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fdfbf7] dark:bg-slate-900 pt-16 pb-32 sm:pt-24 sm:pb-40 lg:pb-48 border-b-4 border-brand-700">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 dark:opacity-20"
        >
          {/* Replace this src with your uploaded video URL */}
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf7] via-[#fdfbf7]/80 dark:from-slate-900 dark:via-slate-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
          Secure & Accessible <br className="hidden sm:block" />
          <span className="text-brand-700 dark:text-brand-400">
            Self Storage in Gruene
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-10">
          Whether you're moving, decluttering, or need business storage, we offer
          clean, secure, and climate-controlled units to fit your needs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#units"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-brand-700 hover:bg-brand-800 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            View Unit Sizes & Prices
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl transition-all shadow-sm"
          >
            Contact Us
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
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
              desc: "Conveniently located in Gruene, TX",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl border-t-4 border-brand-600 shadow-sm"
            >
              <div className="p-3 bg-brand-100 dark:bg-brand-900/30 rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-brand-700 dark:text-brand-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

