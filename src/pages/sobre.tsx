import React from 'react';
import Header from '../components/Header';

const Sobre: React.FC = () => {
    return (
        <>
            <Header />
            <div className="sobre-container" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <h1>Sobre Nós</h1>
                <p>
                    Bem-vindo à nossa plataforma de criação de sites! Nós oferecemos soluções personalizadas para ajudar você a estabelecer sua presença online de forma eficaz e profissional.
                </p>
                <h2>Nossa Missão</h2>
                <p>
                    Nossa missão é fornecer ferramentas acessíveis e intuitivas que capacitem indivíduos e empresas a criar sites incríveis sem a necessidade de habilidades técnicas avançadas.
                </p>
                <h2>O que fazemos</h2>
                <p>
                    Oferecemos uma variedade de planos que se adaptam às suas necessidades, além de suporte contínuo para garantir que você tenha a melhor experiência possível.
                </p>
                <h2>Entre em contato</h2>
                <p>
                    Se você tiver alguma dúvida ou precisar de assistência, não hesite em nos contatar!
                </p>
            </div>
        </>
    );
};

export default Sobre;