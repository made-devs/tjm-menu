// app/components/ServiceCard.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ServiceCard = ({ title, images, slug }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow = 3;
  const totalItems = images.length;
  const maxIndex = totalItems > itemsToShow ? totalItems - itemsToShow : 0;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  // Cek apakah ini kartu garansi
  const isWarrantyCard = title.includes("GARANSI");

  return (
    <div className="space-y-3">
      <div
        className={`flex items-start gap-4 ${
          isWarrantyCard ? "justify-center" : "justify-between"
        }`}
      >
        <h4
          className={`font-black ${isWarrantyCard ? "text-2xl" : "text-base"}`}
        >
          {title}
        </h4>
        {/* Tombol hanya akan muncul jika bukan kartu garansi */}
        {!isWarrantyCard && slug && (
          <Link
            href={`/promo/${slug}`}
            className="flex-shrink-0 rounded-full border border-red-600 bg-gradient-to-br from-[#484149] via-[#333238] to-[#1F1D20] px-4 py-1.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-105"
          >
            AMBIL PROMO
          </Link>
        )}
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-1"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="overflow-hidden rounded-md border-2 border-red-600">
                  <Image
                    src={src}
                    alt={`${title} image ${index + 1}`}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {maxIndex > 0 && (
          <>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-black/50 p-1 text-white transition-opacity hover:bg-black/80 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-black/50 p-1 text-white transition-opacity hover:bg-black/80 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
