import { useScrollAnimation } from '../hooks/useScrollAnimation';

const orgData = {
    pembina: [
        { name: 'Ketua Pembina', desc: 'Kewenangan Tertinggi Yayasan' },
    ],
    pengurus: [
        { name: 'Ketua', desc: 'Memimpin Kepengurusan' },
        { name: 'Sekretaris', desc: 'Administrasi Yayasan' },
        { name: 'Bendahara', desc: 'Keuangan Yayasan' },
    ],
    pengawas: [
        { name: 'Ketua Pengawas', desc: 'Pengawasan & Nasihat' },
    ],
};

export default function Structure() {
    const [ref, visible] = useScrollAnimation();

    return (
        <section className="structure" id="struktur">
            <div className="container">
                <div className="structure-header">
                    <div className="section-label">Struktur Organisasi</div>
                    <h2 className="section-title">
                        Organ <span>Yayasan</span>
                    </h2>
                    <p className="section-subtitle">
                        Yayasan dikelola secara profesional dengan tiga organ utama sesuai
                        Anggaran Dasar: Pembina, Pengurus, dan Pengawas
                    </p>
                </div>

                <div className={`org-chart animate-on-scroll ${visible ? 'visible' : ''}`} ref={ref}>
                    {/* Pembina - Top Level */}
                    <div className="org-level">
                        {orgData.pembina.map((item, i) => (
                            <div className="org-card primary" key={i}>
                                <div className="org-card-role">Pembina</div>
                                <div className="org-card-name">{item.name}</div>
                                <div className="org-card-desc">{item.desc}</div>
                            </div>
                        ))}
                    </div>

                    {/* Connector */}
                    <div className="org-connector">
                        <div className="org-connector-line" />
                    </div>

                    {/* Pengurus & Pengawas - Second Level */}
                    <div className="org-level">
                        {orgData.pengurus.map((item, i) => (
                            <div className="org-card" key={`pengurus-${i}`}>
                                <div className="org-card-role">Pengurus</div>
                                <div className="org-card-name">{item.name}</div>
                                <div className="org-card-desc">{item.desc}</div>
                            </div>
                        ))}
                    </div>

                    {/* Connector */}
                    <div className="org-connector">
                        <div className="org-connector-line" />
                    </div>

                    {/* Pengawas */}
                    <div className="org-level">
                        {orgData.pengawas.map((item, i) => (
                            <div className="org-card" key={`pengawas-${i}`}>
                                <div className="org-card-role">Pengawas</div>
                                <div className="org-card-name">{item.name}</div>
                                <div className="org-card-desc">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
