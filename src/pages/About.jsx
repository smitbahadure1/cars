import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <main className="section-padding" style={{ marginTop: '80px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                            The Practice
                        </h4>
                        <h1 style={{ fontSize: '4rem', marginBottom: '2rem' }}>Experience Meets <span style={{ fontStyle: 'italic' }}>Insight.</span></h1>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Founded by industry veterans with over three decades of collective experience in luxury hospitality management,
                            LuxeConsult was born from a simple observation: the most successful properties are those that balance technical
                            operational rigor with human-centric hospitality.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
                            We don't just provide reports; we embed ourselves within your team to drive cultural and operational change
                            that yields measurable financial results.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <motion.div whileHover={{ y: -5, color: 'var(--accent-gold-hover)' }} transition={{ duration: 0.3 }}>
                                <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)' }}>15+</div>
                                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-tertiary)' }}>Years Experience</div>
                            </motion.div>
                            <motion.div whileHover={{ y: -5, color: 'var(--accent-gold-hover)' }} transition={{ duration: 0.3 }}>
                                <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--accent-gold)' }}>80+</div>
                                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-tertiary)' }}>Luxury Properties</div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        style={{ position: 'relative' }}
                    >
                        <div className="glass" style={{ height: '600px', width: '100%', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--glass-border)' }}>
                            {/* Stylish Abstract Visual */}
                            <div style={{ height: '100%', width: '100%', background: 'linear-gradient(135deg, #0f0f10 0%, #1a1a1c 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 30% 20%, rgba(197, 160, 89, 0.08) 0%, transparent 60%)' }}></div>
                                <div style={{ position: 'absolute', bottom: 0, right: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)' }}></div>
                                <div style={{ color: 'rgba(255,255,255,0.03)', fontSize: '12rem', fontFamily: 'var(--font-heading)', letterSpacing: '-0.05em', userSelect: 'none' }}>Lc</div>
                            </div>
                        </div>
                        {/* Overlay card */}
                        <div className="glass" style={{ position: 'absolute', bottom: '-2rem', left: '-2rem', padding: '2.5rem', maxWidth: '300px', borderLeft: '4px solid var(--accent-gold)' }}>
                            <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: '#fff' }}>
                                "Hospitality is not a department, it's a philosophy that must permeate every level of an organization."
                            </p>
                            <div style={{ fontWeight: 600 }}>Alexander Sterling</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Principal Consultant</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default About;
