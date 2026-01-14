import React from 'react';

const testimonials = [
    {
        name: "João Silva",
        feedback: "Este serviço transformou meu negócio! Recomendo muito.",
        rating: 5,
    },
    {
        name: "Maria Santos",
        feedback: "Excelente suporte ao cliente e ótimas funcionalidades.",
        rating: 4,
    },
    {
        name: "Ana Costa",
        feedback: "Uma experiência fantástica do início ao fim.",
        rating: 5,
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <h2 className="section-title">O que Nossos Clientes Dizem</h2>
                <div className="testimonial-list">
                    {testimonials.map((testimonial, index) => (
                        <div key={`testimonial-${testimonial.name}-${index}`} className="testimonial-item">
                            <div className="testimonial-content">
                                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                                <p className="testimonial-name">— {testimonial.name}</p>
                                <p className="testimonial-rating">⭐ {testimonial.rating} / 5</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;