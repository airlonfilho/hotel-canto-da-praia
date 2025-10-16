import React from 'react';
import { motion } from 'framer-motion';

const Amenities: React.FC = () => {
    const amenitiesList = [
        {
            id: 1,
            name: 'Café da manhã incluído',
            description: 'Comece o dia com energia e sabor',
            icon: '/icons/cafe.svg'
        },
        {
            id: 2,
            name: 'Wi-Fi gratuito',
            description: 'Fique conectado o tempo todo',
            icon: '/icons/bx-wifi.svg'
        },
        {
            id: 3,
            name: 'Garagem coberta',
            description: 'Seu carro seguro e protegido',
            icon: '/icons/bxs-car-garage.svg'
        },
        {
            id: 4,
            name: 'Piscina',
            description: 'Relaxe e refresque-se sem sair do hotel',
            icon: '/icons/piscina.svg'
        },
        {
            id: 5,
            name: 'Elevador',
            description: 'Conforto e acessibilidade para todos',
            icon: '/icons/elevador.svg'
        },
        {
            id: 6,
            name: 'Restaurante',
            description: 'Refeições deliciosas sem precisar sair',
            icon: '/icons/restaurante.svg'
        },
        {
            id: 7,
            name: 'Salão para reuniões',
            description: 'Espaço profissional para eventos e encontros',
            icon: '/icons/negocios.svg'
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
            id="amenities"
            className="amenities container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="amenities-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="amenities-title">
                    <h2>Comodidades</h2>
                </div>
                <div className="amenities-intro">
                    <p>Aqui no Hotel Canto da Praia, a gente pensa em cada detalhe para você não precisar se preocupar com nada:</p>
                </div>
            </motion.div>

            <motion.div
                className="amenities-grid stagger-children"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {amenitiesList.map(amenity => (
                    <motion.div
                        key={amenity.id}
                        className="amenity-item hover-lift"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <motion.div
                            className="amenity-icon-wrapper"
                            whileHover={{ rotate: 5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={amenity.icon} alt={amenity.name} />
                        </motion.div>
                        <div className="amenity-card">
                            <h3 className="amenity-name">{amenity.name}</h3>
                            <p className="amenity-description">{amenity.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Amenities;