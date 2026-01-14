import React from 'react';
import Header from '../components/Header';
import Plans from '../components/Plans';
import Footer from '../components/Footer';

const Planos = () => {
    return (
        <div>
            <Header />
            <main>
                <Plans />
            </main>
            <Footer />
        </div>
    );
};

export default Planos;