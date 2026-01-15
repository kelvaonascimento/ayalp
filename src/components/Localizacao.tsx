'use client';

import { useRef } from 'react';

const facilidades = [
  {
    nome: 'Estação de Trem CPTM',
    tempo: '3',
    icone: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2c-4 0-8 .5-8 4v9.5c0 1.93 1.57 3.5 3.5 3.5L6 20.5v.5h2l2-2h4l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm2 0V6h5v5h-5zm3.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      </svg>
    ),
  },
  {
    nome: 'Terminal Rodoviário',
    tempo: '2',
    icone: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
      </svg>
    ),
  },
  {
    nome: 'Hospital Ribeirão Pires (Rede D\'Or)',
    tempo: '5',
    icone: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
      </svg>
    ),
  },
  {
    nome: 'UPA 24 Horas',
    tempo: '5',
    icone: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 14h-4v4h-4v-4H6v-4h4V6h4v4h4m1-9H5c-1.11 0-2 .89-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2z"/>
      </svg>
    ),
  },
  {
    nome: 'Supermercado',
    tempo: '3',
    icone: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    ),
  },
  {
    nome: 'Shopping',
    tempo: '4',
    icone: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z"/>
      </svg>
    ),
  },
  {
    nome: 'Prefeitura',
    tempo: '1',
    icone: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3L2 12h3v9h6v-6h2v6h6v-9h3L12 3zm0 8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      </svg>
    ),
  },
  {
    nome: 'Escolas',
    tempo: '5',
    icone: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
      </svg>
    ),
  },
  {
    nome: 'Farmácia',
    tempo: '2',
    icone: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 6V2H8v4H2v16h20V6h-6zm-6-2h4v2h-4V4zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-4h-2v-2h2v-4h2v4h2v2h-2v4zm4 0h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
      </svg>
    ),
  },
  {
    nome: 'Bancos',
    tempo: '3',
    icone: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 10h3v7H4v-7zm6 0h3v7h-3v-7zm8-10L2 5v2h19V5L18 0zM2 22h19v-3H2v3zm12-12h3v7h-3v-7z"/>
      </svg>
    ),
  },
  {
    nome: 'Restaurantes',
    tempo: '2',
    icone: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
      </svg>
    ),
  },
  {
    nome: 'Parque Milton Marinho',
    tempo: '6',
    icone: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.96v-4H21l-4-6zM6.79 16l3.93-6.61L6.79 16zm5.21-2.59L8.08 8l3.92-4.29L15.92 8l-3.92 5.41z"/>
      </svg>
    ),
  },
  {
    nome: 'Rodoanel',
    tempo: '10',
    icone: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
      </svg>
    ),
  },
  {
    nome: 'Padarias',
    tempo: '2',
    icone: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm2-6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/>
      </svg>
    ),
  },
  {
    nome: 'Academias',
    tempo: '4',
    icone: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
      </svg>
    ),
  },
];

export default function Localizacao() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX;
    scrollLeftPos.current = sliderRef.current.scrollLeft;
    sliderRef.current.style.cursor = 'grabbing';
    sliderRef.current.style.userSelect = 'none';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = x - startX.current;
    sliderRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  const handleMouseUp = () => {
    if (!sliderRef.current) return;
    isDragging.current = false;
    sliderRef.current.style.cursor = 'grab';
    sliderRef.current.style.removeProperty('user-select');
  };

  const handleMouseLeave = () => {
    if (!sliderRef.current) return;
    isDragging.current = false;
    sliderRef.current.style.cursor = 'grab';
    sliderRef.current.style.removeProperty('user-select');
  };

  return (
    <section id="localizacao" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-light text-gray-800 mb-3 md:mb-4">
            Localização Privilegiada
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[#8B0000] mx-auto mb-4 md:mb-6" />
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Rua Miguel Prisco, 2001 - Ribeirão Pires, SP
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-xl md:text-2xl font-light text-gray-800 mb-4 md:mb-6">
              Tudo o que você precisa por perto
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#8B0000] rounded-full flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-600">Fácil acesso às principais vias</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#8B0000] rounded-full flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-600">Próximo a escolas e hospitais</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#8B0000] rounded-full flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-600">Comércio e serviços na região</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#8B0000] rounded-full flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-600">Região tranquila e arborizada</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#8B0000] rounded-full flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-600">Estação de trem nas proximidades</span>
              </li>
            </ul>
          </div>

          <div className="order-1 md:order-2 h-[280px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8876543210!2d-46.41234567890!3d-23.71234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQyJzQ0LjQiUyA0NsKwMjQnNDQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização AYA Home Resort"
            />
          </div>
        </div>

        {/* Slider de Facilidades */}
        <div className="mt-10 md:mt-16">
          <h3 className="text-lg md:text-2xl font-light text-gray-800 mb-4 md:mb-8 text-center">
            Tempo de deslocamento de carro
          </h3>

          <div className="relative">
            {/* Botão Esquerda */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-lg rounded-full p-1.5 md:p-3 active:bg-gray-100 transition-colors"
              aria-label="Anterior"
            >
              <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Slider */}
            <div
              ref={sliderRef}
              className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide pb-4 px-8 md:px-12 cursor-grab select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              {facilidades.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 md:w-40 bg-white rounded-xl shadow-md p-4 md:p-6 text-center active:shadow-lg transition-shadow"
                >
                  <div className="text-[#8B0000] flex justify-center mb-2 md:mb-3">
                    <div className="w-6 h-6 md:w-8 md:h-8">{item.icone}</div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mb-2 font-medium leading-tight min-h-[32px] md:min-h-[40px] flex items-center justify-center">
                    {item.nome}
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-2xl md:text-3xl font-bold text-[#8B0000]">{item.tempo}</span>
                    <span className="text-xs md:text-sm text-gray-500">min</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Botão Direita */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-lg rounded-full p-1.5 md:p-3 active:bg-gray-100 transition-colors"
              aria-label="Próximo"
            >
              <svg className="w-4 h-4 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
