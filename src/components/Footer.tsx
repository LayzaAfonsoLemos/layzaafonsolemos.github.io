import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container text-center">
                <p>&copy; {new Date().getFullYear()} Vortex. Todos os direitos reservados.</p>
                <div className="footer-links">
                    <a href="/sobre" className="nav-link">Sobre nós</a>
                    <span className="divider">|</span>
                    <a href="/blog" className="nav-link">Blog</a>
                    <span className="divider">|</span>
                    <a href="/planos" className="nav-link">Planos</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;