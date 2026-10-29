'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

type Fbq = (...args: unknown[]) => void;
const fbq: Fbq = (...args) => {
  const w = window as unknown as { fbq?: Fbq };
  if (typeof w.fbq === 'function') w.fbq(...args);
};

export default function MetaPixel() {
  const pathname = usePathname();
  const primeira = useRef(true);
  const leadEnviado = useRef<string | null>(null);

  // PageView nas navegações internas (a primeira já foi pelo código base)
  useEffect(() => {
    if (primeira.current) {
      primeira.current = false;
    } else {
      fbq('track', 'PageView');
    }
    // Conversão: chegada na página de obrigado
    // trava global: neste site o componente pode montar duas vezes; 1 Lead por chegada
    const w = window as unknown as { __leadAt?: number };
    if (pathname === '/obrigado' && leadEnviado.current !== pathname && !(w.__leadAt && Date.now() - w.__leadAt < 10000)) {
      leadEnviado.current = pathname;
      w.__leadAt = Date.now();
      fbq('track', 'Lead', { content_name: 'AYA Home Resort - cadastro do site' });
    }
    if (pathname !== '/obrigado') leadEnviado.current = null;
  }, [pathname]);

  // Contact: qualquer clique em link de WhatsApp
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.('a');
      const href = a?.getAttribute('href') || '';
      if (/api\.whatsapp\.com|wa\.me/i.test(href)) {
        fbq('track', 'Contact', { content_name: 'WhatsApp', page: window.location.pathname });
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
