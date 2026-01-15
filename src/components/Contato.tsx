'use client';

import { useState } from 'react';

const perguntas = [
  {
    id: 'interesse',
    pergunta: 'Qual tipo de unidade você tem interesse?',
    opcoes: [
      { valor: '2-dormitorios', label: '2 Dormitórios' },
      { valor: '3-dormitorios', label: '3 Dormitórios' },
      { valor: 'cobertura', label: 'Cobertura' },
      { valor: 'garden', label: 'Garden' },
      { valor: 'nao-decidi', label: 'Ainda não decidi' },
    ],
  },
  {
    id: 'momento',
    pergunta: 'Qual o momento da sua compra?',
    opcoes: [
      { valor: 'imediato', label: 'Quero comprar agora' },
      { valor: '3-meses', label: 'Nos próximos 3 meses' },
      { valor: '6-meses', label: 'Nos próximos 6 meses' },
      { valor: 'pesquisando', label: 'Apenas pesquisando' },
    ],
  },
  {
    id: 'finalidade',
    pergunta: 'Qual a finalidade do imóvel?',
    opcoes: [
      { valor: 'moradia', label: 'Moradia própria' },
      { valor: 'investimento', label: 'Investimento' },
      { valor: 'segunda-moradia', label: 'Segunda moradia' },
      { valor: 'presente', label: 'Presente para familiar' },
    ],
  },
  {
    id: 'conheceu',
    pergunta: 'Como você conheceu o AYA Home Resort?',
    opcoes: [
      { valor: 'instagram', label: 'Instagram' },
      { valor: 'facebook', label: 'Facebook' },
      { valor: 'google', label: 'Google' },
      { valor: 'indicacao', label: 'Indicação' },
      { valor: 'placa', label: 'Placa no local' },
      { valor: 'outro', label: 'Outro' },
    ],
  },
];

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    aceitePrivacidade: false,
  });
  const [respostasOnboarding, setRespostasOnboarding] = useState<Record<string, string>>({});
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? e.target.checked : value,
    }));
  };

  const iniciarOnboarding = (e: React.FormEvent) => {
    e.preventDefault();
    setShowOnboarding(true);
    setEtapaAtual(0);
  };

  const selecionarOpcao = (perguntaId: string, valor: string) => {
    setRespostasOnboarding((prev) => ({
      ...prev,
      [perguntaId]: valor,
    }));

    // Avança para próxima pergunta ou finaliza
    if (etapaAtual < perguntas.length - 1) {
      setTimeout(() => {
        setEtapaAtual((prev) => prev + 1);
      }, 300);
    } else {
      // Última pergunta respondida, enviar dados
      setTimeout(() => {
        enviarFormulario();
      }, 300);
    }
  };

  const enviarFormulario = async () => {
    setIsSubmitting(true);

    try {
      // =====================================================
      // INTEGRAÇÃO RD STATION
      // =====================================================
      // Dados completos para enviar:
      // - formData (nome, email, telefone)
      // - respostasOnboarding (interesse, momento, finalidade, conheceu)
      //
      // const dadosCompletos = {
      //   ...formData,
      //   ...respostasOnboarding,
      // };
      //
      // const response = await fetch('https://api.rd.services/platform/conversions', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     event_type: 'CONVERSION',
      //     event_family: 'CDP',
      //     payload: {
      //       conversion_identifier: 'agendamento-visita-aya',
      //       name: formData.nome,
      //       email: formData.email,
      //       mobile_phone: formData.telefone,
      //       cf_interesse: respostasOnboarding.interesse,
      //       cf_momento_compra: respostasOnboarding.momento,
      //       cf_finalidade: respostasOnboarding.finalidade,
      //       cf_origem: respostasOnboarding.conheceu,
      //     },
      //   }),
      // });
      // =====================================================

      // Simulação de envio
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      setShowOnboarding(false);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        aceitePrivacidade: false,
      });
      setRespostasOnboarding({});
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const perguntaAtual = perguntas[etapaAtual];
  const progresso = ((etapaAtual + 1) / perguntas.length) * 100;

  return (
    <section id="contato" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-light text-gray-800 mb-3 md:mb-4">
            Agende sua Visita
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[#8B0000] mx-auto mb-4 md:mb-6" />
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-2">
            Conheça pessoalmente o apartamento decorado e surpreenda-se com cada detalhe. Nossa equipe está pronta para receber você!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Formulário */}
          <div className="bg-white rounded-lg shadow-lg p-5 md:p-8">
            <form onSubmit={iniciarOnboarding} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  required
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent outline-none transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="aceitePrivacidade"
                  name="aceitePrivacidade"
                  required
                  checked={formData.aceitePrivacidade}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-[#8B0000] border-gray-300 rounded focus:ring-[#8B0000]"
                />
                <label htmlFor="aceitePrivacidade" className="text-sm text-gray-600">
                  Concordo em receber comunicações e aceito a{' '}
                  <a href="#" className="text-[#8B0000] hover:underline">
                    Política de Privacidade
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#8B0000] hover:bg-[#6B0000] text-white px-8 py-4 text-lg font-medium transition-colors rounded-lg"
              >
                Quero Agendar Minha Visita
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">
                  Perfeito! Nossa equipe entrará em contato para agendar sua visita.
                </p>
              )}

              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">
                  Erro ao enviar. Por favor, tente novamente.
                </p>
              )}
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-light text-gray-800 mb-6 md:mb-8">
              Fale conosco
            </h3>

            <div className="space-y-5 md:space-y-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#8B0000] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500">Telefone / WhatsApp</p>
                  <a href="tel:+5511993869970" className="text-base md:text-lg text-gray-800 active:text-[#8B0000]">
                    (11) 99386-9970
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#8B0000] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500">Endereço</p>
                  <p className="text-base md:text-lg text-gray-800">
                    Rua Miguel Prisco, 2001<br />
                    Ribeirão Pires - SP
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#8B0000] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500">Redes Sociais</p>
                  <div className="flex gap-3 mt-1">
                    <a href="https://www.facebook.com/windincorporadora" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#8B0000]" aria-label="Facebook">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/AYAHOMERESORT" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#8B0000]" aria-label="Instagram">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-[#8B0000]" aria-label="YouTube">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Onboarding */}
      {showOnboarding && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-3 md:p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-5 md:p-8 relative animate-fade-in max-h-[90vh] overflow-y-auto">
            {/* Botão fechar */}
            <button
              onClick={() => setShowOnboarding(false)}
              className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 active:text-gray-600"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Barra de progresso */}
            <div className="mb-6 md:mb-8">
              <div className="flex justify-between text-xs md:text-sm text-gray-500 mb-2">
                <span>Pergunta {etapaAtual + 1} de {perguntas.length}</span>
                <span>{Math.round(progresso)}%</span>
              </div>
              <div className="h-1.5 md:h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#8B0000] transition-all duration-300"
                  style={{ width: `${progresso}%` }}
                />
              </div>
            </div>

            {/* Pergunta */}
            <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-5 md:mb-6 text-center">
              {perguntaAtual.pergunta}
            </h3>

            {/* Opções */}
            <div className="space-y-2 md:space-y-3">
              {perguntaAtual.opcoes.map((opcao) => (
                <button
                  key={opcao.valor}
                  onClick={() => selecionarOpcao(perguntaAtual.id, opcao.valor)}
                  disabled={isSubmitting}
                  className={`w-full p-3 md:p-4 text-left rounded-xl border-2 transition-all ${
                    respostasOnboarding[perguntaAtual.id] === opcao.valor
                      ? 'border-[#8B0000] bg-[#8B0000]/5 text-[#8B0000]'
                      : 'border-gray-200 active:border-[#8B0000]/50 active:bg-gray-50'
                  } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <span className="font-medium text-sm md:text-base">{opcao.label}</span>
                </button>
              ))}
            </div>

            {/* Loading no envio final */}
            {isSubmitting && (
              <div className="mt-5 md:mt-6 text-center">
                <div className="inline-block animate-spin rounded-full h-6 w-6 md:h-8 md:w-8 border-4 border-[#8B0000] border-t-transparent" />
                <p className="text-sm md:text-base text-gray-600 mt-2">Enviando seus dados...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
