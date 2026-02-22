import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
    Package,
    GraduationCap,
    Users,
    Megaphone,
    Smartphone,
    ArrowRight,
} from 'lucide-react';

const programs = [
    {
        icon: Package,
        tag: 'Bantuan',
        title: 'Program Bantuan Langsung',
        description:
            'Memberikan bantuan pangan, pakaian, perumahan, dan kebutuhan dasar lainnya kepada kelompok rentan yang membutuhkan.',
        image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80',
    },
    {
        icon: GraduationCap,
        tag: 'Pendidikan',
        title: 'Pendidikan & Pelatihan',
        description:
            'Menyelenggarakan program pendidikan, pelatihan keterampilan, dan wirausaha untuk meningkatkan keberdayaan masyarakat.',
        image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80',
    },
    {
        icon: Users,
        tag: 'Kolaborasi',
        title: 'Kolaborasi Komunitas',
        description:
            'Mengadakan acara, sosialisasi, dan kegiatan kolaboratif untuk menggalang dukungan dan kerjasama antar komunitas.',
        image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80',
    },
    {
        icon: Megaphone,
        tag: 'Kesadaran',
        title: 'Kesadaran Sosial',
        description:
            'Seminar dan sosialisasi untuk meningkatkan kesadaran akan isu-isu sosial serta mendorong perubahan positif.',
        image: 'https://images.unsplash.com/photo-1475483768296-6163e08872a1?w=600&q=80',
    },
    {
        icon: Smartphone,
        tag: 'Teknologi',
        title: 'Teknologi Sosial',
        description:
            'Mendukung pengembangan teknologi atau platform yang memfasilitasi saling bantu dan keterlibatan aktif dalam kegiatan amal.',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
    },
];

export default function Programs() {
    const [ref, visible] = useScrollAnimation();

    return (
        <section className="programs" id="program">
            <div className="container">
                <div className="programs-header">
                    <div className="section-label">Program Kami</div>
                    <h2 className="section-title">
                        Kegiatan dan <span>Usaha</span> Yayasan
                    </h2>
                    <p className="section-subtitle">
                        Lima program utama yang kami jalankan untuk mencapai tujuan pemberdayaan
                        masyarakat dan inovasi sosial
                    </p>
                </div>

                <div className={`programs-grid animate-on-scroll ${visible ? 'visible' : ''}`} ref={ref}>
                    {programs.map((program, i) => {
                        const Icon = program.icon;
                        return (
                            <div className="program-card" key={i}>
                                <div className="program-card-image">
                                    <img src={program.image} alt={program.title} loading="lazy" />
                                    <span className="program-tag">{program.tag}</span>
                                </div>
                                <div className="program-card-body">
                                    <div className="program-card-icon">
                                        <Icon size={24} />
                                    </div>
                                    <h3>{program.title}</h3>
                                    <p>{program.description}</p>
                                    <span className="program-card-link">
                                        Selengkapnya <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
