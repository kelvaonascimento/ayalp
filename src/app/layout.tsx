import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ayahomeresort.com.br'),
  title: {
    default: "AYA Home Resort | Apartamentos em Ribeirão Pires - SP",
    template: "%s | AYA Home Resort"
  },
  description: "AYA Home Resort - Apartamentos de 2 e 3 dormitórios com suíte em Ribeirão Pires, SP. 31 itens de lazer, piscina aquecida, churrasqueira e muito mais. Conheça o novo padrão de viver bem.",
  keywords: [
    "apartamento ribeirão pires",
    "aya home resort",
    "apartamento 2 dormitórios",
    "apartamento 3 dormitórios",
    "apartamento com suíte",
    "lançamento ribeirão pires",
    "imóvel ribeirão pires",
    "apartamento são paulo",
    "home resort",
    "apartamento com lazer",
    "apartamento piscina",
    "wind incorporadora",
    "cobertura ribeirão pires",
    "garden ribeirão pires"
  ],
  authors: [{ name: "Wind Incorporadora" }],
  creator: "Wind Incorporadora",
  publisher: "Wind Incorporadora",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ayahomeresort.com.br",
    siteName: "AYA Home Resort",
    title: "AYA Home Resort | Apartamentos em Ribeirão Pires - SP",
    description: "Apartamentos de 2 e 3 dormitórios com suíte em Ribeirão Pires. 31 itens de lazer, piscina aquecida e o novo padrão de viver bem.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AYA Home Resort - Fachada do empreendimento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AYA Home Resort | Apartamentos em Ribeirão Pires - SP",
    description: "Apartamentos de 2 e 3 dormitórios com suíte em Ribeirão Pires. 31 itens de lazer e o novo padrão de viver bem.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ayahomeresort.com.br",
  },
  category: "Real Estate",
  classification: "Empreendimento Imobiliário",
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Ribeirão Pires",
    "geo.position": "-23.7112;-46.4108",
    "ICBM": "-23.7112, -46.4108",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icons/icon-192x192.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B0000" />
      </head>
      <body className={`${poppins.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
