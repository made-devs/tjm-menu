// app/layout.jsx

import "./globals.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { GsapInitializer } from "./components/GsapInitializer";
import { Footer } from "./components/Footer"; // Import Footer di sini

export const metadata = {
  title: "TJM Auto Care",
  description: "Solusi terbaik untuk semua keresahan mobil Anda",
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
            {/* Tambahkan flex flex-col di sini */}
            <div className="mx-auto max-w-md bg-[#0c0c0c] text-white shadow-2xl min-h-screen flex flex-col">
              <Header />
              <Hero />
              {/* Tambahkan flex-grow agar konten mengisi ruang */}
              <main className="flex-grow">{children}</main>
              <Footer /> {/* Pindahkan Footer ke sini */}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
