import Image from 'next/image';
import { motion } from 'framer-motion';

export function Cta() {
  const mensagem = 'Olá, vim pelo site e gostaria de realizar uma reserva';
  const whatsappUrl = `https://wa.me/559884151367?text=${encodeURIComponent(mensagem)}`;
  return (
    <motion.section
      className="cta-section-container"
      id="cta"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="cta-background">
        <Image
          src="/images/piscina_h.jpg"
          alt="Piscina do Hotel Canto da Praia"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          className="cta-image"
        />
        <div className="cta-overlay"></div>
      </div>

      <motion.div
        className="cta-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h2
          className="cta-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Pronto para relaxar de verdade?
        </motion.h2>

        <motion.p
          className="cta-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Reserve agora seu quarto no Hotel Canto da Praia e venha viver dias
          inesquecíveis
        </motion.p>

        <motion.div
          className="cta-button-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href={whatsappUrl}
            className="cta-button btn-secondary btn-animated"
            style={{ borderRadius: '999px', padding: '10px 20px' }}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reservar agora
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
