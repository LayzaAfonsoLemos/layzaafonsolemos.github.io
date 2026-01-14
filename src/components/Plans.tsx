import React from 'react';
import PricingCard from './PricingCard';

const plans = [
    {
        id: 1,
        title: 'Vórtex Start',
        price: 'R$499',
        features: ['Site responsivo', 'SEO básico', 'Hospedagem 1 mês'],
        details: 'Perfeito para começar. Inclui um domínio .com.br grátis por 1 ano e suporte por email.',
        whatsappPhone: '5531971503136'
    },
    {
        id: 2,
        title: 'Vórtex Business',
        price: 'R$1.090',
        features: ['Design personalizado', 'Integração com formulários', 'Otimização de performance', 'Suporte 3 meses'],
        details: 'Ideal para negócios em crescimento. Inclui consultoria de design, integração com redes sociais e análise mensal de tráfego.',
        whatsappPhone: '5531971503136'
    },
    {
        id: 3,
        title: 'Vórtex Premium',
        price: 'R$1.890+',
        features: ['E-commerce completo', 'Integração com pagamentos', 'Estratégia de conversão', 'Suporte dedicado'],
        details: 'Solução completa para vendas online. Inclui integração com múltiplos gateways de pagamento, gestão de estoque e suporte prioritário 24/7.',
        whatsappPhone: '5531971503136'
    },
];

const Plans: React.FC = () => {
    return (
        <div className="plans-container">
            <h2 className="section-title">Nossos Planos</h2>
            <div className="plans-grid">
                {plans.map(plan => (
                    <PricingCard key={plan.id}
                        title={plan.title}
                        price={plan.price}
                        features={plan.features}
                        buttonText="Saiba mais"
                        details={plan.details}
                        whatsappPhone={plan.whatsappPhone}
                    />
                ))}
            </div>
        </div>
    );
};

export default Plans;