import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
    const mensagem = 'Olá, vim pelo site e gostaria de realizar uma reserva';
    const whatsappUrl = `https://wa.me/559832485807?text=${encodeURIComponent(mensagem)}`;

    return (
        <header className="site-header">
            <div className="container header-inner">
                <div className="brand">
                    <a href="/" className="logo">
                        <Image src="/images/logo.png" alt="Canto da Praia" width={136} height={100} />
                        
                    </a>
                </div>

                <nav className="main-nav">
                    <ul>
                        <li><a href="#hero">Início</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#rooms">Quartos</a></li>
                        <li><a href="#amenities">Comodidades</a></li>
                        <li><a href="#location">Localização</a></li>
                        <li><a href="#reviews">Avaliações</a></li>
                    </ul>
                </nav>

                <div className="actions">
                    <a
                        href={whatsappUrl}
                        className="btn btn-primary"
                        style={{ borderRadius: '999px', padding: '10px 20px' }}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Reservar agora via WhatsApp"
                    >
                        Reservar agora
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;