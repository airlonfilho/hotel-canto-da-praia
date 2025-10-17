import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const rules = [
  {
    icon: 'no-pets.svg',
    text: 'Não aceitamos animais de estimação',
  },
  {
    icon: 'volume-mute.svg',
    text: 'Som automotivo não é permitido nas dependências do hotel',
  },
  {
    icon: 'smoking-off.svg',
    text: 'Proibido fumar nos apartamentos e no restaurante',
  },
  {
    icon: 'calendar-check.svg',
    text: 'Check-in: a partir das 14h',
  },
  {
    icon: 'calendar-check.svg',
    text: 'Check-out: até 12h',
  },
];

const HouseRules = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section
      className="house-rules"
      id="house-rules"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <motion.div
          className="rules-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rules-title">
            <h2>Regras da casa</h2>
          </div>
          <div className="rules-intro">
            <p>A gente quer que sua estadia seja incrível, mas também prezamos pelo respeito e bem-estar de todos os hóspedes. Por isso, algumas regrinhas importantes:</p>
          </div>
        </motion.div>

        <motion.div
          className="rules-grid stagger-children"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {rules.map((rule, index) => (
            <motion.div
              className="rule-item hover-lift"
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="rule-icon"
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Image src={`/icons/${rule.icon}`} alt="" width={40} height={40} />
              </motion.div>
              <p>{rule.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HouseRules;
