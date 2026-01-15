'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

const images = [
  { src: '/images/imagens finais/AYA HOME RESORT - PISCINA COBERTA AQUECIDA E POOL LOUNGE.jpg', alt: 'Piscina Coberta Aquecida e Pool Lounge' },
  { src: '/images/imagens finais/AYA HOME RESORT - PISCINA DESCOBERTA CLIMATIZADA COM BAR.jpg', alt: 'Piscina Descoberta Climatizada com Bar' },
  { src: '/images/imagens finais/AYA HOME RESORT - SOLARIUM.jpg', alt: 'Solarium' },
  { src: '/images/imagens finais/AYA HOME RESORT - BEACH ARENA.jpg', alt: 'Beach Arena' },
  { src: '/images/imagens finais/AYA HOME RESORT - FITNESS.jpg', alt: 'Fitness' },
  { src: '/images/imagens finais/AYA HOME RESORT - FITNESS EXTERNO.jpg', alt: 'Fitness Externo' },
  { src: '/images/imagens finais/AYA HOME RESORT - CHURRASQUEIRA.jpg', alt: 'Churrasqueira' },
  { src: '/images/imagens finais/AYA HOME RESORT - ATELIÊ DO CHEF.jpg', alt: 'Ateliê do Chef' },
  { src: '/images/imagens finais/AYA HOME RESORT - PRAÇA DO FOGO.jpg', alt: 'Praça do Fogo' },
  { src: '/images/imagens finais/AYA HOME RESORT - PRAÇA DA ÁRVORE.jpg', alt: 'Praça da Árvore' },
  { src: '/images/imagens finais/AYA HOME RESORT - CINEMA.jpg', alt: 'Cinema' },
  { src: '/images/imagens finais/AYA HOME RESORT - BRINQUEDOTECA .jpg', alt: 'Brinquedoteca' },
  { src: '/images/imagens finais/AYA HOME RESORT - PLAYGROUND.jpg', alt: 'Playground' },
  { src: '/images/imagens finais/AYA HOME RESORT - PET PLACE COM DOG WASH.jpg', alt: 'Pet Place com Dog Wash' },
  { src: '/images/imagens finais/AYA HOME RESORT - COWORKING E SALA DE REUNIÃO.jpg', alt: 'Coworking e Sala de Reunião' },
  { src: '/images/imagens finais/AYA HOME RESORT - ESPAÇO BEAUTY.jpg', alt: 'Espaço Beauty' },
  { src: '/images/imagens finais/AYA HOME RESORT - HALL.jpg', alt: 'Hall' },
  { src: '/images/imagens finais/AYA HOME RESORT - HORTA.jpg', alt: 'Horta' },
  { src: '/images/imagens finais/AYA HOME RESORT - MARKET.jpg', alt: 'Market' },
  { src: '/images/imagens finais/AYA HOME RESORT - LAVANDERIA.jpg', alt: 'Lavanderia' },
  { src: '/images/imagens finais/AYA HOME RESORT - ESPAÇO UBER.jpg', alt: 'Espaço Uber' },
];

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);
  const dragDistance = useRef(0);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setIsLightboxOpen(true);
  };

  const handleThumbnailClick = (index: number) => {
    // Só seleciona se não arrastou
    if (dragDistance.current < 10) {
      setSelectedImage(index);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX;
    scrollLeftPos.current = sliderRef.current.scrollLeft;
    dragDistance.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = x - startX.current;
    dragDistance.current = Math.abs(walk);
    sliderRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="areas-comuns" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-light text-gray-800 mb-3 md:mb-4">
            Áreas Comuns
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[#8B0000] mx-auto mb-4 md:mb-6" />
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-2">
            31 itens de lazer para você e sua família aproveitarem todos os momentos
          </p>
        </div>

        {/* Imagem Principal Grande */}
        <div
          className="relative w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl cursor-pointer group mb-4 md:mb-6"
          onClick={() => openLightbox(selectedImage)}
        >
          <Image
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Label da imagem */}
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white">
            <p className="text-lg md:text-2xl lg:text-3xl font-light">{images[selectedImage].alt}</p>
            <p className="text-xs md:text-sm opacity-80 mt-1">Toque para ampliar</p>
          </div>

          {/* Ícone de expandir */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </div>
        </div>

        {/* Slider de Thumbnails */}
        <div className="relative">
          {/* Botão Esquerda */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-lg rounded-full p-1 md:p-2 active:bg-gray-100 transition-colors"
            aria-label="Anterior"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Thumbnails */}
          <div
            ref={sliderRef}
            className={`flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide py-2 px-7 sm:px-8 md:px-10 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`flex-shrink-0 relative w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 rounded-lg overflow-hidden transition-all cursor-pointer ${
                  selectedImage === index
                    ? 'ring-2 md:ring-3 ring-[#8B0000] scale-105'
                    : 'opacity-60 active:opacity-100'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* Botão Direita */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-lg rounded-full p-1 md:p-2 active:bg-gray-100 transition-colors"
            aria-label="Próximo"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicador de quantidade */}
        <p className="text-center text-gray-500 text-xs md:text-sm mt-3 md:mt-4">
          {selectedImage + 1} de {images.length} imagens
        </p>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-3xl md:text-4xl active:text-gray-300 z-10"
            onClick={() => setIsLightboxOpen(false)}
          >
            &times;
          </button>

          <button
            className="absolute left-2 md:left-8 text-white text-4xl md:text-5xl active:text-gray-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
            }}
          >
            &#8249;
          </button>

          <div className="relative w-full h-full max-w-6xl max-h-[85vh] mx-2 md:mx-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
              <p className="text-base md:text-xl font-light">{images[selectedImage].alt}</p>
              <p className="text-xs md:text-sm opacity-60">{selectedImage + 1} / {images.length}</p>
            </div>
          </div>

          <button
            className="absolute right-2 md:right-8 text-white text-4xl md:text-5xl active:text-gray-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
            }}
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}
