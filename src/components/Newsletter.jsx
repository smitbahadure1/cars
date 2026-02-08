import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        // Simulate API call to Mailchimp/Klaviyo
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    return (
        <section className="section-padding">
            <div className="container">
                <div className="glass" style={{ padding: '5rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Insights for Modern Hoteliers</h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
                            Join 5,000+ industry leaders who receive our weekly briefing on hospitality trends,
                            operational efficiency, and guest experience strategy.
                        </p>

                        {status === 'success' ? (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', color: 'var(--accent-gold)' }}>
                                <CheckCircle size={48} />
                                <h3 style={{ color: '#fff' }}>You're on the list!</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>Check your inbox for our latest insights.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', maxWidth: '500px', margin: '0 auto', flexWrap: 'wrap' }}>
                                <input
                                    type="email"
                                    placeholder="Enter your professional email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{ flex: 1, minWidth: '250px' }}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={status === 'loading'}
                                    style={{ minWidth: '160px' }}
                                >
                                    {status === 'loading' ? 'Joining...' : 'Subscribe'}
                                    <Send size={16} style={{ marginLeft: '8px' }} />
                                </button>
                            </form>
                        )}

                        <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                            No spam. Just high-impact strategies. Unsubscribe anytime.
                        </p>
                    </div>

                    {/* Background Decorative Element */}
                    <div style={{
                        position: 'absolute',
                        top: '-50%',
                        right: '-10%',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, var(--accent-gold) 0%, transparent 70%)',
                        opacity: 0.05,
                        filter: 'blur(60px)',
                        pointerEvents: 'none'
                    }} />
                </div>
            </div>
        </section >
    );
};

export default Newsletter;
