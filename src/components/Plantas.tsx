'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

const plantas = [
  {
    id: 1,
    nome: 'Tipo 01',
    area: '114,30m²',
    imagens: [
      '/images/plantas/tipo%201/4-4.png',
      '/images/plantas/tipo%201/3-6.png',
      '/images/plantas/tipo%201/2-6.png',
    ],
    descricao: '3 dormitórios sendo 1 suíte, varanda gourmet, sala ampliada, cozinha e área de serviço',
  },
  {
    id: 2,
    nome: 'Tipo 02',
    area: '112,80m²',
    imagens: [
      '/images/plantas/tipo%202/7070.png',
      '/images/plantas/tipo%202/3-7.png',
      '/images/plantas/tipo%202/2-7.png',
    ],
    descricao: '3 dormitórios sendo 1 suíte, varanda gourmet, sala, cozinha e área de serviço',
  },
  {
    id: 3,
    nome: 'Tipo 03',
    area: '69,90m²',
    imagens: [
      '/images/plantas/tipo%203/4-3.png',
      '/images/plantas/tipo%203/3-5.png',
      '/images/plantas/tipo%203/2-5.png',
    ],
    descricao: '2 dormitórios sendo 1 suíte, varanda gourmet, sala, cozinha e área de serviço',
  },
  {
    id: 4,
    nome: 'Tipo 04',
    area: '70,70m²',
    imagens: [
      '/images/plantas/tipo%204/4-5.png',
      '/images/plantas/tipo%204/3-9.png',
      '/images/plantas/tipo%204/2-9.png',
    ],
    descricao: '2 dormitórios sendo 1 suíte, varanda gourmet, sala, cozinha e área de serviço',
  },
  {
    id: 5,
    nome: 'Cobertura',
    area: '237,25m²',
    imagens: [
      '/images/plantas/cobertura%20237/cobertura-239-2pav-1.png',
      '/images/plantas/cobertura%20237/cobertura-129-2pav-1-1.png',
    ],
    descricao: 'Cobertura duplex com terraço, 3 dormitórios sendo 1 suíte master, sala ampliada e área gourmet',
  },
  {
    id: 6,
    nome: 'Cobertura',
    area: '129,35m²',
    imagens: [
      '/images/plantas/cobertura%20129/cobertura-129-2pav-1.png',
      '/images/plantas/cobertura%20129/cobertura-129-2pav-2.png',
    ],
    descricao: 'Cobertura duplex com terraço, 2 dormitórios sendo 1 suíte, sala e área gourmet',
  },
  {
    id: 7,
    nome: 'Garden',
    area: '143,08m²',
    imagens: [
      '/images/plantas/garden%20143/garden-14308.png',
    ],
    descricao: 'Unidade térrea com jardim privativo, 3 dormitórios sendo 1 suíte, varanda gourmet',
  },
  {
    id: 8,
    nome: 'Garden',
    area: '94,24m²',
    imagens: [
      '/images/plantas/garden%2094/garden-9424-1.png',
    ],
    descricao: 'Unidade térrea com jardim privativo, 2 dormitórios sendo 1 suíte, varanda gourmet',
  },
];

