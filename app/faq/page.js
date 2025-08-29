// app/faq/page.jsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Plus } from 'lucide-react';
import { faqData } from '../data/faq';

// Komponen untuk satu item FAQ
const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef(null);
  const iconRef = useRef(null); // Ref untuk ikon

  // Animasi buka-tutup dengan GSAP
  useEffect(() => {
    // Animasi kontainer jawaban
    gsap.to(answerRef.current, {
      height: isOpen ? 'auto' : 0,
      opacity: isOpen ? 1 : 0,
      paddingTop: isOpen ? '1.75rem' : 0,
      paddingBottom: isOpen ? '1rem' : 0,
      duration: 0.4,
      ease: 'power1.out', // Menambahkan ease untuk perlambatan di akhir
    });

    // Animasi rotasi ikon
    gsap.to(iconRef.current, {
      rotation: isOpen ? 45 : 0,
      duration: 0.3,
      ease: 'power1.out', // Menambahkan ease agar konsisten
    });
  }, [isOpen]);

  return (
    <div>
      {/* Tombol Pertanyaan (Bubble) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-4 text-left bg-white text-black font-bold text-sm rounded-xl shadow-lg relative z-10"
      >
        <span>{item.question}</span>
        <Plus ref={iconRef} className="h-6 w-6 flex-shrink-0" />
      </button>

      {/* Kontainer Jawaban yang dianimasikan */}
      <div
        ref={answerRef}
        className="bg-white text-black rounded-xl shadow-lg relative -mt-3 z-0 overflow-hidden"
        style={{ height: 0, opacity: 0 }} // Kondisi awal
      >
        <div className="px-4 text-sm text-zinc-700 space-y-3">
          {item.answer.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

// Komponen Halaman FAQ Utama
export default function FaqPage() {
  return (
    <section className="p-4">
      <h1 className="text-center text-4xl font-black tracking-wider mb-8 text-white">
        FAQ
      </h1>
      <div className="space-y-4">
        {faqData.map((item) => (
          <FaqItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
