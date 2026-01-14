import React from 'react';

const Features: React.FC = () => {
    const features = [
        {
            id: 1,
            title: "Fácil de Usar",
            description: "Nosso site é projetado para ser intuitivo e fácil de navegar.",
            icon: "🎯"
        },
        {
            id: 2,
            title: "Suporte 24/7",
            description: "Oferecemos suporte ao cliente a qualquer hora do dia.",
            icon: "📞"
        },
        {
            id: 3,
            title: "Segurança Avançada",
            description: "Utilizamos as melhores práticas de segurança para proteger seus dados.",
            icon: "🔒"
        },
        {
            id: 4,
            title: "Personalização",
            description: "Personalize seu site de acordo com suas necessidades e preferências.",
            icon: "🎨"
        }
    ];

    return (
        <section className="features">
            <div className="container">
                <h2 className="section-title">Nossas Características</h2>
                <div className="features-grid">
                    {features.map((feature) => (
                        <div key={feature.id} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;