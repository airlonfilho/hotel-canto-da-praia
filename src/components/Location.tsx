import React from 'react';
import { motion } from 'framer-motion';

const Location = () => {
  return (
    <motion.section
      className="location"
      id="location"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">

        <motion.div
          className="reviews-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Localização</h2>
          <p>
            Localizado próximo à Avenida Litorânea, o Hotel Canto da Praia oferece fácil acesso às melhores praias, restaurantes, bares e pontos turísticos da região. Você fica perto do mar e de tudo o que faz suas férias (ou trabalho) valerem a pena.
          </p>
        </motion.div>

        <motion.div
          className="location-map"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Rua+dos+Papagaios+12+Parque+Atlântico+Olho+D'Água+São+Luís+MA+65066-100&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Location;
