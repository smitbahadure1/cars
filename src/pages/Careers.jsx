import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const jobs = [
    {
        title: 'Senior Manufacturing Engineer',
        location: 'Detroit, MI / Remote',
        type: 'Full-time',
        dept: 'Engineering'
    },
    {
        title: 'Supply Chain Strategy Consultant',
        location: 'Stuttgart, Germany',
        type: 'Full-time',
        dept: 'Consulting'
    },
    {
        title: 'Automotive Data Analyst',
        location: 'Pune, India / Remote',
        type: 'Permanent',
        dept: 'Data Science'
    },
    {
        title: 'OEM Quality Auditor',
        location: 'Shanghai, China',
        type: 'Contract',
        dept: 'Quality Assurance'
    }
];

const Careers = () => {
    return (
        <main className="section-padding" style={{ marginTop: '80px' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                        Join the Team
                    </h4>
                    <h1 style={{ fontSize: '4rem', marginBottom: '2rem' }}>Build the <span style={{ fontStyle: 'italic' }}>Future</span></h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        We're looking for world-class engineers, consultants, and visionaries to help us redefine
                        automotive manufacturing excellence.
                    </p>
                </div>

                <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
                    {jobs.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.01, borderColor: 'var(--accent-gold)' }}
                            className="glass"
                            style={{
                                padding: '2rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: '2rem',
                                border: '1px solid var(--glass-border)',
                                cursor: 'pointer'
                            }}
                        >
                            <div style={{ flex: 1, minWidth: '250px' }}>
                                <div style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                                    {job.dept}
                                </div>
                                <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{job.title}</h3>
                                <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <MapPin size={14} /> {job.location}
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Clock size={14} /> {job.type}
                                    </span>
                                </div>
                            </div>
                            <button className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>
                                Apply Now <ArrowRight size={16} style={{ marginLeft: '10px' }} />
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="glass" style={{ marginTop: '8rem', padding: '4rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Don't see a fit?</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
                        We are always looking for exceptional talent. Send us your resume and we'll keep you in mind
                        for future opportunities.
                    </p>
                    <button className="btn btn-primary">General Application</button>
                </div>
            </div>
        </main>
    );
};

export default Careers;
