import { Logo } from "./Logo";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 relative">
      {/* Top accent line */}
      <div className="w-full h-1 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Logo className="brightness-110" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Providing secure, clean, and accessible storage solutions for the
              New Braunfels and Gruene communities since 2010.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-800 hover:bg-brand-600 text-slate-400 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://maps.google.com/?q=1150+FM+306,+New+Braunfels,+TX+78130"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-800 hover:bg-brand-600 text-slate-400 hover:text-white transition-all duration-300"
                aria-label="Google Maps"
              >
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Unit Sizes & Prices", href: "#units" },
                { label: "Features & Amenities", href: "#features" },
                { label: "Customer Reviews", href: "#reviews" },
                { label: "Location & Hours", href: "#location" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-brand-400 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Storage Rules", href: "#" },
                { label: "Accessibility", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-brand-400 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-400">
                  1150 FM 306<br />
                  New Braunfels, TX 78130
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-400 flex-shrink-0" />
                <a
                  href="tel:+18306265555"
                  className="text-sm text-slate-400 hover:text-brand-400 transition-colors"
                >
                  (830) 626-5555
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-400 flex-shrink-0" />
                <a
                  href="mailto:info@grueneselfstorage.com"
                  className="text-sm text-slate-400 hover:text-brand-400 transition-colors"
                >
                  info@grueneselfstorage.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} A Gruene Self Storage. All rights
            reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-brand-400 transition-colors group"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
