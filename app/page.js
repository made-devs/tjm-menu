// app/page.jsx

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceSection } from './components/ServiceSection';
import { Footer } from './components/Footer';

export default function TJMAutoCarePage() {
  return (
    <main className="bg-zinc-800 font-sans">
      <div className="mx-auto max-w-md bg-[#0c0c0c] text-white shadow-2xl">
        <div className="min-h-screen">
          <Header />
          <Hero />
          <ServiceSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}

