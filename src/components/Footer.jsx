import React from 'react';

export default function Footer() {
    return (
        <div className="container">
            <footer>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                    <div>
                        <div style={{ fontWeight: 600, marginBottom: '1rem' }}>PDF Tools</div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            Simple, secure, and powerful tools for your everyday document needs. Built with privacy in mind.
                        </p>
                    </div>
                    <div>
                        <div style={{ fontWeight: 500, marginBottom: '1rem', fontSize: '0.9rem' }}>Product</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <a href="#">Compress PDF</a>
                            <a href="#">PDF to JPG</a>
                            <a href="#">Merge PDF</a>
                            <a href="#">Pricing</a>
                        </div>
                    </div>
                    <div>
                        <div style={{ fontWeight: 500, marginBottom: '1rem', fontSize: '0.9rem' }}>Company</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <a href="#">About</a>
                            <a href="#">Blog</a>
                            <a href="#">Careers</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                    <div>
                        <div style={{ fontWeight: 500, marginBottom: '1rem', fontSize: '0.9rem' }}>Legal</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Cookie Policy</a>
                        </div>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>
                        © 2026 PDF Tools. All rights reserved. <span style={{ marginLeft: '10px', opacity: 0.7 }}>v0.0.1</span>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#" style={{ color: 'var(--text-tertiary)' }}>Twitter</a>
                        <a href="#" style={{ color: 'var(--text-tertiary)' }}>GitHub</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