export default function Plantas() {
  const [plantaSelecionada, setPlantaSelecionada] = useState(0);
  const [imagemAtual, setImagemAtual] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const dragDistance = useRef(0);

  const handlePlantaChange = (index: number) => {
    setPlantaSelecionada(index);
    setImagemAtual(0);
  };

  const proximaImagem = () => {
    const totalImagens = plantas[plantaSelecionada].imagens.length;
    setImagemAtual((prev) => (prev + 1) % totalImagens);
  };

  const imagemAnterior = () => {
    const totalImagens = plantas[plantaSelecionada].imagens.length;
    setImagemAtual((prev) => (prev - 1 + totalImagens) % totalImagens);
  };

  // Handlers para arrastar a imagem
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.pageX;
    dragDistance.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    dragDistance.current = e.pageX - startX.current;
  };

  const handleMouseUp = () => {
    if (isDragging && Math.abs(dragDistance.current) > 50) {
      const totalImagens = plantas[plantaSelecionada].imagens.length;
      if (totalImagens > 1) {
        if (dragDistance.current > 0) {
          imagemAnterior();
        } else {
          proximaImagem();
        }
      }
    }
    setIsDragging(false);
    dragDistance.current = 0;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    dragDistance.current = 0;
  };

  const plantaAtual = plantas[plantaSelecionada];
  const totalImagens = plantaAtual.imagens.length;

  return (
    <section id="plantas" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-light text-gray-800 dark:text-gray-100 mb-3 md:mb-4">
            Plantas
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[#8B0000] mx-auto mb-4 md:mb-6" />
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Escolha a planta ideal para você e sua família
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-6 md:mb-12 px-1">
          {plantas.map((planta, index) => (
            <button
              key={planta.id}
              onClick={() => handlePlantaChange(index)}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${
                plantaSelecionada === index
                  ? 'bg-[#8B0000] text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 active:bg-gray-100 dark:active:bg-gray-600 shadow-sm'
              }`}
            >
              {planta.nome} | {planta.area}
            </button>
          ))}
        </div>

        {/* Planta Selecionada */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div
            className={`relative h-[320px] sm:h-[400px] md:h-[500px] bg-white dark:bg-gray-700 rounded-lg shadow-lg dark:shadow-gray-900/50 overflow-hidden select-none ${isDragging ? 'cursor-grabbing' : totalImagens > 1 ? 'cursor-grab' : ''}`}
            onMouseDown={totalImagens > 1 ? handleMouseDown : undefined}
            onMouseMove={totalImagens > 1 ? handleMouseMove : undefined}
            onMouseUp={totalImagens > 1 ? handleMouseUp : undefined}
            onMouseLeave={totalImagens > 1 ? handleMouseLeave : undefined}
            onTouchStart={totalImagens > 1 ? (e) => { startX.current = e.touches[0].pageX; setIsDragging(true); dragDistance.current = 0; } : undefined}
            onTouchMove={totalImagens > 1 ? (e) => { if (isDragging) dragDistance.current = e.touches[0].pageX - startX.current; } : undefined}
            onTouchEnd={totalImagens > 1 ? () => {
              if (isDragging && Math.abs(dragDistance.current) > 50) {
                if (dragDistance.current > 0) imagemAnterior();
                else proximaImagem();
              }
              setIsDragging(false);
              dragDistance.current = 0;
            } : undefined}
          >
            <Image
              src={plantaAtual.imagens[imagemAtual]}
              alt={`${plantaAtual.nome} - Imagem ${imagemAtual + 1}`}
              fill
              className="object-contain p-2 md:p-4 pointer-events-none"
              draggable={false}
            />

            {/* Navegação entre imagens */}
            {totalImagens > 1 && (
              <>
                <button
                  onClick={imagemAnterior}
                  className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-600/90 active:bg-white dark:active:bg-gray-500 shadow-lg rounded-full p-1.5 md:p-2 transition-colors z-10"
                  aria-label="Imagem anterior"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={proximaImagem}
                  className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-600/90 active:bg-white dark:active:bg-gray-500 shadow-lg rounded-full p-1.5 md:p-2 transition-colors z-10"
                  aria-label="Próxima imagem"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Indicadores de imagem (pontinhos) */}
                <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {plantaAtual.imagens.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setImagemAtual(index)}
                      className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors ${
                        imagemAtual === index ? 'bg-[#8B0000]' : 'bg-gray-300 dark:bg-gray-500 active:bg-gray-400 dark:active:bg-gray-400'
                      }`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-light text-gray-800 dark:text-gray-100 mb-2 md:mb-4">
              {plantaAtual.nome}
            </h3>
            <p className="text-3xl md:text-4xl font-bold text-[#8B0000] dark:text-[#ff6b6b] mb-3 md:mb-4">
              {plantaAtual.area}
            </p>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-3 md:mb-4 leading-relaxed">
              {plantaAtual.descricao}
            </p>

            {totalImagens > 1 && (
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-6 md:mb-8">
                {imagemAtual + 1} de {totalImagens} imagens - arraste para navegar
              </p>
            )}

            <a
              href="#contato"
              className="inline-block bg-[#8B0000] active:bg-[#6B0000] text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium transition-colors rounded"
            >
              Solicitar mais informações
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
