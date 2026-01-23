'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Obrigado() {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5511993869970&text=Ol%C3%A1%2C+vim+do+AYA+Home+Resort+e+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+empreendimentos%21&type=phone_number&app_absent=0";

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
        {/* Logo Wind Incorporadora */}
        <div className="mb-8">
          <Image
            src="/images/logo-wind-incorporadora.svg"
            alt="Wind Incorporadora"
            width={180}
            height={60}
            className="mx-auto dark:invert"
          />
        </div>

        {/* Ícone de Sucesso */}
        <div className="mb-6">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Título */}
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Cadastro realizado com sucesso!
        </h1>

        {/* Descrição */}
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Obrigado pelo seu interesse no <strong className="text-gray-800 dark:text-gray-200">AYA Home Resort</strong>.
          <br />
          Em breve, um de nossos especialistas entrará em contato com você.
        </p>

        {/* Divisor */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          <span className="text-sm text-gray-400 dark:text-gray-500">ou se preferir</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* CTA WhatsApp */}
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 mb-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Não quer esperar? Fale agora mesmo com um especialista pelo WhatsApp:
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium px-8 py-4 rounded-full transition-colors w-full md:w-auto"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar no WhatsApp
          </a>
        </div>

        {/* Link Voltar */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#8B0000] dark:hover:text-[#ff6b6b] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para o site
        </Link>
      </div>
    </div>
  );
}
