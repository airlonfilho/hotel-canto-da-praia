import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const mensagem = 'Olá, vim pelo site e gostaria de realizar uma reserva';
  const whatsappUrl = `https://wa.me/559832485807?text=${encodeURIComponent(mensagem)}`;
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="about-inner">
          <motion.div
            className="about-media"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.video
              src="/videos/video.mp4"
              width={200}
              height={400}
              className="about-image"
              autoPlay
              muted
              loop
              playsInline
              style={{ objectFit: 'cover', borderRadius: '12px' }}
            />
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Conheça o Hotel Canto da Praia
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Aqui no Hotel Canto da Praia, a gente acredita que uma boa hospedagem é aquela onde você se sente em casa — mas com aquele plus de conforto e praticidade que todo mundo merece.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Nosso hotel conta com 32 quartos pensados para receber você, sua família ou amigos da melhor forma possível. Seja para um final de semana tranquilo, férias com a galera toda ou até uma viagem de negócios, a gente tem o espaço ideal para você.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              E o melhor: estamos pertinho da Avenida Litorânea, ou seja, praia, restaurantes e diversão estão logo ali!
            </motion.p>

            <motion.a
              href={whatsappUrl}
              className="btn btn-primary btn-animated"
              style={{ borderRadius: '999px', padding: '10px 20px' }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reservar agora via WhatsApp"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reservar agora
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
