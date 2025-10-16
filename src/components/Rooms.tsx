import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7v10" />
        <path d="M21 7v10" />
        <path d="M3 11h18" />
        <path d="M7 11v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
        <path d="M7 15v-2" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const Rooms: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const roomOptions = [
        {
            id: 1,
            name: 'Quarto Duplo Solteiro',
            description: 'Para quem viaja a trabalho, com amigos ou em família. Duas camas confortáveis em um ambiente aconchegante.',
            imageDesktop: '/images/quarto_duplo_h.jpg',
            imageMobile: '/images/quarto_duplo_v.jpg',
            beds: 2,
            persons: 2,
        },
        {
            id: 2,
            name: 'Quarto Casal',
            description: 'Para quem viaja a trabalho, com amigos ou em família. Uma cama de casal em um ambiente aconchegante.',
            imageDesktop: '/images/quarto_casal_h.jpg',
            imageMobile: '/images/quarto_casal_v.jpg',
            beds: 1,
            persons: 2,
        },
        {
            id: 3,
            name: 'Quarto Triplo',
            description: 'Para quem viaja a trabalho, com amigos ou em família. Três camas confortáveis em um ambiente aconchegante.',
            imageDesktop: '/images/quarto_triplo_h.jpg',
            imageMobile: '/images/quarto-triplo_v.jpg',
            beds: 3,
            persons: 3,
        },
    ];

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
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <motion.section
            id="rooms"
            className="rooms container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="rooms-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2>Escolha o quarto perfeito</h2>
                <p>Flexibilidade total: Todos os nossos quartos podem ser adaptados para acomodar até 3 ou 4 pessoas. Fale com a gente e vamos encontrar a melhor opção!</p>
            </motion.div>

            <motion.div
                className="room-list stagger-children"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {roomOptions.map(room => (
                    <motion.article
                        key={room.id}
                        className="room-card hover-lift image-hover"
                        variants={itemVariants}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="room-media">
                            <img 
                                src={isMobile ? room.imageMobile : room.imageDesktop} 
                                alt={room.name} 
                            />
                        </div>
                        <div className="room-body">
                            <h3>{room.name}</h3>
                            <p className="room-desc">{room.description}</p>
                            <div className="room-meta">
                                <div className="room-features">
                                    <div className="room-feature">
                                        <BedIcon /> <span>{room.beds}</span>
                                    </div>
                                    <div className="room-feature">
                                        <UserIcon /> <span>{room.persons}</span>
                                    </div>
                                </div>
                            </div>
                                {
                                }
                                <motion.a
                                    className="btn btn-primary btn-animated"
                                    href={`https://wa.me/559832485807?text=${encodeURIComponent(`Olá, vim pelo site e gostaria de reservar o ${room.name}`)}`}
                                    style={{ borderRadius: '999px', padding: '10px 20px' }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Reservar agora
                                </motion.a>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default Rooms;