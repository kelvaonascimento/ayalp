'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Necessário para evitar hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Placeholder durante SSR
  if (!mounted) {
    return (
      <div className="w-14 h-7 bg-gray-200 rounded-full animate-pulse" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  const handleToggle = () => {
    const newTheme = isDark ? 'light' : 'dark';
    console.log('Changing theme from', resolvedTheme, 'to', newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 ${
        isDark ? 'bg-slate-700' : 'bg-amber-300'
      }`}
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      {/* Círculo deslizante */}
      <span
        className={`pointer-events-none relative inline-block h-6 w-6 transform rounded-full shadow-lg ring-0 transition-transform duration-300 ease-in-out ${
          isDark
            ? 'translate-x-7 bg-slate-800'
            : 'translate-x-0 bg-amber-500'
        }`}
      >
        {/* Ícone da Lua (dark mode) */}
        <span
          className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-300 ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <svg className="h-4 w-4 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </span>

        {/* Ícone do Sol (light mode) */}
        <span
          className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity duration-300 ${
            isDark ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <svg className="h-4 w-4 text-amber-100" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </span>
    </button>
  );
}
