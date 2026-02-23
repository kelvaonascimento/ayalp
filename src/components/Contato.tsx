'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();
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
    const novasRespostas = {
      ...respostasOnboarding,
      [perguntaId]: valor,
    };
    setRespostasOnboarding(novasRespostas);

    // Avança para próxima pergunta ou finaliza
    if (etapaAtual < perguntas.length - 1) {
      setTimeout(() => {
        setEtapaAtual((prev) => prev + 1);
      }, 300);
    } else {
      // Última pergunta respondida, enviar dados com as respostas atualizadas
      setTimeout(() => {
        enviarFormulario(novasRespostas);
      }, 300);
    }
  };

  const enviarFormulario = async (respostasFinais: Record<string, string>) => {
    setIsSubmitting(true);

    try {
      // Integração RD Station
      const response = await fetch(`https://api.rd.services/platform/conversions?api_key=${process.env.NEXT_PUBLIC_RD_STATION_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_type: 'CONVERSION',
          event_family: 'CDP',
          payload: {
            conversion_identifier: 'ayahomeresort',
            name: formData.nome,
            email: formData.email,
            mobile_phone: formData.telefone,
            cf_tipo_unidade_interesse: respostasFinais.interesse,
            cf_momento_compra: respostasFinais.momento,
            cf_finalidade_imovel: respostasFinais.finalidade,
            cf_como_conheceu: respostasFinais.conheceu,
            cf_produto: 'AYA Home Resort',
            cf_empreendimento: 'AYA Home Resort',
            cf_id_empreendimento: '4',
            internal_source: '4',
            traffic_source: 'organic',
            tags: ['ayahomeresort', 'site-lp'],
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar para RD Station');
      }

      setSubmitStatus('success');
      setShowOnboarding(false);

      // Redireciona para a página de obrigado
      router.push('/obrigado');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const perguntaAtual = perguntas[etapaAtual];
  const progresso = ((etapaAtual + 1) / perguntas.length) * 100;

  return (
    <section id="contato" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-light text-gray-800 dark:text-gray-100 mb-3 md:mb-4">
            Agende sua Visita
          </h2>
          <div className="w-16 md:w-20 h-1 bg-[#8B0000] mx-auto mb-4 md:mb-6" />
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            Conheça pessoalmente o apartamento decorado e surpreenda-se com cada detalhe. Nossa equipe está pronta para receber você!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Formulário */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg dark:shadow-gray-900/50 p-5 md:p-8">
            <form onSubmit={iniciarOnboarding} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  required
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent outline-none transition-all"
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
                  className="mt-1 w-4 h-4 text-[#8B0000] border-gray-300 dark:border-gray-600 rounded focus:ring-[#8B0000]"
                />
                <label htmlFor="aceitePrivacidade" className="text-sm text-gray-600 dark:text-gray-400">
                  Concordo em receber comunicações e aceito a{' '}
                  <a href="#" className="text-[#8B0000] dark:text-[#ff6b6b] hover:underline">
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
            <h3 className="text-xl md:text-2xl font-light text-gray-800 dark:text-gray-100 mb-6 md:mb-8">
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
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Telefone / WhatsApp</p>
                  <a href="tel:+5511993869970" className="text-base md:text-lg text-gray-800 dark:text-gray-200 active:text-[#8B0000] dark:active:text-[#ff6b6b]">
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
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">Endereço</p>
                  <p className="text-base md:text-lg text-gray-800 dark:text-gray-200">
                    Rua Miguel Prisco, 2000<br />
                    Ribeirão Pires - SP
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Modal de Onboarding */}
      {showOnboarding && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-3 md:p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full p-5 md:p-8 relative animate-fade-in max-h-[90vh] overflow-y-auto">
            {/* Botão fechar */}
            <button
              onClick={() => setShowOnboarding(false)}
              className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 dark:text-gray-500 active:text-gray-600 dark:active:text-gray-300"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Barra de progresso */}
            <div className="mb-6 md:mb-8">
              <div className="flex justify-between text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span>Pergunta {etapaAtual + 1} de {perguntas.length}</span>
                <span>{Math.round(progresso)}%</span>
              </div>
              <div className="h-1.5 md:h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#8B0000] transition-all duration-300"
                  style={{ width: `${progresso}%` }}
                />
              </div>
            </div>

            {/* Pergunta */}
            <h3 className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-100 mb-5 md:mb-6 text-center">
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
                      ? 'border-[#8B0000] bg-[#8B0000]/5 dark:bg-[#8B0000]/20 text-[#8B0000] dark:text-[#ff6b6b]'
                      : 'border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 active:border-[#8B0000]/50 active:bg-gray-50 dark:active:bg-gray-700'
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
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">Enviando seus dados...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
