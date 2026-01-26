import React, { useState, useRef } from 'react';

export default function UploadArea({
    title = "Drop file here",
    accept = ".pdf,.jpg,.jpeg,.png,.heic",
    onBack
}) {
    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [completed, setCompleted] = useState(false);
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
            setCompleted(false);
        }
    };

    const handleFileSelect = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setCompleted(false);
        }
    };

    const handleProcess = () => {
        if (!file) return;
        setProcessing(true);
        setTimeout(() => {
            setProcessing(false);
            setCompleted(true);
        }, 1500);
    };

    const handleReset = () => {
        setFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    }

    return (
        <div style={{ width: '100%', maxWidth: '640px', margin: '0 0 3rem 0' }}>

            {onBack && !file && (
                <button onClick={onBack} className="mb-4" style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    padding: 0,
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem'
                }}>
                    &larr; Back
                </button>
            )}

            {!file && (
                <div
                    className={`upload-area ${isDragging ? 'active' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                >
                    <div style={{ pointerEvents: 'none' }}>
                        <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: 500 }}>{title}</p>
                        <p className="mono-text" style={{ color: 'var(--text-tertiary)' }}>or click to browse</p>
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                        style={{ display: 'none' }}
                        accept={accept}
                    />
                </div>
            )}

            {file && !completed && !processing && (
                <div style={{
                    border: '1px solid var(--border-color)',
                    padding: '2rem',
                    borderRadius: 'var(--radius)',
                    textAlign: 'center'
                }}>
                    <div className="mb-4">
                        <div style={{ fontWeight: 500, marginBottom: '0.25rem' }}>{file.name}</div>
                        <div className="mono-text">
                            {(file.size / 1024 / 1024).toFixed(2)} MB • {file.type.split('/')[1] ? file.type.split('/')[1].toUpperCase() : 'FILE'}
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                        <button className="btn btn-outline" onClick={handleReset}>Cancel</button>
                        <button className="btn btn-primary" onClick={handleProcess}>
                            Process File
                        </button>
                    </div>
                </div>
            )}

            {processing && (
                <div style={{
                    border: '1px solid var(--border-color)',
                    padding: '4rem 2rem',
                    borderRadius: 'var(--radius)',
                    textAlign: 'center'
                }}>
                    <p className="mono-text mb-2">PROCESSING</p>
                    <div style={{ width: '100%', maxWidth: '200px', height: '1px', background: '#eaeaea', margin: '0 auto' }}>
                        <div style={{ width: '30%', height: '100%', background: '#000', animation: 'progress 1s infinite linear' }}></div>
                    </div>
                    <style>{`
              @keyframes progress {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(300%); }
              }
            `}</style>
                </div>
            )}

            {completed && (
                <div style={{
                    border: '1px solid var(--border-color)',
                    padding: '3rem 2rem',
                    borderRadius: 'var(--radius)',
                    textAlign: 'center',
                    backgroundColor: 'var(--bg-subtle)'
                }}>
                    <div className="mb-4">
                        <div style={{
                            display: 'inline-block',
                            marginBottom: '1rem',
                            color: '#000'
                        }}>Looking good.</div>
                        <div className="mono-text">FILE READY FOR DOWNLOAD</div>
                    </div>

                    <button className="btn btn-primary">
                        Download File
                    </button>

                    <div className="mt-4">
                        <button
                            onClick={handleReset}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--text-tertiary)',
                                cursor: 'pointer',
                                fontSize: '0.85rem',
                                textDecoration: 'underline'
                            }}
                        >
                            Process another file
                        </button>
                    </div>
                </div>
            )}

            {!file && (
                <p className="privacy-note text-center">
                    Secure processing. Files deleted automatically.
                </p>
            )}
        </div>
    );
}
