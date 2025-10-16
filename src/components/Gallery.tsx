import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
    const imagesPairs = [
        { desktop: '/images/frente_h.jpg', mobile: '/images/frente_v.jpg', alt: 'Fachada do Hotel' },
        { desktop: '/images/cafe_h.JPG', mobile: '/images/cafe_v.jpg', alt: 'Café da Manhã' },
        { desktop: '/images/piscina_h.jpg', mobile: '/images/piscina_v.jpg', alt: 'Piscina' },
        { desktop: '/images/quarto_casal_h.jpg', mobile: '/images/quarto_casal_v.jpg', alt: 'Quarto Casal' },
        { desktop: '/images/quarto_duplo_h.jpg', mobile: '/images/quarto_duplo_v.jpg', alt: 'Quarto Duplo' },
        { desktop: '/images/quarto_triplo_h.jpg', mobile: '/images/quarto-triplo_v.jpg', alt: 'Quarto Triplo' },
        { desktop: '/images/restaurante_h.jpg', mobile: '/images/restaurante_v.jpg', alt: 'Restaurante' },
        { desktop: '/images/estacionamento_h.jpg', mobile: '/images/estacionamento_v.jpg', alt: 'Estacionamento' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const touchStartXRef = useRef<number | null>(null);
    const dragDeltaRef = useRef<number>(0);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const getCurrentImage = () => {
        return isMobile 
            ? imagesPairs[currentIndex].mobile 
            : imagesPairs[currentIndex].desktop;
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesPairs.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imagesPairs.length) % imagesPairs.length);
    };

    useEffect(() => {
        if (isInteracting) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % imagesPairs.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [isInteracting, imagesPairs.length]);

    const onPointerDown = (e: React.PointerEvent) => {
        touchStartXRef.current = e.clientX;
        dragDeltaRef.current = 0;
        setIsInteracting(true);
        try {
            (e.target as Element).setPointerCapture(e.pointerId);
        } catch (err) {
        }
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (touchStartXRef.current === null) return;
        dragDeltaRef.current = e.clientX - touchStartXRef.current;
    };

    const onPointerUp = (e: React.PointerEvent) => {
        const delta = dragDeltaRef.current || (e.clientX - (touchStartXRef.current ?? e.clientX));
        const thresh = 50; 
        if (Math.abs(delta) > thresh) {
            if (delta > 0) prevSlide();
            else nextSlide();
        }
        touchStartXRef.current = null;
        dragDeltaRef.current = 0;
        setIsInteracting(false);
        try {
            (e.target as Element).releasePointerCapture(e.pointerId);
        } catch (err) {
        }
    };

    return (
        <motion.section
            className="gallery"
            id="gallery"
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
                    <h2>Galeria do Hotel</h2>
                    <p>
                        Explore nossas instalações e quartos através de nossas fotos.
                    </p>
                </motion.div>

                <motion.div
                    className="carousel"
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
                    <div
                        className="carousel-inner"
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={onPointerUp}
                        onPointerCancel={onPointerUp}
                    >
                        <motion.img
                            key={`${currentIndex}-${isMobile}`}
                            src={getCurrentImage()}
                            alt={imagesPairs[currentIndex].alt}
                            className="carousel-image"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                        />
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
                    {imagesPairs.map((_, index) => (
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

export default Gallery;
