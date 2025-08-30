// app/layout.jsx

import './globals.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GsapInitializer } from './components/GsapInitializer';
import { Footer } from './components/Footer';

export const metadata = {
  title: 'TJM Auto Care',
  description: 'Solusi terbaik untuk semua keresahan mobil Anda',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-zinc-800">
        <GsapInitializer />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            {/* Lebar container diubah agar responsif di tablet dan desktop */}
            <div className="mx-auto max-w-md md:max-w-3xl lg:max-w-5xl bg-[#0c0c0c] text-white shadow-2xl min-h-screen flex flex-col">
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
