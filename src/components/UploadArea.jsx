import React, { useState, useRef } from 'react';
import { Upload, FileText, X, Check, Loader } from 'lucide-react';

export default function UploadArea({
    title = "Upload Documentation",
    accept = ".pdf,.jpg,.jpeg,.png,.heic",
    onBack,
    onSuccess
}) {
    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [status, setStatus] = useState('idle'); // idle, processing, success, error
    const fileInputRef = useRef(null);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
            setStatus('idle');
        }
    };

    const handleFileSelect = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setStatus('idle');
        }
    };

    const handleProcess = () => {
        if (!file) return;
        setStatus('processing');

        // Simulate processing
        setTimeout(() => {
            setStatus('success');
            if (onSuccess) onSuccess(file);
        }, 2000);
    };

    const handleReset = () => {
        setFile(null);
        setStatus('idle');
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    return (
        <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
            {onBack && !file && (
                <button
                    onClick={onBack}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '1.5rem',
                        fontSize: '0.9rem'
                    }}
                >
                    &larr; Back
                </button>
            )}

            {!file ? (
                <div
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className="glass"
                    style={{
                        padding: '4rem 2rem',
                        textAlign: 'center',
                        cursor: 'pointer',
                        border: isDragging ? '1px solid var(--accent-gold)' : '1px solid var(--glass-border)',
                        backgroundColor: isDragging ? 'rgba(197, 160, 89, 0.05)' : 'var(--glass-bg)',
                        transition: 'var(--transition)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1.5rem'
                    }}
                >
                    <div style={{
                        padding: '1.5rem',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid var(--border)',
                        color: isDragging ? 'var(--accent-gold)' : 'var(--text-secondary)'
                    }}>
                        <Upload size={32} />
                    </div>
                    <div>
                        <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{title}</p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            Drag & drop or click to browse
                        </p>
                        <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', marginTop: '0.5rem', fontFamily: 'monospace' }}>
                            Supports: {accept.replace(/\./g, ' ').toUpperCase()}
                        </p>
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                        style={{ display: 'none' }}
                        accept={accept}
                    />
                </div>
            ) : (
                <div className="glass" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                    {status === 'processing' ? (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                            <div className="loader" style={{ animation: 'spin 1s linear infinite' }}>
                                <Loader size={48} color="var(--accent-gold)" />
                            </div>
                            <p style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem' }}>Analying Document...</p>
                            <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                        </div>
                    ) : status === 'success' ? (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ padding: '1rem', background: 'rgba(197, 160, 89, 0.1)', borderRadius: '50%', color: 'var(--accent-gold)' }}>
                                <Check size={48} />
                            </div>
                            <div>
                                <h3 style={{ marginBottom: '0.5rem' }}>Upload Complete</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>Your file has been securely processed.</p>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <button className="btn btn-outline" onClick={handleReset}>Upload Another</button>
                            </div>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                                <FileText size={48} color="var(--text-secondary)" />
                            </div>
                            <div>
                                <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{file.name}</p>
                                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', fontFamily: 'monospace' }}>
                                    {(file.size / 1024 / 1024).toFixed(2)} MB • {file.type || 'UNKNOWN'}
                                </p>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <button
                                    className="btn"
                                    style={{ color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
                                    onClick={handleReset}
                                >
                                    Cancel
                                </button>
                                <button className="btn btn-primary" onClick={handleProcess}>
                                    Process File
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
