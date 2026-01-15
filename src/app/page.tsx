import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Empreendimento from '@/components/Empreendimento';
import Localizacao from '@/components/Localizacao';
import Galeria from '@/components/Galeria';
import Plantas from '@/components/Plantas';
import Diferenciais from '@/components/Diferenciais';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Empreendimento />
        <Localizacao />
        <Galeria />
        <Plantas />
        <Diferenciais />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
