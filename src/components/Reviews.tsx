import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Review {
    name: string;
    rating: number;
    date: string;
    text: string;
    initials: string;
}

const reviews: Review[] = [
    {
        name: "Art D.",
        rating: 5,
        date: "2025",
        text: "The management is very friendly and professional. They even called me promptly when my credit card number changed to prevent a late fee. The facility is clean and I've never had any issues.",
        initials: "AD",
    },
    {
        name: "Jenna S.",
        rating: 5,
        date: "2024",
        text: "The property is secured with an entry code gate and has plenty of cameras installed throughout. They even have a clean, accessible restroom on the property — which is rare for a storage facility!",
        initials: "JS",
    },
    {
        name: "Roger O.",
        rating: 5,
        date: "2025",
        text: "Great customer service from the start. Brandon and I have thoroughly enjoyed working with this company. Excellent customer service, reasonable rates, and clean, safe units.",
        initials: "RO",
    },
    {
        name: "Brandy R.",
        rating: 5,
        date: "2024",
        text: "I've had my first unit since 2010 and added a second two years ago. The staff is always helpful, the facility is well-maintained, and I feel confident my belongings are safe here.",
        initials: "BR",
    },
    {
        name: "Marcus T.",
        rating: 5,
        date: "2024",
        text: "Very helpful and nice employees. The climate-controlled units are a must in Texas weather. Reasonable prices and the drive-up access makes moving items in and out a breeze.",
        initials: "MT",
    },
    {
        name: "Linda G.",
        rating: 5,
        date: "2025",
        text: "I forgot to notify them when I moved out and they noticed, terminated my plan, and even refunded my money. That kind of honesty and professionalism is hard to find. Highly recommend!",
        initials: "LG",
    },
    {
        name: "David W.",
        rating: 4,
        date: "2024",
        text: "Convenient location near Gruene. The 24-hour access upon request is very handy. Security cameras everywhere give me peace of mind. Month-to-month rental is flexible and fair.",
        initials: "DW",
    },
    {
        name: "Sarah M.",
        rating: 5,
        date: "2025",
        text: "We needed storage during our home renovation and this place was perfect. Clean units, great security, and the staff went above and beyond to help us find the right size. Will definitely use again!",
        initials: "SM",
    },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    className={`h-4 w-4 ${i < rating
                            ? "fill-amber-400 text-amber-400"
                            : "fill-slate-200 text-slate-200 dark:fill-slate-700 dark:text-slate-700"
                        }`}
                />
            ))}
        </div>
    );
}

function ReviewCard({ review }: { review: Review }) {
    return (
        <div className="flex-shrink-0 w-[380px] mx-3 group">
            <div className="h-full p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                {/* Decorative quote */}
                <div className="absolute -top-2 -right-2 opacity-[0.04] dark:opacity-[0.06]">
                    <Quote className="h-24 w-24 text-brand-600" />
                </div>

                <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-sm shadow-md">
                            {review.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-slate-900 dark:text-white text-sm truncate">
                                {review.name}
                            </h4>
                            <div className="flex items-center gap-2 mt-0.5">
                                <StarRating rating={review.rating} />
                                <span className="text-xs text-slate-400 dark:text-slate-500">
                                    {review.date}
                                </span>
                            </div>
                        </div>
                        {/* Google icon */}
                        <div className="flex-shrink-0">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                        </div>
                    </div>

                    {/* Review text */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-4">
                        "{review.text}"
                    </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-400 via-brand-600 to-brand-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </div>
    );
}

export function Reviews() {
    const containerRef = useRef<HTMLDivElement>(null);
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

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Double the reviews for seamless infinite scroll
    const doubledReviews = [...reviews, ...reviews];

    return (
        <section
            ref={containerRef}
            id="reviews"
            className="py-20 bg-slate-50 dark:bg-slate-900/50 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div
                    className={`text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"
                        }`}
                >
                    {/* Google rating badge */}
                    <div className="inline-flex items-center gap-3 bg-white dark:bg-slate-800 rounded-full px-5 py-2.5 shadow-sm border border-slate-100 dark:border-slate-700 mb-6">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <div className="flex items-center gap-1.5">
                            <span className="font-bold text-slate-900 dark:text-white text-lg">4.7</span>
                            <div className="flex gap-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < 5
                                                ? "fill-amber-400 text-amber-400"
                                                : "fill-slate-200 text-slate-200"
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-slate-500 dark:text-slate-400 ml-1">
                                (34 reviews)
                            </span>
                        </div>
                    </div>

                    <h2 className="text-sm font-semibold text-brand-700 dark:text-brand-400 tracking-wide uppercase">
                        Customer Reviews
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        What our customers say
                    </p>
                    <p className="mt-4 max-w-2xl text-lg text-slate-500 dark:text-slate-400 mx-auto">
                        Don't just take our word for it — hear from our satisfied customers
                        who trust us with their belongings.
                    </p>
                </div>
            </div>

            {/* Scrolling carousel */}
            <div className="relative">
                {/* Gradient masks on edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 dark:from-slate-900/50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 dark:from-slate-900/50 to-transparent z-10 pointer-events-none" />

                <div
                    className={`flex animate-scroll-left ${isVisible ? "" : "opacity-0"
                        }`}
                    style={
                        {
                            "--scroll-duration": "50s",
                            width: "fit-content",
                        } as React.CSSProperties
                    }
                >
                    {doubledReviews.map((review, i) => (
                        <ReviewCard key={`review-${i}`} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
}
