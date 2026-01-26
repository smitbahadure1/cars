import React from 'react';
import Header from './components/Header';
import UploadArea from './components/UploadArea';
import Footer from './components/Footer';

const tools = [
  {
    id: 'compress-pdf',
    name: 'Compress PDF',
    desc: 'Reduce file size while keeping quality.',
    accept: '.pdf',
    title: 'Compress PDF File'
  },
  {
    id: 'pdf-to-jpg',
    name: 'PDF to JPG',
    desc: 'Convert PDF pages to high-quality images.',
    accept: '.pdf',
    title: 'Convert PDF to JPG'
  },
  {
    id: 'jpg-to-pdf',
    name: 'JPG to PDF',
    desc: 'Turn your images into a single PDF.',
    accept: '.jpg,.jpeg,.png,.webp',
    title: 'Convert Images to PDF'
  },
  {
    id: 'merge-pdf',
    name: 'Merge PDF',
    desc: 'Combine multiple PDFs into one file.',
    accept: '.pdf',
    title: 'Merge Multiple PDFs'
  },
];

import Pricing from './components/Pricing';

function App() {
  const [activeToolId, setActiveToolId] = React.useState(null);
  const [view, setView] = React.useState('home'); // 'home', 'tool', 'pricing'

  const activeTool = tools.find(t => t.id === activeToolId);

  const handleToolClick = (toolId) => {
    setActiveToolId(toolId);
    setView('tool');
    window.scrollTo(0, 0);
  };

  const handleNavClick = (newView) => {
    setView(newView);
    setActiveToolId(null);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header onNavClick={handleNavClick} currentView={view} />
      <main>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {view === 'pricing' && (
            <Pricing onGoBack={() => handleNavClick('home')} />
          )}

          {view === 'tool' && activeTool && (
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h1 className="text-center">{activeTool.name}</h1>
              <p className="hero-subtext text-center" style={{ marginBottom: '2rem' }}>
                {activeTool.desc}
              </p>
              <UploadArea
                title={activeTool.title}
                accept={activeTool.accept}
                onBack={() => handleNavClick('home')}
              />
            </div>
          )}

          {view === 'home' && (
            <>
              <h1 className="text-center">Optimize your documents instantly.</h1>
              <p className="hero-subtext text-center">
                Simple, private tools to compress and convert your PDFs and images efficiently.
              </p>
              <UploadArea />

              <div id="features" style={{ marginTop: '6rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div style={{ padding: '1.5rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius)' }}>
                  <div style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>🔒</div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Private by Design</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Files are processed locally in your browser whenever possible. We never store your documents.</p>
                </div>
                <div style={{ padding: '1.5rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius)' }}>
                  <div style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>⚡</div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Lightning Fast</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Optimized algorithms ensure your files are converted or compressed in seconds, not minutes.</p>
                </div>
                <div style={{ padding: '1.5rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius)' }}>
                  <div style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>✨</div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>High Quality</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>Smart compression technology reduces file size without compromising visual quality.</p>
                </div>
              </div>

              <div id="tools" style={{ maxWidth: '100%', width: '100%', marginTop: '6rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>All Tools</h3>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{tools.length} tools available</span>
                </div>
                <div className="tools-grid">
                  {tools.map((tool, index) => (
                    <div
                      key={tool.id}
                      className="tool-card"
                      onClick={() => handleToolClick(tool.id)}
                    >
                      <div className="tool-title">
                        {tool.name}
                        {index === 0 && <span className="badge">Popular</span>}
                        {index === 2 && <span className="badge">New</span>}
                      </div>
                      <div className="tool-desc">
                        {tool.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="faq" className="faq-section">
                <h3 className="mb-4" style={{ fontSize: '1.5rem' }}>Frequently Asked Questions</h3>
                <details>
                  <summary>Is it safe to upload my files?</summary>
                  <p>Absolutely. All processing happens locally in your browser when possible, or on secure ephemeral servers that delete your files immediately after processing.</p>
                </details>
                <details>
                  <summary>Is this service really free?</summary>
                  <p>Yes, all standard tools are completely free to use without any hidden limits or watermarks.</p>
                </details>
                <details>
                  <summary>Do I need to install any software?</summary>
                  <p>No, everything runs directly in your web browser. You can use these tools on any device, including mobile phones and tablets.</p>
                </details>
                <details>
                  <summary>What file formats do you support?</summary>
                  <p>We currently support PDF, JPG, PNG, and HEIC files for conversion and compression tasks.</p>
                </details>
              </div>
            </>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
