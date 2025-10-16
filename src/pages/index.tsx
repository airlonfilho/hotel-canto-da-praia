import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Rooms from '../components/Rooms';
import Amenities from '../components/Amenities';
import Gallery from '../components/Gallery';
import Location from '../components/Location';
import HouseRules from '../components/HouseRules';
import Reviews from '../components/Reviews';
import TouristSpots from '../components/TouristSpots';
import { Cta } from '../components/Cta';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Head>
                <title>Hotel Canto da Praia - Conforto e praticidade perto da Av. Litorânea em São Luís</title>
                <meta name="description" content="Sinta-se em casa no Hotel Canto da Praia. Com 32 quartos para famílias, amigos ou viagens de negócios, oferecemos o espaço ideal para sua hospedagem em São Luís, pertinho da praia e restaurantes." />
                <meta name="keywords" content="hotel em são luís, pousada em são luís, hotel na av litorânea, hospedagem em são luís, hotel canto da praia" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.hotelcantodapraia.com.br/" />
                <meta property="og:title" content="Hotel Canto da Praia - Conforto e praticidade em São Luís" />
                <meta property="og:description" content="Sinta-se em casa no Hotel Canto da Praia. Oferecemos o espaço ideal para sua hospedagem, pertinho da praia e restaurantes." />
                <meta property="og:image" content="https://www.hotelcantodapraia.com.br/images/externo.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.hotelcantodapraia.com.br/" />
                <meta property="twitter:title" content="Hotel Canto da Praia - Conforto e praticidade em São Luís" />
                <meta property="twitter:description" content="Sinta-se em casa no Hotel Canto da Praia. Oferecemos o espaço ideal para sua hospedagem, pertinho da praia e restaurantes." />
                <meta property="twitter:image" content="https://www.hotelcantodapraia.com.br/images/banner.png" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Hotel",
                        "name": "Hotel Canto da Praia",
                        "description": "Sinta-se em casa no Hotel Canto da Praia. Com 32 quartos, oferecemos o espaço ideal para sua hospedagem em São Luís, perto da Av. Litorânea.",
                        "telephone": "+55 (98) 3248-5807",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Av. Litorânea, 1000",
                            "addressLocality": "São Luís",
                            "addressRegion": "MA",
                            "postalCode": "65076-170",
                            "addressCountry": "BR"
                        },
                        "image": "https://www.hotelcantodapraia.com.br/images/banner.png",
                        "priceRange": "$$",
                        "url": "https://www.hotelcantodapraia.com.br/"
                    }) }}
                />
            </Head>
            <div className="hero-wrapper">
                <Header />
                <Hero />
            </div>
            <About />
            <Rooms />
            <Amenities />
            <Gallery />
            <Location />
            <HouseRules />
            <Reviews />
            <TouristSpots />
            <Cta />
            <Footer />
        </div>
    );
};

export default HomePage;