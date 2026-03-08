import { Check } from "lucide-react";

const units = [
  {
    size: "5x5",
    type: "Climate Controlled",
    price: "$60",
    description: "Perfect for a few boxes, small furniture, or seasonal items.",
    features: ["Walk-in closet size", "Climate controlled", "Ground floor"],
    popular: false,
  },
  {
    size: "10x10",
    type: "Drive-Up Access",
    price: "$120",
    description: "Ideal for a one-bedroom apartment or small office.",
    features: [
      "Half of a standard garage",
      "Drive-up access",
      "Roll-up door",
    ],
    popular: true,
  },
  {
    size: "10x15",
    type: "Climate Controlled",
    price: "$165",
    description: "Great for a two-bedroom apartment or large items.",
    features: ["Two-thirds of a garage", "Climate controlled", "Ground floor"],
    popular: false,
  },
  {
    size: "10x20",
    type: "Drive-Up Access",
    price: "$225",
    description: "Fits a three-bedroom house or a vehicle.",
    features: ["Standard one-car garage", "Drive-up access", "Roll-up door"],
    popular: false,
  },
];

export function UnitSizes() {
  return (
    <section id="units" className="py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
          {units.map((unit) => (
            <div
              key={`${unit.size}-${unit.type}`}
              className={`relative flex flex-col p-8 bg-white dark:bg-slate-950 rounded-3xl border ${
                unit.popular
                  ? "border-brand-700 shadow-xl dark:border-brand-700/50"
                  : "border-slate-200 dark:border-slate-800 shadow-sm"
              } hover:shadow-lg transition-all`}
            >
              {unit.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-accent-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {unit.size}
                </h3>
                <p className="text-sm font-medium text-brand-700 dark:text-brand-400 mt-1">
                  {unit.type}
                </p>
              </div>
              <div className="mb-6 flex items-baseline text-slate-900 dark:text-white">
                <span className="text-4xl font-extrabold tracking-tight">
                  {unit.price}
                </span>
                <span className="ml-1 text-xl font-medium text-slate-500 dark:text-slate-400">
                  /mo
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 flex-grow">
                {unit.description}
              </p>
              <ul className="space-y-4 mb-8">
                {unit.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-brand-700" />
                    </div>
                    <p className="ml-3 text-sm text-slate-700 dark:text-slate-300">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`w-full py-3 px-4 rounded-xl font-semibold text-center transition-colors ${
                  unit.popular
                    ? "bg-brand-700 text-white hover:bg-brand-800 shadow-md"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                }`}
              >
                Reserve Now
              </a>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            * Prices and availability are subject to change. Please contact us
            for the most up-to-date information.
          </p>
        </div>
      </div>
    </section>
  );
}
