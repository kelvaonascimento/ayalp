'use client';

import Image from 'next/image';
import { useState } from 'react';

const imagensFachada = [
  '/images/imagem%20fachada/MBRASIL_AYA_FACHADA%201_HR.jpg',
  '/images/imagem%20fachada/MBRASIL_AYA_FACHADA%202_HR.jpg',
  '/images/imagem%20fachada/MBRASIL_AYA_FACHADA%203_HR.jpg',
  '/images/imagem%20fachada/MBRASIL_AYA_FACHADA%204_HR.jpg',
];

export default function Diferenciais() {
  const [imagemAtual, setImagemAtual] = useState(0);

  const proximaImagem = () => {
    setImagemAtual((prev) => (prev + 1) % imagensFachada.length);
  };

  const imagemAnterior = () => {
    setImagemAtual((prev) => (prev - 1 + imagensFachada.length) % imagensFachada.length);
  };

  return (
    <section id="diferenciais" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-light text-gray-800 mb-3 md:mb-4">
            O Prédio
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[#8B0000] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Imagem da Fachada com navegação */}
          <div className="relative h-[280px] sm:h-[350px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={imagensFachada[imagemAtual]}
              alt={`Fachada AYA Home Resort - Imagem ${imagemAtual + 1}`}
              fill
              className="object-cover"
            />

            {/* Botões de navegação */}
            <button
              onClick={imagemAnterior}
              className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 bg-white/90 active:bg-white shadow-lg rounded-full p-2 md:p-3 transition-colors"
              aria-label="Imagem anterior"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={proximaImagem}
              className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 bg-white/90 active:bg-white shadow-lg rounded-full p-2 md:p-3 transition-colors"
              aria-label="Próxima imagem"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {imagensFachada.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setImagemAtual(index)}
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors ${
                    imagemAtual === index ? 'bg-white' : 'bg-white/50 active:bg-white/70'
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Texto */}
          <div className="mt-2 md:mt-0">
            <h3 className="text-xl md:text-2xl font-light text-gray-800 mb-4 md:mb-6">
              O empreendimento que Ribeirão Pires aguardava
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
              O AYA Home Resort é o empreendimento que Ribeirão Pires aguardava
              e agora tem o privilégio de receber. Inspirado em um conceito inovador
              de viver bem, traz sofisticação, funcionalidade e modernidade em cada
              detalhe, oferecendo uma experiência única para quem busca conforto,
              beleza e praticidade em um só lugar.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              O apartamento decorado é a perfeita união de elegância e funcionalidade.
              A integração total entre sala de estar, varanda gourmet e cozinha cria
              ambientes amplos, iluminados e ventilados, ideais para momentos de
              convivência com família e amigos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
