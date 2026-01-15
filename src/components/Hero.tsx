'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const heroImages = [
  { src: '/images/hero.png', position: 'object-[70%_center] md:object-center' },
  { src: '/images/hero-2.png', position: 'object-[80%_80%] md:object-center' },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const dragDistance = useRef(0);

  // Auto-play a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    startX.current = e.touches[0].pageX;
    dragDistance.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    dragDistance.current = e.touches[0].pageX - startX.current;
  };

  const handleTouchEnd = () => {
    if (isDragging && Math.abs(dragDistance.current) > 50) {
      if (dragDistance.current > 0) {
        prevImage();
      } else {
        nextImage();
      }
    }
    setIsDragging(false);
    dragDistance.current = 0;
  };

  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center justify-center pt-16 pb-32 md:pb-24">
      <div
        className="absolute inset-0 z-0"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={`AYA Home Resort - Imagem ${index + 1}`}
              fill
              className={`object-cover ${image.position}`}
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40" />

        {/* Indicadores */}
        <div className="absolute bottom-36 sm:bottom-28 md:bottom-32 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentImage ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center text-white px-5">
        <Image
          src="/images/logo.png"
          alt="AYA Home Resort"
          width={160}
          height={64}
          className="mx-auto mb-4 md:mb-6 brightness-0 invert w-32 md:w-48"
        />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-3 md:mb-4 max-w-5xl mx-auto leading-snug md:leading-tight">
          {/* Mobile */}
          <span className="md:hidden">
            <span className="font-bold">AYA Home Resort</span>,<br />
            o primeiro <span className="font-bold">alto padrão</span><br />
            no centro urbano de<br />
            <span className="font-bold">Ribeirão Pires</span>
          </span>
          {/* Desktop */}
          <span className="hidden md:inline">
            AYA Home Resort, o primeiro alto padrão
            <br />
            no centro urbano de Ribeirão Pires
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-6 md:mb-8 opacity-90 px-2">
          {/* Mobile */}
          <span className="md:hidden">
            O <span className="font-semibold">novo padrão</span> de viver bem<br />
            no centro urbano da cidade
          </span>
          {/* Desktop */}
          <span className="hidden md:inline">
            O novo padrão de viver bem no centro urbano da cidade
          </span>
        </p>
        <a
          href="#contato"
          className="inline-block bg-[#8B0000] hover:bg-[#6B0000] active:bg-[#5B0000] text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium transition-colors rounded"
        >
          Saiba Mais
        </a>
      </div>

      {/* Barra de informações inferior - centralizada */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center">
        <div className="flex flex-col sm:flex-row max-w-4xl w-full">
          {/* Dormitórios */}
          <div className="bg-gray-900/95 text-white px-4 py-3 sm:px-6 sm:py-4 md:px-10 md:py-6 flex items-center justify-center gap-2 sm:gap-3">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold">2</span>
              <span className="text-xs sm:text-sm text-gray-400">ou</span>
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold">3</span>
            </div>
            <p className="text-base sm:text-lg md:text-xl font-semibold leading-tight">Dorms c/suíte</p>
          </div>

          {/* Localização */}
          <div className="bg-[#8B0000] text-white px-4 py-3 sm:px-6 sm:py-4 md:px-10 md:py-6 flex items-center justify-center gap-2 sm:gap-3 flex-1">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#8B0000]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <p className="text-sm sm:text-base md:text-lg font-medium leading-tight">
              R. Miguel Prisco, 2000 - Centro, Ribeirão Pires
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
