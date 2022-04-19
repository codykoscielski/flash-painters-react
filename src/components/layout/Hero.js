import React from 'react';
import LazyHero from 'react-lazy-hero';
import Background from '../../images/background.JPG';

const Hero = () => {
    return(
        <header>
            <LazyHero imageSrc={ Background }>
                <h1 className="hero-h1">Buy and Sell Tattoo Flash</h1>
            </LazyHero>
            <div className="triangle"></div>
        </header>
    );
}

export default Hero;