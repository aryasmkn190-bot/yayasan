import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Heart, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

export default function CTA() {
    const [ref, visible] = useScrollAnimation();

    return (
        <section className="cta-section" id="kontak">
            <div className="container">
                <div className={`cta-card animate-on-scroll ${visible ? 'visible' : ''}`} ref={ref}>
                    <div className="bg-glow bg-glow-1" />
                    <div className="bg-glow bg-glow-2" />

                    <div className="cta-content">
                        <h2 className="cta-title">
                            Mari <span>Bersama</span> Membantu Sesama
                        </h2>
                        <p className="cta-text">
                            Setiap kontribusi Anda, sekecil apapun, akan memberikan dampak besar bagi
                            mereka yang membutuhkan. Bergabunglah bersama kami untuk menciptakan
                            Indonesia yang lebih baik.
                        </p>

                        <div className="cta-actions">
                            <button className="btn-primary">
                                <Heart size={18} />
                                Donasi Sekarang
                            </button>
                            <button className="btn-secondary">
                                Jadi Relawan
                                <ArrowRight size={18} />
                            </button>
                        </div>

                        <div className="contact-info-grid">
                            <div className="contact-info-card">
                                <div className="contact-icon">
                                    <MapPin size={22} />
                                </div>
                                <h4>Alamat</h4>
                                <p>
                                    Jl. Pelabuhan II No.583, Kel. Cipanengah,
                                    Kec. Lembursitu, Kota Sukabumi, Jawa Barat 43168
                                </p>
                            </div>

                            <div className="contact-info-card">
                                <div className="contact-icon">
                                    <Phone size={22} />
                                </div>
                                <h4>Telepon</h4>
                                <p>+62 812-XXXX-XXXX</p>
                            </div>

                            <div className="contact-info-card">
                                <div className="contact-icon">
                                    <Mail size={22} />
                                </div>
                                <h4>Email</h4>
                                <p>info@salingbantu.org</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
