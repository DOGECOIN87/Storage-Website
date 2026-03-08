import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Logo className="scale-75 origin-left" />
            </div>
            <p className="text-sm text-slate-400 max-w-sm mb-6">
              Providing secure, clean, and accessible storage solutions for the
              New Braunfels and Gruene communities.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#units" className="text-sm hover:text-brand-400 transition-colors">
                  Unit Sizes & Prices
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm hover:text-brand-400 transition-colors">
                  Features & Amenities
                </a>
              </li>
              <li>
                <a href="#location" className="text-sm hover:text-brand-400 transition-colors">
                  Location & Hours
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-brand-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:text-brand-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-brand-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-brand-400 transition-colors">
                  Storage Rules
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Gruene Self Storage. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

