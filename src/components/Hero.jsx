import { Heart, ArrowRight, Users } from 'lucide-react';

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-bg-pattern" />
            <div className="hero-grid-lines" />

            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="hero-badge-dot" />
                        Badan Wakaf Produktif
                    </div>

                    <h1 className="hero-title">
                        Bersama Membangun{' '}
                        <span className="highlight">Indonesia</span> yang Lebih Baik
                    </h1>

                    <p className="hero-description">
                        Yayasan Saling Bantu Kreasi Indonesia hadir untuk mendorong kolaborasi,
                        pemberdayaan komunitas, dan inovasi sosial demi kesejahteraan masyarakat
                        Indonesia.
                    </p>

                    <div className="hero-actions">
                        <button className="btn-primary" onClick={() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })}>
                            <Heart size={18} />
                            Mulai Berdonasi
                        </button>
                        <button className="btn-secondary" onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}>
                            Lihat Program
                            <ArrowRight size={18} />
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat-item">
                            <div className="hero-stat-number">500+</div>
                            <div className="hero-stat-text">Penerima Manfaat</div>
                        </div>
                        <div className="hero-stat-item">
                            <div className="hero-stat-number">15+</div>
                            <div className="hero-stat-text">Program Aktif</div>
                        </div>
                        <div className="hero-stat-item">
                            <div className="hero-stat-number">50+</div>
                            <div className="hero-stat-text">Relawan</div>
                        </div>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="hero-image-container">
                        <img src="/hero.png" alt="Relawan Yayasan Saling Bantu Kreasi Indonesia" />
                    </div>

                    <div className="hero-float-card">
                        <div className="stat-value">Rp 20Jt+</div>
                        <div className="stat-label">Dana Terkumpul</div>
                    </div>

                    <div className="hero-float-card-2">
                        <div className="icon-circle">
                            <Users size={20} />
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Kolaborasi</div>
                            <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>Bersama Komunitas</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
