import { Check, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const units = [
  {
    size: "5x10",
    type: "Non-Climate Controlled",
    price: "$60",
    description: "Perfect for a few boxes, small furniture, or seasonal items.",
    features: ["Walk-in closet size", "Drive-up access", "Ground floor"],
    popular: false,
  },
  {
    size: "10x10",
    type: "Non-Climate Controlled",
    price: "$85",
    description: "Ideal for a one-bedroom apartment or small office.",
    features: ["Half a standard garage", "Drive-up access", "Roll-up door"],
    popular: true,
  },
  {
    size: "10x15",
    type: "Non-Climate Controlled",
    price: "$120",
    description: "Great for a two-bedroom apartment or large items.",
    features: ["Two-thirds of a garage", "Drive-up access", "Ground floor"],
    popular: false,
  },
  {
    size: "10x20",
    type: "Non-Climate Controlled",
    price: "$140",
    description: "Fits a three-bedroom house or a vehicle.",
    features: ["Standard one-car garage", "Drive-up access", "Roll-up door"],
    popular: false,
  },
  {
    size: "10x30",
    type: "Non-Climate Controlled",
    price: "$225",
    description: "Contents of a 3-5 bedroom house or large vehicles.",
    features: ["Large multi-room size", "Drive-up access", "Roll-up door"],
    popular: false,
  },
  {
    size: "5x10",
    type: "Climate Controlled",
    price: "$90",
    description: "Perfect for a few boxes or sensitive seasonal items.",
    features: ["Walk-in closet size", "Climate controlled", "Ground floor"],
    popular: false,
  },
  {
    size: "10x10",
    type: "Climate Controlled",
    price: "$130",
    description: "Ideal for sensitive items from a one-bedroom apartment.",
    features: ["Half a standard garage", "Climate controlled", "Ground floor"],
    popular: false,
  },
  {
    size: "10x15",
    type: "Climate Controlled",
    price: "$175",
    description: "Great for a two-bedroom apartment or sensitive inventory.",
    features: ["Two-thirds of a garage", "Climate controlled", "Ground floor"],
    popular: false,
  },
  {
    size: "10x20",
    type: "Climate Controlled",
    price: "$220",
    description: "Fits a three-bedroom house worth of sensitive items.",
    features: ["Standard one-car garage", "Climate controlled", "Ground floor"],
    popular: false,
  },
  {
    size: "11x40",
    type: "RV Storage",
    price: "$150",
    description: "Large 16' high space perfect for recreational vehicles.",
    features: ["Electricity included", "Covered space", "Easy access"],
    popular: false,
  },
  {
    size: "11x26",
    type: "Boat Storage",
    price: "$95",
    description: "13' high space designed specifically for boats.",
    features: ["Electricity included", "Covered space", "Easy access"],
    popular: false,
  },
  {
    size: "Open",
    type: "Storage",
    price: "$45",
    description: "Affordable open-air storage for various vehicles or equipment.",
    features: ["Uncovered space", "Varying sizes available", "No electricity"],
    popular: false,
  },
];

export function UnitSizes() {
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
      id="units"
      className="py-28 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 relative overflow-hidden"
    >
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"
            }`}
        >
          <h2 className="text-sm font-semibold text-brand-700 dark:text-brand-400 tracking-wide uppercase">
            Unit Sizes & Prices
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Find the perfect fit for your needs
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 dark:text-slate-400 mx-auto">
            From small closets to large garages, we have a variety of sizes to
            accommodate your belongings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {units.map((unit, index) => (
            <div
              key={`${unit.size}-${unit.type}`}
              className={`group relative flex flex-col p-8 bg-white dark:bg-slate-950 rounded-3xl border transition-all duration-500 hover:-translate-y-2 ${unit.popular
                ? "border-brand-600 shadow-xl shadow-brand-500/10 dark:border-brand-500/50 dark:shadow-brand-500/5"
                : "border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-brand-200 dark:hover:border-brand-800/50"
                } ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{
                animationDelay: isVisible ? `${index * 100 + 200}ms` : "0ms",
              }}
            >
              {unit.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-accent-400 to-accent-500 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-md shadow-accent-500/20">
                    <Sparkles className="h-3.5 w-3.5" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors duration-300">
                  {unit.size}
                </h3>
                <p className="text-sm font-medium text-brand-700 dark:text-brand-400 mt-1">
                  {unit.type}
                </p>
              </div>

              <div className="mb-6 flex items-baseline text-slate-900 dark:text-white">
                <span className="text-5xl font-extrabold tracking-tight">
                  {unit.price}
                </span>
                <span className="ml-1 text-xl font-medium text-slate-400 dark:text-slate-500">
                  /mo
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed">
                {unit.description}
              </p>

              <ul className="space-y-3 mb-8">
                {unit.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-100 dark:bg-brand-900/30">
                        <Check className="h-3 w-3 text-brand-700 dark:text-brand-400" />
                      </div>
                    </div>
                    <p className="ml-3 text-sm text-slate-700 dark:text-slate-300">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-3.5 px-4 rounded-xl font-semibold text-center transition-all duration-300 block ${unit.popular
                  ? "bg-brand-600 text-white hover:bg-brand-700 shadow-md shadow-brand-600/20 hover:shadow-lg hover:shadow-brand-600/30"
                  : "bg-slate-100 text-slate-900 hover:bg-brand-600 hover:text-white dark:bg-slate-800 dark:text-white dark:hover:bg-brand-600"
                  }`}
              >
                Reserve Now
              </a>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            * Prices and availability are subject to change. Please{" "}
            <a
              href="#contact"
              className="text-brand-600 dark:text-brand-400 hover:underline font-medium"
            >
              contact us
            </a>{" "}
            for the most up-to-date information.
          </p>
        </div>
      </div>
    </section>
  );
}
