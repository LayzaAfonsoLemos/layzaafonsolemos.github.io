import React from 'react';
import BackgroundSpirals from './BackgroundSpirals';

const Hero: React.FC = () => {
    return (
        <div className="hero-section">
            <BackgroundSpirals />
            <div className="hero-background" aria-hidden="true" />
            <div className="hero-title-centered">
                <h1 className="hero-title">A ENERGIA QUE SEU SITE PRECISA</h1>
                <p className="hero-description">Transforme sua presença digital com design profissional e performance otimizada.</p>
                <a href="planos" className="hero-cta-button">Conheça nossos planos</a>
            </div>
        </div>
    );
};

export default Hero;