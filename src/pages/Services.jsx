import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Globe, PenTool, BarChart, Users, Heart } from 'lucide-react';

const services = [
    {
        icon: <BarChart size={32} />,
        title: 'Manufacturing Process Audit',
        desc: 'Deep-dive analysis of assembly lines, supply chain logistics, and production workflows to identify hidden efficiencies.',
        features: ['JIT Inventory Optimization', 'Robotic Integration', 'Six Sigma Audits']
    },
    {
        icon: <Layout size={32} />,
        title: 'OEM Brand Positioning',
        desc: 'Crafting a unique value proposition for Tier 1 and Tier 2 suppliers in the competitive automotive landscape.',
        features: ['Global Market Analysis', 'OEM Partner Mapping', 'Competitive Benchmarking']
    },
    {
        icon: <Users size={32} />,
        title: 'Engineering Culture & Training',
        desc: 'Building high-performance technical teams through bespoke training programs and engineering excellence.',
        features: ['CAD/CAM Workshops', 'Technical Leadership', 'Advanced R&D Training']
    },
    {
        icon: <Globe size={32} />,
        title: 'Supply Chain Management',
        desc: 'Sophisticated logistics strategies to maximize part availability and minimize production downtime.',
        features: ['Global Sourcing Audits', 'Vendor Management', 'Risk Mitigation Planning']
    },
    {
        icon: <PenTool size={32} />,
        title: 'Prototyping & R&D Consulting',
        desc: 'Turning concepts into road-ready prototypes through structured engineering phases.',
        features: ['Phase Gate Management', 'Materials Engineering', 'Safety Testing Oversight']
    },
    {
        icon: <Heart size={32} />,
        title: 'Vehicle Quality Assurance',
        desc: 'Mapping and perfecting every technical specification from design to delivery.',
        features: ['ISO Standards Compliance', 'Zero-Defect Strategy', 'Testing Protocol Design']
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
                        We provide specialized consulting across the entire automotive value chain, tailored to your manufacturing challenges.
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
