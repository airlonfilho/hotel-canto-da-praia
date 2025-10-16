import '../styles/globals.css';
import '../styles/responsive.css';
import '../styles/animations.css';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>Hotel Canto da Praia</title>
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