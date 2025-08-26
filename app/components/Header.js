// app/components/Header.jsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';

// --- STRUKTUR DATA MENU BARU ---
// Sekarang mendukung submenu
const menuData = [
  {
    text: 'PROMO PAKET SERVICE',
    // Submenu diupdate sesuai referensi
    subMenu: [
      { text: 'PAKET KAKI - KAKI' },
      { text: 'PAKET COMBO KAKI - KAKI' },
      { text: 'PAKET COMBO SUPER KOMPLIT' },
      { text: 'PAKET SUPER HEMAT' },
      { text: 'PAKET STEERING' },
      { text: 'PAKET RACKSTEER HEMAT' },
      { text: 'PAKET OVERHOUL ENGINE' },
      { text: 'PAKET DIESEL' },
      { text: 'PAKET SPECIAL' },
      { text: 'PAKET AC MOBIL' },
      { text: 'PAKET ANTI KARAT' },
      { text: 'PAKET DETAILING' },
      { text: 'PAKET NANO CERAMIC COATING' },
    ],
  },
  {
    text: 'PROMO BULAN INI',
    subMenu: [{ text: '21 PROMO GRATIS SENILAI 4,1 JT' }],
  },
  {
    text: 'PROMO PAKET MEMBER',
    subMenu: [{ text: 'PAKET MEMBER TAHUNAN KOMPLIT' }],
  },
  {
    text: 'PROMO TEBUS MURAH',
    subMenu: [
      { text: 'PAKET ANTI KARAT' },
      { text: 'PAKET SUPER MENGGIGIL' },
      { text: 'PAKET ANTI KARAT TRIPLE COMBO' },
      { text: 'PAKET NANO CERAMIC COATING' },
      { text: 'PAKET DETAILING' },
    ],
  },
  { text: 'FAQ' },
  { text: 'COMPANY PROFILE' },
  { text: 'TESTIMONI' },
  { text: 'SOSIAL MEDIA' },
];

// --- KOMPONEN BARU UNTUK SETIAP ITEM MENU ---
const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubMenu = item.subMenu && item.subMenu.length > 0;

  return (
    <div>
      <button
        onClick={() => hasSubMenu && setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-full bg-gradient-to-br from-black to-[#666666] p-3 text-left text-sm font-bold text-white shadow-md transition-transform hover:scale-105"
      >
        <span>{item.text}</span>
        {hasSubMenu ? (
          <ChevronDown
            className={`h-5 w-5 text-gray-300 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        ) : (
          <ChevronRight className="h-5 w-5 text-gray-300" />
        )}
      </button>
      {hasSubMenu && isOpen && (
        <div className="pl-4 pr-2 py-2 flex flex-col items-start gap-2">
          {item.subMenu.map((subItem) => (
            <a
              key={subItem.text}
              href="#"
              className="text-gray-800 font-semibold underline text-sm"
            >
              {subItem.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

// --- KOMPONEN HEADER UTAMA ---
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-30 bg-[#484149]/80 backdrop-blur-sm">
        <div className="absolute top-0 h-1 w-full bg-red-600"></div>
        <div className="container mx-auto flex items-center justify-between p-4 pt-5">
          <div className="w-1/3"></div>
          <div className="flex w-1/3 justify-center">
            <Image
              src="/logo.webp"
              alt="TJM Auto Care Logo"
              width={160}
              height={48}
              priority={true}
              className="h-12 w-auto"
            />
          </div>
          <div className="flex w-1/3 justify-end">
            <button
              onClick={toggleMenu}
              className="p-2 transition-opacity hover:opacity-80"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out flex flex-col ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } rounded-l-2xl rounded-br-2xl`}
      >
        <div className="p-4 flex-shrink-0">
          <div className="flex items-center justify-between mb-6">
            <Image
              src="/logo.webp"
              alt="TJM Auto Care Logo"
              width={120}
              height={36}
              className="h-9 w-auto"
            />
            <button onClick={toggleMenu} className="p-2 text-gray-800">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Kontainer menu yang bisa di-scroll */}
        <nav className="flex-grow overflow-y-auto px-4 pb-8">
          <div className="flex flex-col gap-3">
            {menuData.map((item) => (
              <MenuItem key={item.text} item={item} />
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};
