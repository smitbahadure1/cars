import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
    const packages = [
        {
            title: "Operational Audit",
            price: "Assessment",
            description: "A comprehensive deep-dive into your property's current operations, financial health, and guest experience touchpoints.",
            features: [
                "Full Property Inspection",
                "Financial Performance Analysis",
                "Staff Efficiency Review",
                "Detailed Action Plan",
                "Competitor Benchmarking"
            ],
            highlight: false
        },
        {
            title: "Strategic Experience",
            price: "Retainer",
            description: "Ongoing partnership to implement changes, train staff, and elevate the guest experience standards continuously.",
            features: [
                "Bi-Weekly Strategy Calls",
                "Executive Leadership Coaching",
                "Seasonal Menu & Service Design",
                "Revenue Management Optimization",
                "Crisis Management Support",
                "Priority On-Site Visits"
            ],
            highlight: true
        },
        {
            title: "Brand Transformation",
            price: "Project",
            description: "Complete reimagining of your hotel's identity, from visual branding to the physical guest journey and narrative.",
            features: [
                "Brand Identity Overhaul",
                "Interior Design Consultation",
                "Marketing & Go-to-Market Strategy",
                "Cultural Programming",
                "Launch Event Planning"
            ],
            highlight: false
        }
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                        Invest in Excellence
                    </h4>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Tailored <span style={{ fontStyle: 'italic' }}>Solutions</span></h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        We offer flexible engagement models designed to meet the unique needs of boutique hotels and luxury resorts at every stage.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {packages.map((pkg, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className={`glass ${pkg.highlight ? 'highlight-card' : ''}`}
                            style={{
                                padding: '3rem',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                border: pkg.highlight ? '1px solid var(--accent-gold)' : '1px solid var(--glass-border)',
                                boxShadow: pkg.highlight ? 'var(--shadow-gold)' : 'none'
                            }}
                        >
                            {pkg.highlight && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'var(--accent-gold)',
                                    color: '#000',
                                    padding: '0.5rem 1.5rem',
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    borderRadius: '2px'
                                }}>
                                    Most Popular
                                </div>
                            )}

                            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>{pkg.title}</h3>
                            <div style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', marginBottom: '1.5rem', fontWeight: 500 }}>{pkg.price}</div>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                                {pkg.description}
                            </p>

                            <ul style={{ listStyle: 'none', marginBottom: '3rem', flex: 1 }}>
                                {pkg.features.map((feature, fIdx) => (
                                    <li key={fIdx} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
                                        <Check size={16} color="var(--accent-gold)" />
                                        <span style={{ fontSize: '0.95rem' }}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={pkg.highlight ? 'btn btn-primary' : 'btn btn-outline'} style={{ width: '100%' }}>
                                Inquire Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
