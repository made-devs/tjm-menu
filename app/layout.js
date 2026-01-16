// app/layout.jsx
import './globals.css';
import { Montserrat } from 'next/font/google'; // Import font
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GsapInitializer } from './components/GsapInitializer';
import { Footer } from './components/Footer';

// Konfigurasi font
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat', // Buat variabel CSS jika diperlukan
});

export const metadata = {
  title: 'TJM Auto Care',
  description: 'Solusi terbaik untuk semua keresahan mobil Anda',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Hapus link font manual dari sini */}
      <head />
      <body className={`${montserrat.className} bg-zinc-800`}>
        <GsapInitializer />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            {/* Lebar container diubah agar responsif di tablet dan desktop */}
            <div className="mx-auto max-w-md md:max-w-3xl  bg-[#0c0c0c] text-white shadow-2xl min-h-screen flex flex-col">
              <Header />
              <Hero />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
