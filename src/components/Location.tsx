import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Get in Touch
            </h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white">
                    Address
                  </h4>
                  <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
                    1150 FM 306<br />
                    New Braunfels, TX 78130
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white">
                    Phone
                  </h4>
                  <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
                    <a href="tel:+18306265555" className="hover:text-brand-700 dark:hover:text-brand-400 transition-colors">
                      (830) 626-5555
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white">
                    Email
                  </h4>
                  <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
                    <a href="mailto:info@grueneselfstorage.com" className="hover:text-brand-700 dark:hover:text-brand-400 transition-colors">
                      info@grueneselfstorage.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white">
                    Office Hours
                  </h4>
                  <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
                    Mon-Fri: 9:00 AM - 6:00 PM<br />
                    Sat: 9:00 AM - 3:00 PM<br />
                    Sun: Closed
                  </p>
                  <p className="mt-2 text-sm font-medium text-brand-700 dark:text-brand-400">
                    Gate Access: 6:00 AM - 10:00 PM Daily
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 h-full">
            <div className="flex-1 min-h-[250px] bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm relative border border-slate-200 dark:border-slate-800">
              {/* Facility Exterior Image Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800 z-10">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 px-6 text-center">
                  [Facility Exterior Image Goes Here]
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
                  Replace with the uploaded exterior photo
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1588612501594-8149171e54c8?auto=format&fit=crop&q=80&w=800"
                alt="Facility Exterior"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex-1 min-h-[250px] bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm relative border border-slate-200 dark:border-slate-800">
              {/* Placeholder for Google Maps */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800">
                <div className="text-center p-6">
                  <MapPin className="h-12 w-12 text-slate-400 dark:text-slate-500 mx-auto mb-4" />
                  <p className="text-lg font-medium text-slate-600 dark:text-slate-300">
                    Interactive Map
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                    1150 FM 306, New Braunfels, TX 78130
                  </p>
                </div>
              </div>
              <img
                src="https://picsum.photos/seed/map/800/600?blur=4"
                alt="Map Location"
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

