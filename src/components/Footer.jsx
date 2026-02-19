import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ borderTop: '1px solid var(--border)', padding: '6rem 0 3rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
                    <div>
                        <div className="logo" style={{ marginBottom: '1.5rem' }}>SmitAutomotive</div>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '300px' }}>
                            Elevating automotive engineering standards through strategic OEM consulting and manufacturing excellence.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Quick Links</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <NavLink to="/services" className="nav-link" style={{ fontSize: '0.9rem' }}>Services</NavLink>
                            <NavLink to="/case-studies" className="nav-link" style={{ fontSize: '0.9rem' }}>Case Studies</NavLink>
                            <NavLink to="/careers" className="nav-link" style={{ fontSize: '0.9rem' }}>Careers</NavLink>
                            <NavLink to="/about" className="nav-link" style={{ fontSize: '0.9rem' }}>About Us</NavLink>
                            <NavLink to="/contact" className="nav-link" style={{ fontSize: '0.9rem' }}>Contact</NavLink>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Global Offices</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            <p>Detroit – Tech Center</p>
                            <p>Stuttgart – Innovation Hub</p>
                            <p>Pune – Engineering Center</p>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Connect</h4>
                        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                            <motion.a whileHover={{ color: 'var(--accent-gold)', y: -3 }} href="#" style={{ color: 'var(--text-secondary)' }}><Linkedin size={20} /></motion.a>
                            <motion.a whileHover={{ color: 'var(--accent-gold)', y: -3 }} href="#" style={{ color: 'var(--text-secondary)' }}><Instagram size={20} /></motion.a>
                            <motion.a whileHover={{ color: 'var(--accent-gold)', y: -3 }} href="mailto:contact@smitautomotive.com" style={{ color: 'var(--text-secondary)' }}><Mail size={20} /></motion.a>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                        © 2026 Smit Automotive Practice. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <NavLink to="/privacy" style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Privacy Policy</NavLink>
                        <a href="#" style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
