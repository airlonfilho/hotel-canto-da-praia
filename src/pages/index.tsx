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