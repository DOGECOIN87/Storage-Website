import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: (
      <a
        href="https://maps.google.com/?q=1150+FM+306,+New+Braunfels,+TX+78130"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-brand-700 dark:hover:text-brand-400 transition-colors inline-flex items-center gap-1 group"
      >
        1150 FM 306<br />
        New Braunfels, TX 78130
        <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    ),
  },
  {
    icon: Phone,
    title: "Phone",
    content: (
      <a
        href="tel:+18306265555"
        className="hover:text-brand-700 dark:hover:text-brand-400 transition-colors"
      >
        (830) 626-5555
      </a>
    ),
  },
  {
    icon: Mail,
    title: "Email",
    content: (
      <a
        href="mailto:info@grueneselfstorage.com"
        className="hover:text-brand-700 dark:hover:text-brand-400 transition-colors"
      >
        info@grueneselfstorage.com
      </a>
    ),
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: (
      <>
        <span>Mon-Fri: 9:00 AM – 6:00 PM</span><br />
        <span>Sat: 9:00 AM – 3:00 PM</span><br />
        <span>Sun: Closed</span>
        <p className="mt-2 text-sm font-medium text-brand-700 dark:text-brand-400">
          Gate Access: 6:00 AM – 10:00 PM Daily
        </p>
      </>
    ),
  },
];

export function Location() {
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
      id="location"
      className="py-28 bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-brand-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-500/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"
            }`}
        >
          <h2 className="text-sm font-semibold text-brand-700 dark:text-brand-400 tracking-wide uppercase">
            Location & Contact
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Conveniently located in Gruene
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 dark:text-slate-400 mx-auto">
            Visit our facility or contact us today to reserve your unit.
          </p>
        </div>

        <div id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Card */}
          <div
            className={`bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 lg:p-10 border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-700 ${isVisible ? "animate-slide-left" : "opacity-0 -translate-x-8"
              }`}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Get in Touch
            </h3>
            <div className="space-y-7">
              {contactInfo.map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-start group"
                  style={{
                    animationDelay: isVisible ? `${index * 100 + 300}ms` : "0ms",
                  }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 group-hover:bg-brand-200 dark:group-hover:bg-brand-900/50 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <div className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800">
              <a
                href="tel:+18306265555"
                id="cta-call-now"
                className="w-full inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl transition-all duration-300 shadow-md shadow-brand-600/20 hover:shadow-lg hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now — (830) 626-5555
              </a>
            </div>
          </div>

          {/* Map */}
          <div
            className={`flex flex-col gap-6 transition-all duration-700 ${isVisible ? "animate-slide-right" : "opacity-0 translate-x-8"
              }`}
          >
            <div className="min-h-[500px] bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm relative border border-slate-200 dark:border-slate-800 group">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=1150+FM+306,New+Braunfels,TX+78130&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full"
              ></iframe>
              {/* Gradient overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/10 to-transparent rounded-3xl" />
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-brand-700 rounded-t-3xl" />
            </div>

            {/* Quick directions link */}
            <a
              href="https://maps.google.com/?q=1150+FM+306,+New+Braunfels,+TX+78130"
              target="_blank"
              rel="noopener noreferrer"
              id="cta-get-directions"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-brand-700 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20 hover:bg-brand-100 dark:hover:bg-brand-900/40 rounded-xl border border-brand-200 dark:border-brand-800/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              <MapPin className="h-4 w-4" />
              Get Directions via Google Maps
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
