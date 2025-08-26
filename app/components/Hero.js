// app/components/Hero.jsx

import Image from 'next/image';

export const Hero = () => (
  // Padding diubah dari p-4 menjadi pt-4, hanya padding atas yang dipakai
  <section className="pt-4 flex flex-col items-center">
    <Image
      src="/hero.webp"
      alt="TJM Auto Care Hero Banner"
      width={400} // Lebar gambar asli dalam pixel
      height={200} // Tinggi gambar asli dalam pixel
      priority // Prioritaskan load gambar ini karena ada di atas
      className="w-[70%] h-auto rounded-md"
    />
    <Image
      src="/redline.webp"
      alt="Redline separator"
      width={500} // Lebar gambar asli dalam pixel
      height={5} // Tinggi gambar asli dalam pixel
      className="w-full h-auto"
    />
  </section>
);
