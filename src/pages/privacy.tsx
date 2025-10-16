import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Política de Privacidade - Hotel Canto da Praia</title>
        <meta name="description" content="Conheça nossa política de privacidade e como cuidamos dos seus dados no Hotel Canto da Praia." />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Política de Privacidade - Hotel Canto da Praia" />
        <meta property="og:description" content="Conheça nossa política de privacidade e como cuidamos dos seus dados no Hotel Canto da Praia." />
        <meta property="og:url" content="https://www.hotelcantodapraia.com.br/privacy" />
      </Head>
      <main className="container" style={{ padding: '80px 20px' }}>
        <h1>Política de Privacidade</h1>

        <p>
          No Hotel Canto da Praia valorizamos sua privacidade. Esta política explica como
          coletamos, usamos, armazenamos e compartilhamos seus dados quando você visita nosso site
          ou faz uma reserva.
        </p>

        <h2>1. Dados que coletamos</h2>
        <ul>
          <li>Informações de contato (nome, e-mail, telefone) quando você nos envia uma reserva ou contato;</li>
          <li>Dados de reserva (datas, tipo de quarto, número de hóspedes);</li>
          <li>Informações técnicas automaticamente coletadas (IP, dispositivo, navegador) para fins de análise e segurança;</li>
        </ul>

        <h2>2. Finalidade do uso</h2>
        <p>
          Utilizamos seus dados para: processar reservas, responder a solicitações, comunicar confirmações e avisos importantes,
          melhorar nossos serviços, cumprir obrigações legais e prevenir fraudes.
        </p>

        <h2>3. Compartilhamento de dados</h2>
        <p>
          Podemos compartilhar dados com prestadores de serviços que atuam em nosso nome (por exemplo, processadores de pagamento,
          sistemas de reserva, provedores de e-mail). Não vendemos seus dados a terceiros.
        </p>

    <h2>4. Seus direitos</h2>
        <p>
          Você pode solicitar acesso, correção ou exclusão dos seus dados, bem como limitar ou opor-se ao processamento
          nos termos da legislação aplicável. Para exercer direitos, entre em contato através dos meios de contato do site.
        </p>

        <h2>6. Segurança</h2>
        <p>
          Adotamos medidas técnicas e administrativas razoáveis para proteger seus dados, mas nenhum método de transmissão ou
          armazenamento é totalmente seguro. Em caso de incidente relevante, comunicaremos conforme exigido por lei.
        </p>

        <h2>7. Alterações</h2>
        <p>
          Podemos atualizar esta política ocasionalmente. A versão vigente estará sempre publicada nesta página com a data de vigência.
        </p>

        <h2>Contato</h2>
        <p>
          Para dúvidas ou solicitações relacionadas à privacidade, entre em contato conosco pelo WhatsApp ou pelo e-mail informado no site.
        </p>

        <p>
          <Link href="/">Voltar ao início</Link>
        </p>
      </main>
    </>
  );
};

export default PrivacyPolicy;
