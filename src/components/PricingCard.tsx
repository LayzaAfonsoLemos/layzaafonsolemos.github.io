import React, { useState } from 'react';

interface PricingCardProps {
    title: string;
    price: string;
    features?: string[]; // made optional to avoid runtime crashes when not provided
    buttonText: string;
    details?: string; // detalhes adicionais sobre o plano
    whatsappPhone?: string; // número de WhatsApp para contato
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features = [], buttonText, details, whatsappPhone = "5531971503136" }) => {
    const [showModal, setShowModal] = useState(false);

    const handleContractClick = () => {
        const message = `Olá! Gostaria de contratar o plano ${title} (${price}). Pode me informar mais detalhes?`;
        const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        setShowModal(false);
    };

    return (
        <>
            <div className="pricing-card">
                <div>
                    <h2 className="pricing-title">{title}</h2>
                    <p className="pricing-price">{price}</p>
                    <ul className="pricing-features features-list">
                        {(features || []).map((feature, index) => (
                            <li key={`${feature}-${index}`} className="feature-item">
                                {feature}
                            </li>
                        ))}
                        {(!features || features.length === 0) && (
                            <li className="feature-empty">Nenhuma característica listada.</li>
                        )}
                    </ul>
                </div>
                <div className="price-cta">
                    <button className="btn-primary" onClick={() => setShowModal(true)}>{buttonText}</button>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>{title}</h2>
                            <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
                        </div>
                        <div className="modal-body">
                            <h3>Preço: {price}</h3>
                            <h4>Incluído neste plano:</h4>
                            <ul>
                                {(features || []).map((feature, index) => (
                                    <li key={`${feature}-${index}`}>{feature}</li>
                                ))}
                            </ul>
                            {details && (
                                <>
                                    <h4>Detalhes Adicionais:</h4>
                                    <p>{details}</p>
                                </>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button className="btn-primary" onClick={handleContractClick}>Contratar Agora</button>
                            <button className="btn-secondary" onClick={() => setShowModal(false)}>Fechar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PricingCard;