/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { UnitSizes } from "./components/UnitSizes";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="gruene-storage-theme">
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 selection:bg-brand-500/30">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <UnitSizes />
          <Location />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

