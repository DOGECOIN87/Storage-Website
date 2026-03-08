import { Thermometer, Shield, Key, Truck, Car, UserCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    name: "Climate Controlled Units",
    description:
      "Protect your sensitive items from extreme Texas temperatures and humidity with our climate-controlled options.",
    icon: Thermometer,
  },
  {
    name: "24/7 Video Surveillance",
    description:
      "Rest easy knowing your belongings are monitored around the clock with our state-of-the-art security cameras.",
    icon: Shield,
  },
  {
    name: "Electronic Gate Access",
    description:
      "Secure, personalized keypad entry ensures only authorized customers can access the facility.",
    icon: Key,
  },
  {
    name: "Drive-Up Access",
    description:
      "Load and unload with ease by driving your vehicle directly up to your ground-level storage unit.",
    icon: Truck,
  },
  {
    name: "RV & Vehicle Parking",
    description:
      "Secure parking options available for your recreational vehicles, boats, and extra cars.",
    icon: Car,
  },
  {
    name: "Onsite Manager & Retail",
    description:
      "Our friendly onsite manager is here to help, and we offer moving and packing supplies for purchase.",
    icon: UserCheck,
  },
];

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-28 bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"
            }`}
        >
          <h2 className="text-sm font-semibold text-brand-700 dark:text-brand-400 tracking-wide uppercase">
            Amenities
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Everything you need for secure storage
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 dark:text-slate-400 mx-auto">
            We offer top-tier amenities to ensure your belongings are safe,
            accessible, and well-maintained.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={`group relative p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-brand-200 dark:hover:border-brand-800/50 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-500 hover:-translate-y-1 ${isVisible
                  ? "animate-fade-in-up"
                  : "opacity-0"
                }`}
              style={{
                animationDelay: isVisible ? `${index * 100 + 200}ms` : "0ms",
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/[0.02] group-hover:to-brand-600/[0.04] transition-all duration-500" />

              <div className="relative">
                <div className="mb-5">
                  <span className="inline-flex items-center justify-center p-3.5 bg-brand-100 dark:bg-brand-900/30 rounded-xl shadow-sm group-hover:bg-brand-200/80 dark:group-hover:bg-brand-900/50 group-hover:shadow-md transition-all duration-300 group-hover:scale-110">
                    <feature.icon
                      className="h-6 w-6 text-brand-700 dark:text-brand-400"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors duration-300">
                  {feature.name}
                </h3>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
