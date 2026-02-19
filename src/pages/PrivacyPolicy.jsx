import React from 'react';

const PrivacyPolicy = () => {
    return (
        <main className="section-padding" style={{ marginTop: '80px' }}>
            <div className="container">
                <h1 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Privacy Policy</h1>
                <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '1.5rem' }}>Last Updated: February 20, 2026</p>
                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ color: '#fff', marginBottom: '1rem' }}>1. Introduction</h2>
                        <p>Welcome to Smit Automotive. We respect your privacy and are committed to protecting your personal data.</p>
                    </section>
                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ color: '#fff', marginBottom: '1rem' }}>2. Data Collection</h2>
                        <p>We collect data through our newsletter signup and technical documentation upload area to provide you with our services.</p>
                    </section>
                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ color: '#fff', marginBottom: '1rem' }}>3. Data Usage</h2>
                        <p>Your data is used solely for the purpose of communicating with you and analyzing your technical specifications as requested.</p>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
