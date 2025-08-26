// app/layout.jsx

import { Montserrat } from 'next/font/google';
import './globals.css';

// Konfigurasi font Montserrat dengan semua weight
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap', // Pastikan font langsung tampil
});

export const metadata = {
  title: 'TJM Auto Care',
  description: 'Solusi terbaik untuk semua keresahan mobil Anda',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Terapkan class font di sini */}
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}

