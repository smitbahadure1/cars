import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import Newsletter from '../components/Newsletter';

const Home = () => {
    const navigate = useNavigate();

    return (
        <main>
            {/* Hero Section */}
            <section style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        style={{ maxWidth: '800px', position: 'relative', zIndex: 2 }}
                    >
                        <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                            Strategic Hospitality Consulting
                        </h4>
                        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', marginBottom: '2rem', lineHeight: 1.1 }}>
                            Elevating the <span style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>Standard</span> of Guest Experience.
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px' }}>
                            We help boutique hotels and luxury resorts optimize operations, increase RevPAR, and create unforgettable guest journeys.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                                Book a Consultation <ArrowRight size={18} style={{ marginLeft: '10px' }} />
                            </button>
                            <button className="btn btn-outline" onClick={() => navigate('/services')}>
                                Explore Services
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Abstract Visual */}
                <div style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: '50%',
                    height: '100%',
                    overflow: 'hidden',
                    zIndex: 1,
                    pointerEvents: 'none'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '120%',
                        height: '120%',
                        background: 'radial-gradient(circle at 70% 30%, rgba(197, 160, 89, 0.15) 0%, transparent 60%)',
                        filter: 'blur(40px)'
                    }}></div>
                    <div className="glass" style={{
                        position: 'absolute',
                        top: '20%',
                        right: '10%',
                        width: '300px',
                        padding: '2rem',
                        transform: 'rotate(-5deg)',
                        boxShadow: 'var(--shadow-lg)',
                        border: '1px solid var(--glass-border)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '1rem' }}>
                            <div style={{ padding: '10px', background: 'rgba(197, 160, 89, 0.1)', borderRadius: '50%' }}>
                                <TrendingUp color="var(--accent-gold)" size={24} />
                            </div>
                            <div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Revenue Growth</div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>+24%</div>
                            </div>
                        </div>
                        <div style={{ height: '4px', width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: '75%', background: 'var(--accent-gold)' }}></div>
                        </div>
                    </div>

                    <div className="glass" style={{
                        position: 'absolute',
                        top: '55%',
                        right: '25%',
                        width: '280px',
                        padding: '2rem',
                        transform: 'rotate(5deg)',
                        boxShadow: 'var(--shadow-lg)',
                        border: '1px solid var(--glass-border)',
                        backdropFilter: 'blur(20px)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', gap: '1rem' }}>
                            <div style={{ padding: '10px', background: 'rgba(197, 160, 89, 0.1)', borderRadius: '50%' }}>
                                <Star color="var(--accent-gold)" size={24} />
                            </div>
                            <div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Guest Satisfaction</div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>4.9/5.0</div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '4px' }}>
                            {[1, 2, 3, 4, 5].map(i => (
                                <Star key={i} size={12} fill="var(--accent-gold)" color="var(--accent-gold)" />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section style={{ padding: '4rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}>
                <div className="container">
                    <p style={{ textAlign: 'center', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--text-tertiary)', marginBottom: '2.5rem' }}>
                        Trusted by World-Class Institutions
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', opacity: 0.5, flexWrap: 'wrap', gap: '3rem' }}>
                        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>ASTON REGENCY</span>
                        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>THE NOIR HOTEL</span>
                        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>VELVET RESORTS</span>
                        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>LUMIÈRE SUITES</span>
                    </div>
                </div>
            </section>

            {/* Strategic Pillars */}
            <section className="section-padding">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Strategic Excellence</h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                            Our methodology combines data-driven insights with the timeless art of hospitality.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: <TrendingUp size={32} />, title: 'Operational Efficiency', desc: 'Streamlining back-of-house processes to maximize profitability without compromising service.' },
                            { icon: <Users size={32} />, title: 'Staff Development', desc: 'Curating training programs that empower team members to deliver exceptional guest moments.' },
                            { icon: <ShieldCheck size={32} />, title: 'Brand Positioning', desc: 'Defining your unique value proposition in an increasingly competitive luxury market.' }
                        ].map((pillar, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                whileHover={{ y: -10, boxShadow: 'var(--shadow-gold)' }}
                                className="glass"
                                style={{ padding: '3rem 2rem', transition: 'var(--transition)' }}
                            >
                                <div style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>{pillar.icon}</div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{pillar.title}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{pillar.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Results Section */}
            <section style={{ padding: '6rem 0', background: 'var(--bg-card)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', textAlign: 'center' }}>
                        {[
                            { label: 'Revenue Growth', value: '35%' },
                            { label: 'Partner Hotels', value: '150+' },
                            { label: 'Guest Score', value: '4.9/5' },
                            { label: 'Markets Covered', value: '24' }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>{stat.value}</div>
                                <div style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', color: 'var(--text-tertiary)' }}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Signup (Primary Lead Magnet) */}
            <Newsletter />
        </main>
    );
};

export default Home;
