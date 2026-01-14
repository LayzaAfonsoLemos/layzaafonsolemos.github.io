import React from 'react';
import Header from '../components/Header';

const Blog: React.FC = () => {
    return (
        <>
            <Header />
            <div className="blog-container" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <h1>Blog</h1>
                <p>Bem-vindo ao nosso blog! Aqui você encontrará os últimos artigos e atualizações.</p>
                {/* Add blog posts here */}
            </div>
        </>
    );
};

export default Blog;