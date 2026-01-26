import React from 'react';

export default function Pricing({ onGoBack }) {
    return (
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
            <div className="text-center mb-4">
                <h1 className="mb-2">Simple, transparent pricing.</h1>
                <p className="hero-subtext">Support the project and unlock higher limits.</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginTop: '3rem'
            }}>
                {/* Free Tier */}
                <div style={{
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div className="mono-text mb-2">FREE</div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>$0</div>
                    <p style={{ fontSize: '0.9rem', marginBottom: '2rem' }}>Forever free for standard use.</p>

                    <ul style={{ listStyle: 'none', marginBottom: '2rem', flex: 1 }}>
                        <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem' }}>
                            <span>✓</span> 5 Files per day
                        </li>
                        <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem' }}>
                            <span>✓</span> Max 10MB per file
                        </li>
                        <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem' }}>
                            <span>✓</span> Standard speed
                        </li>
                        <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem', color: 'var(--text-tertiary)' }}>
                            <span>✕</span> Priority support
                        </li>
                    </ul>

                    <button className="btn btn-outline" style={{ width: '100%' }} onClick={onGoBack}>
                        Use Free Tools
                    </button>
                </div>

                {/* Pro Tier */}
                <div style={{
                    border: '1px solid var(--primary-color)',
                    borderRadius: 'var(--radius)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    backgroundColor: '#fafafa'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'var(--primary-color)',
                        color: '#fff',
                        padding: '4px 12px',
                        borderRadius: '100px',
                        fontSize: '0.75rem',
                        fontWeight: 500
                    }}>
                        RECOMMENDED
                    </div>

                    <div className="mono-text mb-2" style={{ color: 'var(--primary-color)' }}>PRO</div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>$5<span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--text-secondary)' }}>/mo</span></div>
                    <p style={{ fontSize: '0.9rem', marginBottom: '2rem' }}>For power users and pros.</p>

                    <ul style={{ listStyle: 'none', marginBottom: '2rem', flex: 1 }}>
                        <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem' }}>
                            <span>✓</span> Unlimited files
                        </li>
                        <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem' }}>
                            <span>✓</span> Max 2GB per file
                        </li>
                        <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem' }}>
                            <span>✓</span> Batch processing
                        </li>
                        <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem' }}>
                            <span>✓</span> No ads / watermark
                        </li>
                    </ul>

                    <button className="btn btn-primary" style={{ width: '100%' }}>
                        Upgrade to Pro
                    </button>

                    <p className="text-center mt-2" style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                        Secure payment via Stripe
                    </p>
                </div>
            </div>

            <div className="text-center mt-4">
                <p style={{ fontSize: '0.9rem' }}>Enterprise user? <a href="#">Contact us</a> for volume licensing.</p>
            </div>
        </div>
    );
}
