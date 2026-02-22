import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useEffect, useState, useRef } from 'react';

const stats = [
    { number: 500, suffix: '+', label: 'Penerima Manfaat' },
    { number: 15, suffix: '+', label: 'Program Aktif' },
    { number: 50, suffix: '+', label: 'Relawan Aktif' },
    { number: 10, suffix: '+', label: 'Mitra Komunitas' },
];

function AnimatedNumber({ target, suffix, visible }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!visible) return;
        let start = 0;
        const duration = 2000;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [visible, target]);

    return <span>{visible ? count : 0}{suffix}</span>;
}

export default function Stats() {
    const [ref, visible] = useScrollAnimation(0.3);

    return (
        <section className="stats">
            <div className="stats-pattern" />
            <div className="container">
                <div className="stats-grid" ref={ref}>
                    {stats.map((stat, i) => (
                        <div className="stat-card" key={i}>
                            <div className="stat-card-number">
                                <AnimatedNumber target={stat.number} suffix={stat.suffix} visible={visible} />
                            </div>
                            <div className="stat-card-label">{stat.label}</div>
                            <div className="stat-card-divider" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
