import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const cases = [
    {
        title: 'Nexus Powertrain Systems',
        category: 'OEM Manufacturing',
        stat: '+32%',
        statLabel: 'Production Yield Increase',
        image: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(mock-img-1)',
        desc: 'Optimizing assembly line automation for a Tier 1 engine component manufacturer, resulting in record-breaking throughput levels.'
    },
    {
        title: 'Apex Dynamics Solutions',
        category: 'Supply Chain Optimization',
        stat: '94%',
        statLabel: 'On-Time Part Delivery',
        image: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(mock-img-2)',
        desc: 'A comprehensive digital transformation of inventory management that eliminated production delays and built a robust JIT network.'
    },
    {
        title: 'Stellar Auto Parts',
        category: 'Quality Turnaround',
        stat: '-18%',
        statLabel: 'Defect Rate Reduction',
        image: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(mock-img-3)',
        desc: 'Implemented advanced Six Sigma protocols and engineering audits to restore global compliance standards to a legacy OEM plant.'
    }
];

const CaseStudies = () => {
    return (
        <main className="section-padding" style={{ marginTop: '80px' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                        Success Stories
                    </h4>
                    <h1 style={{ fontSize: '4.5rem', marginBottom: '2rem' }}>Measurable <span style={{ fontStyle: 'italic' }}>Impact</span></h1>
                    <div style={{ width: '100px', height: '1px', background: 'var(--accent-gold)', margin: '0 auto' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
                    {cases.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}
                        >
                            <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                                <div style={{ color: 'var(--accent-gold)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                                    {project.category}
                                </div>
                                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{project.title}</h2>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                                    {project.desc}
                                </p>
                                <div style={{ display: 'flex', gap: '3rem', marginBottom: '3rem' }}>
                                    <div>
                                        <div style={{ fontSize: '2.5rem', fontWeight: 600, color: 'var(--accent-gold)' }}>{project.stat}</div>
                                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>{project.statLabel}</div>
                                    </div>
                                </div>
                                <button className="btn btn-outline">
                                    View Case Study <ExternalLink size={14} style={{ marginLeft: '10px' }} />
                                </button>
                            </div>

                            <div style={{ order: index % 2 === 0 ? 2 : 1, position: 'relative' }}>
                                <div className="glass" style={{ height: '500px', width: '100%', overflow: 'hidden', background: project.image }}>
                                    {/* Background Visual Mockup */}
                                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #111, #222)', opacity: 0.8 }} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default CaseStudies;
