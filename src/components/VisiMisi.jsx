import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Eye, Target } from 'lucide-react';

export default function VisiMisi() {
    const [ref, visible] = useScrollAnimation();

    const misiItems = [
        'Mendorong kolaborasi antara individu, komunitas, dan lembaga untuk saling membantu satu sama lain.',
        'Memberikan sumber daya dan pendampingan untuk memperkuat kemampuan komunitas.',
        'Menyediakan bantuan berkesinambungan untuk memenuhi kebutuhan masyarakat terpinggirkan.',
        'Mengedukasi masyarakat tentang pentingnya saling berbagi dan isu-isu sosial.',
        'Mendorong pengembangan ide-ide inovatif dalam membantu orang yang membutuhkan.',
    ];

    return (
        <section className="visi-misi" id="visi-misi">
            <div className="bg-glow bg-glow-1" />
            <div className="bg-glow bg-glow-2" />

            <div className="container">
                <div className="visi-misi-header">
                    <div className="section-label">Visi & Misi</div>
                    <h2 className="section-title">
                        Arah dan <span>Tujuan</span> Kami
                    </h2>
                    <p className="section-subtitle">
                        Panduan utama dalam setiap langkah dan program yang kami jalankan
                    </p>
                </div>

                <div className={`visi-misi-grid animate-on-scroll ${visible ? 'visible' : ''}`} ref={ref}>
                    <div className="visi-card">
                        <div className="vm-card-icon">
                            <Eye size={26} />
                        </div>
                        <h3 className="vm-card-title">Visi</h3>
                        <p className="vm-card-text">
                            Menjadi yayasan yang menjadi model kolaborasi sosial terdepan di Indonesia,
                            yang mampu menginspirasi dan memfasilitasi saling bantu antar sesama untuk
                            menciptakan masyarakat yang lebih sejahtera, berdaya, dan berkeadilan.
                        </p>
                    </div>

                    <div className="misi-card">
                        <div className="vm-card-icon">
                            <Target size={26} />
                        </div>
                        <h3 className="vm-card-title">Misi</h3>
                        <ul className="misi-list">
                            {misiItems.map((item, i) => (
                                <li key={i}>
                                    <span className="misi-number">{i + 1}</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
