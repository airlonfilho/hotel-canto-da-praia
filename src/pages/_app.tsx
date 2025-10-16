import '../styles/globals.css';
import '../styles/responsive.css';
import '../styles/animations.css';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        
        {/* Meta Tags Básicas */}
        <title>Hotel Canto da Praia - O melhor custo-benefício perto da praia</title>
        <meta name="description" content="Conforto, hospitalidade e lazer a poucos passos da Avenida Litorânea. 32 quartos pensados para receber você, sua família ou amigos da melhor forma possível." />
        <meta name="keywords" content="hotel são luís, hotel maranhão, hotel canto da praia, hospedagem são luís, avenida litorânea" />
        <meta name="author" content="Hotel Canto da Praia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hotel-canto-da-praia.vercel.app" />
        <meta property="og:title" content="Hotel Canto da Praia - O melhor custo-benefício perto da praia" />
        <meta property="og:description" content="Conforto, hospitalidade e lazer a poucos passos da Avenida Litorânea. 32 quartos pensados para receber você, sua família ou amigos da melhor forma possível." />
        <meta property="og:image" content="https://hotel-canto-da-praia.vercel.app/images/banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Hotel Canto da Praia" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://hotel-canto-da-praia.vercel.app" />
        <meta name="twitter:title" content="Hotel Canto da Praia - O melhor custo-benefício perto da praia" />
        <meta name="twitter:description" content="Conforto, hospitalidade e lazer a poucos passos da Avenida Litorânea. 32 quartos pensados para receber você, sua família ou amigos da melhor forma possível." />
        <meta name="twitter:image" content="https://hotel-canto-da-praia.vercel.app/images/banner.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://hotel-canto-da-praia.vercel.app" />
      </Head>
      <AnimatePresence mode="wait">
        <main className={montserrat.className}>
          <Component {...pageProps} />
        </main>
      </AnimatePresence>
    </>
  );
}

export default MyApp;