import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
    const images = [
        '/images/hero-bg.png',
        '/images/externo.jpg',
        '/images/hall.jpg',
        '/images/cafe.jpg',
        '/images/psicina.png',
        '/images/quarto_duplo.jpg',
        '/images/quarto_casal.jpg',
        '/images/quarto_triplo.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);

    const touchStartXRef = useRef<number | null>(null);
    const dragDeltaRef = useRef<number>(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Autoplay
    useEffect(() => {
        if (isInteracting) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [isInteracting, images.length]);

    // Pointer handlers for swipe
    const onPointerDown = (e: React.PointerEvent) => {
        touchStartXRef.current = e.clientX;
        dragDeltaRef.current = 0;
        setIsInteracting(true);
        try {
            (e.target as Element).setPointerCapture(e.pointerId);
        } catch (err) {
            // ignore
        }
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (touchStartXRef.current === null) return;
        dragDeltaRef.current = e.clientX - touchStartXRef.current;
    };

    const onPointerUp = (e: React.PointerEvent) => {
        const delta = dragDeltaRef.current || (e.clientX - (touchStartXRef.current ?? e.clientX));
        const thresh = 50; // px
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
            // ignore
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
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt={`Imagem ${currentIndex + 1}`}
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
                    {images.map((_, index) => (
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
