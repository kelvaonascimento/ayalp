'use client';

import Image from 'next/image';
import { useState } from 'react';

const features = [
  { number: '2 e 3', label: 'Dormitórios com suíte' },
  { number: '69m² a 239m²', label: 'com varanda gourmet' },
  { number: '31', label: 'Itens de lazer' },
  { number: 'Mar/28', label: 'Previsão de entrega' },
];

// URL do Tour Virtual Matterport
const TOUR_VIRTUAL_URL = 'https://my.matterport.com/show/?m=xaQDqwpCMHw';

export default function Empreendimento() {
  const [showTour, setShowTour] = useState(false);

  return (
    <section id="empreendimento" className="py-12 md:py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-light text-gray-800 dark:text-gray-100 mb-3 md:mb-4">
            O Empreendimento
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[#8B0000] mx-auto" />
        </div>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-8 items-start">
          {/* Coluna da esquerda - Texto e Boxes */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <h3 className="text-xl md:text-2xl font-light text-gray-800 dark:text-gray-100 mb-4 md:mb-5">
              Viva com exclusividade em Ribeirão Pires
            </h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-5 md:mb-6 leading-relaxed">
              O AYA Home Resort é um empreendimento único que combina sofisticação,
              conforto e qualidade de vida. Com apartamentos de 2 e 3 dormitórios,
              varanda gourmet e uma infraestrutura completa de lazer, o AYA foi
              projetado para quem busca o melhor padrão de moradia.
            </p>

            {/* Boxes de dados */}
            <div className="grid grid-cols-2 gap-2 md:gap-3 mb-3 md:mb-4">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-3 md:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-lg md:text-xl font-bold text-[#8B0000] dark:text-[#ff6b6b]">{feature.number}</p>
                  <p className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400">{feature.label}</p>
                </div>
              ))}
            </div>

            {/* Box Vermelho - 70% Vendido */}
            <div className="bg-[#8B0000] text-white text-center p-3 md:p-4 rounded-lg">
              <p className="text-xl md:text-2xl font-bold">70% VENDIDO</p>
            </div>
          </div>

          {/* Coluna da direita - Tour Virtual (maior) */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="relative h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              {showTour ? (
                <iframe
                  src={TOUR_VIRTUAL_URL}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  allow="xr-spatial-tracking"
                  title="Tour Virtual AYA Home Resort"
                  className="absolute inset-0"
                />
              ) : (
                <>
                  <Image
                    src="/images/galeria/fachada.png"
                    alt="Fachada AYA Home Resort"
                    fill
                    className="object-cover"
                  />
                  {/* Botão Tour Virtual */}
                  <button
                    onClick={() => setShowTour(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 active:bg-black/50 transition-colors group"
                  >
                    <div className="text-center text-white">
                      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-full bg-[#8B0000] flex items-center justify-center group-active:scale-95 transition-transform">
                        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                        </svg>
                      </div>
                      <p className="text-base md:text-lg font-semibold">Tour Virtual 360°</p>
                      <p className="text-xs md:text-sm opacity-80">Toque para explorar</p>
                    </div>
                  </button>
                </>
              )}

              {/* Botão para voltar à imagem */}
              {showTour && (
                <button
                  onClick={() => setShowTour(false)}
                  className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/90 dark:bg-gray-800/90 active:bg-white dark:active:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-lg transition-colors z-10"
                >
                  ✕ Fechar Tour
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
