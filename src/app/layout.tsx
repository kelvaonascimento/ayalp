import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AYA Home Resort | O novo padrão de viver bem",
  description: "AYA Home Resort - Apartamentos de 2 e 3 dormitórios com suíte em Ribeirão Pires. O novo padrão de viver bem.",
  keywords: "apartamento, ribeirão pires, home resort, aya, lançamento, imobiliário",
  openGraph: {
    title: "AYA Home Resort | O novo padrão de viver bem",
    description: "Apartamentos de 2 e 3 dormitórios com suíte em Ribeirão Pires",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
