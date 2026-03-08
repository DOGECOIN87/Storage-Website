/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { SizeGuide } from "./components/SizeGuide";
import { Reviews } from "./components/Reviews";
import { UnitSizes } from "./components/UnitSizes";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="gruene-storage-theme">
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <SizeGuide />
          <Reviews />
          <UnitSizes />
          <Location />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
