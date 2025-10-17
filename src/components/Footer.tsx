import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-container">
        <motion.div
          className="footer-grid stagger-children"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="footer-logo-section"
            variants={itemVariants}
          >
            <Image
              src="/images/logo.png"
              alt="Hotel Canto da Praia"
              width={136}
              height={100}
              className="footer-logo"
            />
            <p className="footer-description">
              Conforto, hospitalidade e momentos inesquecíveis a poucos passos
              da Avenida Litorânea.
            </p>
          </motion.div>

          <motion.div
            className="footer-links"
            variants={itemVariants}
          >
            <h3>Sobre</h3>
            <ul>
              <li>
                <Link href="/#rooms">Quartos</Link>
              </li>
              <li>
                <Link href="/#amenities">Comodidades</Link>
              </li>
              <li>
                <Link href="/#contact">Contato</Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-links"
            variants={itemVariants}
          >
            <h3>Redes Sociais</h3>
            <ul>
              <li>
                <a href="https://wa.me/559884151367">Whatsapp</a>
              </li>
              <li>
                <a href="https://www.instagram.com/hotelcantodapraia_">Instagram</a>
              </li>
              <li>
                <a href="https://www.google.com/travel/search?q=hotel%20canto%20da%20praia%20sao%20luis&g2lb=4965990%2C4969803%2C72302247%2C72317059%2C72414906%2C72471280%2C72472051%2C72485658%2C72560029%2C72573224%2C72616120%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C72959983%2C73059275%2C73064764%2C73107089%2C73124299&hl=pt-BR&gl=br&cs=1&ssta=1&ts=CAEaRgooEiYyJDB4N2Y2OTM3ZjAzMzk1ZTc5OjB4OGIxNTk0MGMxM2ZmYTg3MRIaEhQKBwjpDxAKGBMSBwjpDxAKGBQYATICEAA&qs=CAEyFENnc0k4ZEQtbjhHQjVZcUxBUkFCOAJCCQlxqP8TDJQVi0IJCXGo_xMMlBWL&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiwo8KBz6eQAxUAAAAAHQAAAAAQBA" target="_blank" rel="noopener noreferrer">Google Reviews</a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="footer-copyright">2025. Hotel Canto da Praia</p>
          <div className="footer-legal-links">
            <Link href="/privacy">Política de Privacidade</Link>
            <Link href="/terms">Termos e Condições</Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
