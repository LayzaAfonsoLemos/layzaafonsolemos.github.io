import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
    const router = useRouter();

    const isActive = (path: string) => {
        if (path === '/') {
            return router.pathname === '/';
        }
        return router.pathname === path;
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <h1 className="site-logo">
                        <Link href="/" className="nav-link">
                            <img src="/vortex-logo.png" alt="Vortex Logo" className="logo-image" />
                        </Link>
                    </h1>
                    <nav>
                        <ul className="nav-list">
                            <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                                <Link href="/" className="nav-link">Serviços</Link>
                            </li>
                            <li className={`nav-item ${isActive('/sobre') ? 'active' : ''}`}>
                                <Link href="/sobre" className="nav-link">Sobre</Link>
                            </li>
                            <li className={`nav-item ${isActive('/blog') ? 'active' : ''}`}>
                                <Link href="/blog" className="nav-link">Blog</Link>
                            </li>
                            <li className={`nav-cta ${isActive('/planos') ? 'active' : ''}`}>
                                <Link href="/planos" className="btn-primary">Orçamento</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;