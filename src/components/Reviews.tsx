import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Eronides Correia Soares',
    date: '2 meses atrás no Google',
    avatar: 'eronides.png',
    text: 'Ficamos por três dias neste hotel, dos dias 24 a 27/07/2025, foram dias excelentes. Excelente hotel. Com certeza, se caso eu voltar em São Luís, ficarei neste hotel.',
  },
  {
    name: 'Denilson Silva',
    date: '4 meses atrás no Google',
    avatar: 'denilson.png',
    text: 'Excelente Hotel! Recepcionista ímpares! Senhores dos da portaria, bastantes proativos e educados. Café da manhã rústico e agradável!',
  },
  {
    name: 'Maria Luciana Bittencourt',
    date: '9 meses atrás no Google',
    avatar: 'maria.png',
    text: 'Hotel excelente com custo-benefício, funcionários prestativos e educados, em especial o Sr. Francisco. Café bem servido, e estacionamento seguro. Também uma localização próxima da praia, fato que nos deixava à vontade para ir à praia andando.',
  },
];

const Reviews = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section
      className="reviews"
      id="reviews"
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
          <h2>Avaliações</h2>
          <p>Nosso maior orgulho é receber nossos hóspedes como amigos e vê-los sair satisfeitos. Confira o que estão falando sobre a gente no Google Reviews!</p>
        </motion.div>

        <motion.div
          className="reviews-summary"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="overall-rating">
            <Image src="/icons/star.svg" alt="Estrela" width={24} height={24} />
            <span>5.0</span>
          </div>
          <div className="ratings-breakdown">
            <div className="rating-item">
              <span>Quartos</span>
              <div className="rating-bar">
                <div className="bar" style={{ width: '100%' }}></div>
              </div>
              <span>5.0</span>
            </div>
            <div className="rating-item">
              <span>Serviços</span>
              <div className="rating-bar">
                <div className="bar" style={{ width: '100%' }}></div>
              </div>
              <span>5.0</span>
            </div>
            <div className="rating-item">
              <span>Localização</span>
              <div className="rating-bar">
                <div className="bar" style={{ width: '100%' }}></div>
              </div>
              <span>5.0</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="reviews-grid stagger-children"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reviews.map((review, index) => (
            <motion.div
              className="review-card hover-lift"
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="review-author">
                <Image src={`/images/${review.avatar}`} alt={review.name} width={50} height={50} className="avatar" />
                <div className="author-info">
                  <h4>{review.name}</h4>
                  <p>{review.date}</p>
                </div>
              </div>
              <p className="review-text">{review.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Reviews;
