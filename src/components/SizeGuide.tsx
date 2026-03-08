import { motion } from "motion/react";
import { Box, Home, Car, Warehouse } from "lucide-react";
import { useState } from "react";

const sizes = [
    {
        id: "5x10",
        label: "5' x 10'",
        title: "Large Walk-in Closet",
        fits: "Contents of a dorm room or small studio apartment.",
        equivalent: "50 sq. ft.",
        icon: Box,
        image: "https://res.cloudinary.com/storelocal/image/fetch//https://dr2r4w0s7b8qm.cloudfront.net/image_manager_app/d3d63aa12ee8d19c10ceff783ee7727f-20240405-062513.jpg",
    },
    {
        id: "10x10",
        label: "10' x 10'",
        title: "Half Standard Garage",
        fits: "Contents of a one-bedroom apartment, including appliances and furniture.",
        equivalent: "100 sq. ft.",
        icon: Home,
        image: "https://res.cloudinary.com/storelocal/image/fetch//https://dr2r4w0s7b8qm.cloudfront.net/image_manager_app/46f0f39a7f3d6e8be098022be1d134ed-20240405-062725.jpg",
    },
    {
        id: "10x20",
        label: "10' x 20'",
        title: "Standard One-Car Garage",
        fits: "Contents of a multi-bedroom house, or a vehicle/small boat.",
        equivalent: "200 sq. ft.",
        icon: Car,
        image: "https://res.cloudinary.com/storelocal/image/fetch//https://dr2r4w0s7b8qm.cloudfront.net/image_manager_app/aae91041e5d839212b43256d5106f326-20240405-063140.jpg",
    },
    {
        id: "10x30",
        label: "10' x 30'",
        title: "Large Multi-Room",
        fits: "Contents of a 3-5 bedroom house, large vehicles, or business inventory.",
        equivalent: "300 sq. ft.",
        icon: Warehouse,
        image: "https://res.cloudinary.com/storelocal/image/fetch//https://dr2r4w0s7b8qm.cloudfront.net/image_manager_app/640d25930b1799440dcfb95f7a388eb3-20240405-063517.jpg",
    },
];

export function SizeGuide() {
    const [activeTab, setActiveTab] = useState("5x10");

    const activeSize = sizes.find((s) => s.id === activeTab) || sizes[0];

    return (
        <section id="size-guide" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-semibold text-brand-700 dark:text-brand-400 tracking-wide uppercase">
                        Size Guide
                    </h2>
                    <p className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                        Not sure what size you need?
                    </p>
                    <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">
                        Compare our most popular unit sizes to find the perfect fit for your belongings.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Tabs */}
                    <div className="w-full lg:w-1/3 flex lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
                        {sizes.map((size) => (
                            <button
                                key={size.id}
                                onClick={() => setActiveTab(size.id)}
                                className={`flex-shrink-0 flex items-center gap-4 p-5 rounded-2xl border-2 transition-all duration-300 text-left ${activeTab === size.id
                                    ? "bg-brand-50 dark:bg-brand-900/20 border-brand-600 dark:border-brand-500 shadow-lg shadow-brand-500/10"
                                    : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700"
                                    }`}
                            >
                                <div className={`p-3 rounded-xl transition-colors ${activeTab === size.id ? "bg-brand-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                                    }`}>
                                    <size.icon size={20} />
                                </div>
                                <div>
                                    <div className={`font-bold text-lg ${activeTab === size.id ? "text-brand-700 dark:text-brand-400" : "text-slate-900 dark:text-white"}`}>
                                        {size.label}
                                    </div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400">{size.equivalent}</div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Display */}
                    <div className="w-full lg:w-2/3">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 lg:p-12 border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-8 items-center"
                        >
                            <div className="flex-1 space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                        {activeSize.title}
                                    </h3 >
                                    <span className="inline-block px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-400 text-xs font-bold uppercase tracking-wider">
                                        {activeSize.label} Unit
                                    </span>
                                </div>

                                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {activeSize.fits}
                                </p>

                                <div className="pt-4">
                                    <a
                                        href="#units"
                                        className="inline-flex items-center text-brand-700 dark:text-brand-400 font-bold hover:underline gap-2 group"
                                    >
                                        View Pricing for this size
                                        <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                                            &rarr;
                                        </motion.span>
                                    </a>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 relative">
                                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src={activeSize.image}
                                        alt={activeSize.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
