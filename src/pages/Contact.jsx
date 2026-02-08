import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        property: '',
        service: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your interest. We will contact you shortly.');
    };

    return (
        <main className="section-padding" style={{ marginTop: '80px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                            Connect
                        </h4>
                        <h1 style={{ fontSize: '4.5rem', marginBottom: '2rem' }}>Let's <span style={{ fontStyle: 'italic' }}>Begin</span></h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '4rem' }}>
                            Every conversation starts with a shared goal of excellence. Reach out to discuss how we can elevate your property.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)' }}>
                                    <Mail color="var(--accent-gold)" size={20} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Email Us</div>
                                    <div style={{ fontSize: '1.1rem' }}>consult@luxeconsult.com</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)' }}>
                                    <Phone color="var(--accent-gold)" size={20} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Call Us</div>
                                    <div style={{ fontSize: '1.1rem' }}>+1 (555) 724-8890</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)' }}>
                                    <MapPin color="var(--accent-gold)" size={20} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Our Office</div>
                                    <div style={{ fontSize: '1.1rem' }}>London | New York | Dubai</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass"
                        style={{ padding: '4rem' }}
                    >
                        <h3 style={{ fontSize: '2rem', marginBottom: '2.5rem' }}>Consultation Request</h3>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="email"
                                    placeholder="Professional Email"
                                    required
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Property / Organization Name"
                                    required
                                    onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                                />
                            </div>
                            <div className="input-group">
                                <select
                                    style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: 'white', borderRadius: '4px' }}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                >
                                    <option value="">Select Service of Interest</option>
                                    <option value="audit">Operational Audit</option>
                                    <option value="brand">Brand Strategy</option>
                                    <option value="training">Staff Training</option>
                                    <option value="opening">Pre-Opening</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <textarea
                                    placeholder="Tell us about your project or challenges"
                                    rows="4"
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                                Send Inquiry <Send size={16} style={{ marginLeft: '10px' }} />
                            </button>
                        </form>
                    </motion.div>

                </div>

                {/* FAQ Section */}
                <div style={{ marginTop: '10rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Common Inquiries</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Everything you need to know before we get started.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {[
                            { q: "What is the typical engagement duration?", a: " Engagements vary from a 2-week intensive audit to long-term strategic partnerships spanning several months." },
                            { q: "Do you offer international consulting?", a: "Yes, our team is global and we work with luxury properties across Europe, the Americas, and the Middle East." },
                            { q: "How soon can we expect results?", a: "Operational efficiencies often show impact within the first 30 days, while brand repositioning is a long-term value play." }
                        ].map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontFamily: 'var(--font-main)', fontWeight: 600 }}>{faq.q}</h4>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
