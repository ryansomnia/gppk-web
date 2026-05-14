import React, { useState, useEffect, useRef } from 'react';

const kegiatan = [
  {
    title: 'Pujian & Penyembahan',
    tag: 'Worship',
    image: '/images/IMG_2040.JPG',
    description: 'Membangun keintiman dengan Tuhan melalui pujian yang tulus dan penyembahan yang mewahyukan kemuliaan-Nya.',
  },
  {
    title: 'Kesaksian Iman',
    tag: 'Testimony',
    image: '/images/IMG_5078.JPG',
    description: 'Saling menguatkan melalui cerita nyata tentang kebaikan Tuhan di tengah setiap pergumulan hidup.',
  },
  {
    title: 'Saling Mendoakan',
    tag: 'Prayer',
    image: '/images/IMG_2081.JPG',
    description: 'Berdiri bersama dalam doa, menopang satu sama lain sebagai satu tubuh Kristus yang utuh.',
  },
  {
    title: 'Keluarga Kerajaan',
    tag: 'Community',
    image: '/images/IMG_2055.JPG',
    description: 'Temukan rumah kedua Anda di sini. Pintu kami selalu terbuka untuk Anda bertumbuh bersama.',
  },
];

const KegiatanKKA = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef(null);

  const goTo = (idx) => {
    if (idx === active || animating) return;
    setAnimating(true);
    setTimeout(() => { setActive(idx); setAnimating(false); }, 300);
  };

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setAnimating(true);
      setTimeout(() => { setActive((p) => (p + 1) % kegiatan.length); setAnimating(false); }, 300);
    }, 5000);
  };

  useEffect(() => { startTimer(); return () => clearInterval(intervalRef.current); }, []);

  const item = kegiatan[active];

  return (
    <section style={{ padding: '0 1rem', fontFamily: "Georgia,'Times New Roman',serif" }}>
      <style>{`
        @media (max-width: 640px) {
          .kegiatan-grid { grid-template-columns: 1fr !important; }
          .kegiatan-img-wrap { min-height: 260px !important; }
        }
      `}</style>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
            <div style={{ width: '20px', height: '1px', background: '#c9a84c' }} />
            <span style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c' }}>
              Kehidupan KKA
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 700, margin: 0, color: '#f0ece3', lineHeight: 1.1 }}>
            Momen di <span style={{ color: 'rgba(240,236,227,0.35)' }}>KKA</span>
          </h2>
        </div>

        <div style={{ background: '#0f1923', borderRadius: '2rem', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg,transparent,#c9a84c,#e8c96d,#c9a84c,transparent)' }} />

          <div className="kegiatan-grid" style={{ display: 'grid', gridTemplateColumns: 'clamp(200px,40%,380px) 1fr' }}>
            {/* Image */}
            <div className="kegiatan-img-wrap" style={{ position: 'relative', minHeight: '420px', overflow: 'hidden' }}>
              <img
                src={item.image} alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0, opacity: animating ? 0 : 1, transform: animating ? 'scale(1.05)' : 'scale(1)', transition: 'opacity 0.35s ease, transform 0.5s ease' }}
                onError={(e) => { e.target.style.opacity = '0'; }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right,rgba(15,25,35,0) 50%,rgba(15,25,35,0.75) 100%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', display: 'flex', alignItems: 'center', gap: '6px', padding: '5px 12px', background: 'rgba(15,25,35,0.75)', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '100px' }}>
                <span style={{ fontFamily: 'Georgia,serif', fontSize: '11px', fontWeight: 700, color: '#c9a84c', letterSpacing: '0.05em' }}>{String(active + 1).padStart(2, '0')}</span>
                <span style={{ width: '1px', height: '10px', background: 'rgba(201,168,76,0.3)', display: 'inline-block' }} />
                <span style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: '11px', color: 'rgba(240,236,227,0.35)', letterSpacing: '0.05em' }}>{String(kegiatan.length).padStart(2, '0')}</span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: 'clamp(2rem,5vw,3.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '2rem' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '2rem' }}>
                  <div style={{ width: '20px', height: '1px', background: '#c9a84c' }} />
                  <span style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', color: '#c9a84c', textTransform: 'uppercase' }}>Momen di KKA</span>
                </div>
                <div style={{ opacity: animating ? 0 : 1, transform: animating ? 'translateY(10px)' : 'translateY(0)', transition: 'opacity 0.32s ease, transform 0.32s ease' }}>
                  <span style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', color: '#c9a84c', textTransform: 'uppercase', display: 'block', marginBottom: '0.875rem' }}>— {item.tag}</span>
                  <div style={{ fontSize: '80px', lineHeight: 1, color: '#c9a84c', opacity: 0.1, marginBottom: '-1.25rem' }}>"</div>
                  <h3 style={{ fontSize: 'clamp(1.4rem,2.5vw,2.1rem)', fontWeight: 700, lineHeight: 1.15, color: '#f0ece3', margin: '0 0 1.25rem', letterSpacing: '-0.01em' }}>{item.title}</h3>
                  <p style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: '14px', lineHeight: 1.85, color: 'rgba(240,236,227,0.48)', margin: 0 }}>{item.description}</p>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    {kegiatan.map((_, i) => (
                      <button key={i} onClick={() => { clearInterval(intervalRef.current); goTo(i); startTimer(); }}
                        style={{ width: i === active ? '26px' : '8px', height: '8px', borderRadius: '100px', background: i === active ? '#c9a84c' : 'rgba(201,168,76,0.22)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s ease' }}
                        aria-label={`Lihat ${kegiatan[i].title}`}
                      />
                    ))}
                  </div>
                  <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
                    {['←', '→'].map((arrow, ai) => (
                      <button key={arrow}
                        onClick={() => { clearInterval(intervalRef.current); goTo(ai === 0 ? (active - 1 + kegiatan.length) % kegiatan.length : (active + 1) % kegiatan.length); startTimer(); }}
                        style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)', color: '#c9a84c', fontSize: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s', fontFamily: 'inherit' }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(201,168,76,0.22)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; }}
                      >{arrow}</button>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1.5rem' }}>
                  <div style={{ width: '20px', height: '1px', background: 'rgba(201,168,76,0.28)' }} />
                  <span style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(201,168,76,0.38)', textTransform: 'uppercase' }}>Keluarga GPPK CBN</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ height: '3px', background: 'linear-gradient(90deg,transparent,#c9a84c,#e8c96d,#c9a84c,transparent)' }} />
        </div>
      </div>
    </section>
  );
};

export default KegiatanKKA;