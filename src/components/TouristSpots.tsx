import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TouristSpots: React.FC = () => {
  const spots = [
    {
      id: 1,
      name: 'Centro Histórico de São Luís',
      description: 'Patrimônio Mundial da UNESCO, com arquitetura colonial portuguesa e ruas de pedra.',
      image: '/images/centro-historico.png'
    },
    {
      id: 2,
      name: 'Praia do Calhau',
      description: 'Uma das praias mais bonitas do Maranhão, com águas cristalinas e coqueiros.',
      image: '/images/praia-calhau.png'
    },
    {
      id: 3,
      name: 'Praia de São Marcos',
      description: 'Praia paradisíaca com dunas, lagoas e vilarejos charmosos.',
      image: '/images/praia-sao-marcos.png'
    },
    {
      id: 4,
      name: 'Palácio dos Leões',
      description: 'Sede histórica do governo do Maranhão, com vista e arquitetura imponentes.',
      image: '/images/palacio-leoes.jpg'
    },
    {
      id: 5,
      name: 'Espigão da Ponta d\'Areia',
      description: 'Mirante famoso da cidade, ótimo para caminhar e apreciar o pôr do sol.',
      image: '/images/espigao.jpg'
    },
    {
      id: 6,
      name: 'Convento das Mercês',
      description: 'Complexo religioso histórico com belos azulejos e vistas para a cidade.',
      image: '/images/convento-merces.jpg'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % spots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + spots.length) % spots.length);
  };

  return (
    <motion.section
      id="tourist-spots"
      className="tourist-spots"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <motion.div
          className="spots-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Pontos Turísticos de São Luís</h2>
          <p>Descubra os lugares imperdíveis da nossa cidade.</p>
        </motion.div>

        <motion.div
          className="spots-carousel"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.button
            className="carousel-btn prev"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >&lt;</motion.button>
          <div className="carousel-inner">
            <motion.img
              key={currentIndex}
              src={spots[currentIndex].image}
              alt={spots[currentIndex].name}
              className="carousel-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="spot-overlay"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>{spots[currentIndex].name}</h3>
              <p>{spots[currentIndex].description}</p>
            </motion.div>
          </div>
          <motion.button
            className="carousel-btn next"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >&gt;</motion.button>
        </motion.div>

        <motion.div
          className="carousel-indicators"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {spots.map((_, index) => (
            <motion.button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TouristSpots;
