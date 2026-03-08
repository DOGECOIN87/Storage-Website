import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Unit Sizes", href: "#units" },
    { name: "Size Guide", href: "#size-guide" },
    { name: "Features", href: "#features" },
    { name: "Reviews", href: "#reviews" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-slate-900/30 border-b border-slate-200/80 dark:border-slate-800/80"
        : "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center">
              <Logo />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
              <ThemeToggle />
              <a
                href="tel:+18306265555"
                className="hidden lg:inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                (830) 626-5555
              </a>
              <a
                href="#units"
                id="nav-rent-now"
                className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition-all duration-300 shadow-md shadow-brand-600/20 hover:shadow-lg hover:shadow-brand-600/30 hover:-translate-y-0.5"
              >
                Rent Now
              </a>
            </div>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-brand-400 dark:hover:bg-slate-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="tel:+18306265555"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-4 w-4" />
                (830) 626-5555
              </a>
              <a
                href="#units"
                className="block w-full text-center px-4 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold transition-colors shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Rent Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
