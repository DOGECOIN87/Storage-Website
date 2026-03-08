import { Thermometer, Shield, Key, Truck, Box, UserCheck, Car } from "lucide-react";

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
  return (
    <section id="features" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow"
            >
              <div className="absolute top-8 left-8">
                <span className="inline-flex items-center justify-center p-3 bg-brand-100 dark:bg-brand-900/30 rounded-xl shadow-sm">
                  <feature.icon
                    className="h-6 w-6 text-brand-700 dark:text-brand-400"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-16">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
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
