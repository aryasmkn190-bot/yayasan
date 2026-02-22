import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        setMobileOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const links = [
        { label: 'Tentang', id: 'tentang' },
        { label: 'Visi & Misi', id: 'visi-misi' },
        { label: 'Program', id: 'program' },
        { label: 'Struktur', id: 'struktur' },
        { label: 'Kontak', id: 'kontak' },
    ];

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
                <div className="container">
                    <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                        <div className="nav-logo-icon">SB</div>
                        <span>Saling Bantu</span>
                    </a>

                    <div className="nav-links">
                        {links.map(link => (
                            <button
                                key={link.id}
                                className="nav-link"
                                onClick={() => scrollTo(link.id)}
                            >
                                {link.label}
                            </button>
                        ))}
                        <button className="nav-cta" onClick={() => scrollTo('kontak')}>
                            Donasi Sekarang
                        </button>
                    </div>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileOpen(true)}
                        aria-label="Menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div
                className={`mobile-nav-overlay ${mobileOpen ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
            />
            <div className={`mobile-nav-panel ${mobileOpen ? 'active' : ''}`}>
                <div className="mobile-nav-header">
                    <div className="nav-logo" style={{ color: 'var(--text-primary)' }}>
                        <div className="nav-logo-icon">SB</div>
                        <span>Saling Bantu</span>
                    </div>
                    <button className="mobile-nav-close" onClick={() => setMobileOpen(false)}>✕</button>
                </div>

                <div className="mobile-nav-links">
                    {links.map(link => (
                        <button
                            key={link.id}
                            className="mobile-nav-link"
                            onClick={() => scrollTo(link.id)}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                <button className="mobile-nav-cta" onClick={() => scrollTo('kontak')}>
                    Donasi Sekarang
                </button>
            </div>
        </>
    );
}
