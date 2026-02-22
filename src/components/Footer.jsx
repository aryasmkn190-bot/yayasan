export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div className="footer-brand">
                            <img src="/logo_yayasan.PNG" alt="Logo Saling Bantu Kreasi Indonesia" className="footer-logo-img" />
                        </div>
                        <p className="footer-desc">
                            Yayasan yang mendorong kolaborasi, pemberdayaan komunitas, dan
                            inovasi sosial untuk Indonesia yang lebih baik. Berdasarkan
                            Pancasila dan berakidah Islam Ahlusunnah wal Jama'ah.
                        </p>
                        <div className="footer-socials">
                            <a href="#" className="footer-social-link" aria-label="Facebook">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="#" className="footer-social-link" aria-label="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="#" className="footer-social-link" aria-label="YouTube">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>Navigasi</h4>
                        <button className="footer-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Beranda</button>
                        <button className="footer-link" onClick={() => scrollTo('tentang')}>Tentang Kami</button>
                        <button className="footer-link" onClick={() => scrollTo('visi-misi')}>Visi & Misi</button>
                        <button className="footer-link" onClick={() => scrollTo('program')}>Program</button>
                    </div>

                    <div className="footer-column">
                        <h4>Program</h4>
                        <span className="footer-link">Bantuan Langsung</span>
                        <span className="footer-link">Pendidikan & Pelatihan</span>
                        <span className="footer-link">Kolaborasi Komunitas</span>
                        <span className="footer-link">Teknologi Sosial</span>
                    </div>

                    <div className="footer-column">
                        <h4>Kontak</h4>
                        <span className="footer-link">Jl. Pelabuhan II No.583</span>
                        <span className="footer-link">Kota Sukabumi, Jawa Barat</span>
                        <span className="footer-link">info@salingbantu.org</span>
                        <span className="footer-link">+62 812-XXXX-XXXX</span>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} Yayasan Saling Bantu Kreasi Indonesia. Semua hak dilindungi.
                    </p>
                    <div className="footer-legal">
                        <a href="#">Kebijakan Privasi</a>
                        <a href="#">Syarat & Ketentuan</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
