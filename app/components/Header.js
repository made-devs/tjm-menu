// app/components/Header.jsx
'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; // Import useRouter
import { gsap } from 'gsap';
import { Menu, X, ChevronRight, ChevronDown, ArrowLeft } from 'lucide-react';

// --- DATA MENU ---
const menuData = [
  {
    text: 'PROMO PAKET SERVICE',
    subMenu: [
      { text: 'PAKET KAKI - KAKI', href: '/paket/kaki-kaki' },
      { text: 'PAKET COMBO KAKI - KAKI', href: '/paket/combo-kaki-kaki' },
      { text: 'PAKET COMBO SUPER KOMPLIT', href: '/paket/combo-super-komplit' },
      { text: 'PAKET SUPER HEMAT', href: '/paket/super-hemat' },
      { text: 'PAKET STEERING', href: '/paket/steering' },
      { text: 'PAKET RACKSTEER HEMAT', href: '/paket/racksteer-hemat' },
      { text: 'PAKET DIESEL', href: '/paket/diesel' },
      { text: 'PAKET SPECIAL', href: '/paket/special' },
      { text: 'PAKET OVERHAUL ENGINE', href: '/paket/overhaul-engine' },
    ],
  },
  {
    text: 'PROMO BULAN INI',
    subMenu: [{ text: '21 PROMO GRATIS SENILAI 4,1 JT', href: '/promo' }],
  },
  {
    text: 'PROMO PAKET MEMBER',
    subMenu: [{ text: 'PAKET MEMBER TAHUNAN KOMPLIT', href: '#' }],
  },
  {
    text: 'PROMO TEBUS MURAH',
    href: '/tebus-murah', // Link untuk kategori utama
  },
  { text: 'FAQ', href: '#' },
  { text: 'COMPANY PROFILE', href: '#' },
  { text: 'TESTIMONI', href: '#' },
  { text: 'SOSIAL MEDIA', href: '#' },
];

// --- KOMPONEN ITEM MENU ---
const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const subMenuRef = useRef(null);
  const hasSubMenu = !!(item.subMenu && item.subMenu.length > 0);

  const containerDuration = useMemo(() => {
    const numItems = item.subMenu?.length || 0;
    return 0.2 + numItems * 0.03;
  }, [item.subMenu]);

  useEffect(() => {
    const subMenuElement = subMenuRef.current;
    if (hasSubMenu && subMenuElement) {
      if (isOpen) {
        gsap.to(subMenuElement, {
          height: 'auto',
          duration: containerDuration,
          ease: 'power2.inOut',
        });
        gsap.fromTo(
          subMenuElement.children,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, stagger: 0.05, duration: 0.2, ease: 'power2.out' }
        );
      } else {
        gsap.to(subMenuElement.children, {
          opacity: 0,
          y: -10,
          stagger: 0.03,
          duration: 0.15,
          ease: 'power2.in',
          onComplete: () =>
            gsap.to(subMenuElement, {
              height: 0,
              duration: containerDuration,
              ease: 'power2.inOut',
            }),
        });
      }
    }
  }, [isOpen, containerDuration, hasSubMenu]);

  const commonClasses =
    'flex w-full items-center justify-between rounded-full bg-gradient-to-br from-black to-[#666666] p-3 text-left text-sm font-bold text-white shadow-md transition-transform hover:scale-105';

  if (hasSubMenu) {
    return (
      <div>
        <button onClick={() => setIsOpen(!isOpen)} className={commonClasses}>
          <span>{item.text}</span>
          <ChevronDown
            className={`h-5 w-5 text-gray-300 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        <div
          ref={subMenuRef}
          className="pl-4 pr-2 pt-2 flex flex-col items-start gap-2 overflow-hidden"
          style={{ height: 0 }}
        >
          {item.subMenu.map((subItem) => (
            <Link
              key={subItem.text}
              href={subItem.href || '#'}
              className="text-gray-800 font-semibold underline text-sm opacity-0"
            >
              {subItem.text}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Link href={item.href || '#'} className={commonClasses}>
      <span>{item.text}</span>
      <ChevronRight className="h-5 w-5 text-gray-300" />
    </Link>
  );
};

// --- KOMPONEN HEADER UTAMA ---
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const pathname = usePathname();
  const router = useRouter(); // Gunakan useRouter
  const isHomePage = pathname === '/';

  return (
    <>
      <header className="sticky top-0 z-30 bg-[#484149]/80 backdrop-blur-sm">
        <div className="absolute top-0 h-1 w-full bg-red-600"></div>
        <div className="relative container mx-auto flex items-center justify-center p-4 h-[72px]">
          {/* Tombol Back (kiri) */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            {!isHomePage && (
              <button
                onClick={() => router.back()} // Panggil router.back()
                className="p-2 text-white transition-opacity hover:opacity-80"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
            )}
          </div>

          {/* Logo (tengah) */}
          <div className="flex justify-center">
            <Image
              src="/logo.webp"
              alt="TJM Auto Care Logo"
              width={160}
              height={48}
              priority={true}
              className="h-12 w-auto"
            />
          </div>

          {/* Tombol Menu (kanan) */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <button
              onClick={toggleMenu}
              className="p-2 transition-opacity hover:opacity-80"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay dan Menu Slide-in */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`fixed top-0 right-0 h-fit max-h-screen w-[75%] max-w-sm bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out flex flex-col ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } rounded-l-2xl rounded-br-2xl`}
      >
        <div className="p-4 md:p-6 flex-shrink-0">
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
        <nav className="flex-grow overflow-y-auto px-4 md:px-6 pb-8 md:pb-12">
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
