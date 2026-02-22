import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Handshake, Shield, Lightbulb, Heart } from 'lucide-react';

export default function About() {
    const [ref, visible] = useScrollAnimation();

    return (
        <section className="about" id="tentang">
            <div className="container">
                <div className={`about-grid animate-on-scroll ${visible ? 'visible' : ''}`} ref={ref}>
                    <div className="about-image-wrapper">
                        <div className="about-image">
                            <img src="/education.png" alt="Program pendidikan Yayasan Saling Bantu" />
                        </div>
                        <div className="about-accent" />
                    </div>

                    <div className="about-content">
                        <div className="section-label">Tentang Kami</div>
                        <h2 className="section-title">
                            Yayasan <span>Saling Bantu</span> Kreasi Indonesia
                        </h2>
                        <p className="section-subtitle">
                            Didirikan berdasarkan Akte Notaris sebagai Badan Wakaf Produktif,
                            yayasan kami berkedudukan di Kota Sukabumi, Jawa Barat. Kami berdasarkan
                            Pancasila dan berakidah Islam Ahlusunnah wal Jama'ah.
                        </p>
                        <p className="section-subtitle" style={{ marginTop: '16px' }}>
                            Kami percaya bahwa kolaborasi dan saling membantu adalah kunci untuk
                            menciptakan perubahan positif yang berkelanjutan bagi masyarakat Indonesia.
                        </p>

                        <div className="about-features">
                            <div className="about-feature">
                                <div className="about-feature-icon">
                                    <Handshake size={20} />
                                </div>
                                <div>
                                    <h4>Kolaborasi</h4>
                                    <p>Memfasilitasi kerjasama antar komunitas</p>
                                </div>
                            </div>

                            <div className="about-feature">
                                <div className="about-feature-icon">
                                    <Shield size={20} />
                                </div>
                                <div>
                                    <h4>Transparansi</h4>
                                    <p>Pengelolaan terbuka dan akuntabel</p>
                                </div>
                            </div>

                            <div className="about-feature">
                                <div className="about-feature-icon">
                                    <Lightbulb size={20} />
                                </div>
                                <div>
                                    <h4>Inovasi</h4>
                                    <p>Solusi kreatif untuk isu sosial</p>
                                </div>
                            </div>

                            <div className="about-feature">
                                <div className="about-feature-icon">
                                    <Heart size={20} />
                                </div>
                                <div>
                                    <h4>Keberlanjutan</h4>
                                    <p>Bantuan yang berkesinambungan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
