import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Globe, PenTool, BarChart, Users, Heart } from 'lucide-react';

const services = [
    {
        icon: <BarChart size={32} />,
        title: 'Operational Audit & Optimization',
        desc: 'Deep-dive analysis of P&L, SOPs, and departmental workflows to identify hidden efficiencies.',
        features: ['Cost Control Strategies', 'Process Re-engineering', 'Tech Stack Integration']
    },
    {
        icon: <Layout size={32} />,
        title: 'Brand Identity & Positioning',
        desc: 'Crafting a unique narrative and visual language that resonates with the modern luxury guest.',
        features: ['Market Gap Analysis', 'Concept Development', 'Guest Persona Mapping']
    },
    {
        icon: <Users size={32} />,
        title: 'Talent Culture & Training',
        desc: 'Building high-performance teams through bespoke training programs and cultural alignment.',
        features: ['Service Excellence Workshops', 'Leadership Coaching', 'Recruitment Strategy']
    },
    {
        icon: <Globe size={32} />,
        title: 'Revenue Management',
        desc: 'Sophisticated pricing strategies to maximize RevPAR and TrevPAR across all seasons.',
        features: ['Dynamic Pricing Models', 'Distribution Audit', 'Ancillary Revenue Growth']
    },
    {
        icon: <PenTool size={32} />,
        title: 'Pre-Opening Consulting',
        desc: 'Turning architectural plans into living, breathing hotel operations through structured launches.',
        features: ['Critical Path Management', 'OS&E Procurement', 'Soft Launch Oversight']
    },
    {
        icon: <Heart size={32} />,
        title: 'Guest Experience Design',
        desc: 'Mapping and perfecting every touchpoint of the guest journey from booking to departure.',
        features: ['Touchpoint Audit', 'Signature Service Rituals', 'Loyalty Program Design']
    }
];

const Services = () => {
    return (
        <main className="section-padding" style={{ marginTop: '80px' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', marginBottom: '6rem' }}>
                    <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                        Our Solutions
                    </h4>
                    <h1 style={{ fontSize: '4rem', marginBottom: '2rem' }}>Comprehensive <span style={{ fontStyle: 'italic' }}>Expertise</span></h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                        We provide specialized consulting across the entire hospitality value chain, tailored to your property's unique challenges.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                y: -10,
                                boxShadow: '0 20px 40px -10px rgba(197, 160, 89, 0.2)',
                                borderColor: 'rgba(197, 160, 89, 0.4)',
                                background: 'rgba(255, 255, 255, 0.04)'
                            }}
                            className="glass"
                            style={{
                                padding: '3rem',
                                border: '1px solid var(--glass-border)',
                                transition: 'background 0.3s ease',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <div style={{
                                color: 'var(--accent-gold)',
                                marginBottom: '2rem',
                                padding: '18px',
                                background: 'rgba(197, 160, 89, 0.08)',
                                borderRadius: '16px',
                                width: 'fit-content',
                                border: '1px solid rgba(197, 160, 89, 0.2)'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.7rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.7', flex: 1 }}>{service.desc}</p>

                            <ul style={{ listStyle: 'none', padding: 0, marginTop: 'auto' }}>
                                {service.features.map((feature, fIdx) => (
                                    <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.8rem', color: 'var(--text-primary)', fontSize: '0.9rem', opacity: 0.9 }}>
                                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-gold)', boxShadow: '0 0 8px var(--accent-gold)' }} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Services;
