'use client';

import Image from 'next/image';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const menuItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'O Empreendimento', href: '#empreendimento' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Áreas Comuns', href: '#areas-comuns' },
  { label: 'Plantas', href: '#plantas' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800/50 z-50 transition-colors">
      <div className="container mx-auto px-4 py-2.5 md:py-3 flex items-center justify-between">
        <a href="#inicio" className="flex items-center">
          <Image
            src="/images/logo-vermelho.png"
            alt="AYA Home Resort"
            width={120}
            height={50}
            className="h-10 md:h-12 w-auto dark:brightness-110"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:text-[#8B0000] dark:hover:text-[#ff6b6b] transition-colors text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-[#8B0000] hover:bg-[#6B0000] text-white px-5 py-2.5 text-sm font-semibold transition-colors rounded"
          >
            AGENDE UMA VISITA
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile: Botão Agendar + Theme Toggle + Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="#contato"
            className="bg-[#8B0000] active:bg-[#6B0000] text-white px-3 py-1.5 text-xs font-semibold transition-colors rounded"
          >
            AGENDAR VISITA
          </a>
          <ThemeToggle />
          <button
            className="p-2 text-gray-700 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 max-h-[calc(100vh-60px)] overflow-y-auto">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-4 py-3 text-gray-700 dark:text-gray-300 active:bg-gray-100 dark:active:bg-gray-800 active:text-[#8B0000] transition-colors text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
