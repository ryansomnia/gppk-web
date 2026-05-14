import React from 'react';
import KomselSection from '../components/KomselSection';
import KegiatanKKA from '../components/KegiatanKKA';
import DownloadSection from '../components/DownloadSection';
import Kesaksian from '../components/Kesaksian';

function KKA() {
  return (
    <div style={{ background: '#0a1218', minHeight: '100vh' }}>
      <style>{`
        @media (max-width: 640px) {
          .hero-title { font-size: clamp(2rem, 10vw, 3rem) !important; }
          .hero-desc { font-size: 14px !important; }
          .hero-stats { flex-direction: column !important; gap: 1.5rem !important; }
          .hero-stat-divider { display: none !important; }
        }
      `}</style>

      {/* ── HERO ──────────────────────────────────────────── */}
      <div style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(4rem,10vw,7rem) 1.5rem clamp(3rem,8vw,5rem)' }}>

        {/* Background grid lines */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.04,
          backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,1) 60px,rgba(255,255,255,1) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(255,255,255,1) 60px,rgba(255,255,255,1) 61px)',
        }} />

        {/* Radial gold glow */}
        <div style={{
          position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)',
          width: '600px', height: '400px', pointerEvents: 'none',
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)',
        }} />

        {/* Gold top line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,transparent,#c9a84c,#e8c96d,#c9a84c,transparent)' }} />

        <div style={{ maxWidth: '72rem', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>

          {/* Eyebrow */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '2rem', padding: '6px 16px', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '100px', background: 'rgba(201,168,76,0.06)' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c9a84c', opacity: 0.8 }} />
            <span style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c9a84c' }}>
              GPPK CBN Church
            </span>
          </div>

          {/* Main title */}
          <h1
            className="hero-title"
            style={{
              fontFamily: "Georgia,'Times New Roman',serif",
              fontSize: 'clamp(2.5rem,7vw,5rem)',
              fontWeight: 700, lineHeight: 1.05,
              color: '#f0ece3', margin: '0 0 1rem',
              letterSpacing: '-0.02em',
            }}
          >
            Keluarga Kerajaan<br />
            <span style={{ color: '#c9a84c' }}>Allah</span>
          </h1>

          {/* Divider line */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '1.5rem 0' }}>
            <div style={{ height: '1px', width: '60px', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4))' }} />
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c9a84c', opacity: 0.5 }} />
            <div style={{ height: '1px', width: '60px', background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.4))' }} />
          </div>

          {/* Description */}
          <p
            className="hero-desc"
            style={{
              fontFamily: "'Helvetica Neue',Arial,sans-serif",
              fontSize: '15px', lineHeight: 1.85,
              color: 'rgba(240,236,227,0.5)',
              maxWidth: '560px', margin: '0 auto 3.5rem',
            }}
          >
            Komunitas terkecil CBN Church untuk bertumbuh dalam firman, melatih pelayanan,
            dan membangun hubungan persaudaraan yang sejati.
          </p>

          {/* Stats */}
          <div className="hero-stats" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem' }}>
            {[
              { num: '50+', label: 'Kelompok Aktif' },
              { num: '500+', label: 'Anggota Jemaat' },
              { num: '20+', label: 'Wilayah Jakarta' },
            ].map(({ num, label }, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <div className="hero-stat-divider" style={{ width: '1px', height: '32px', background: 'rgba(201,168,76,0.2)' }} />
                )}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: "Georgia,serif", fontSize: 'clamp(1.5rem,4vw,2.25rem)', fontWeight: 700, color: '#c9a84c', lineHeight: 1 }}>{num}</div>
                  <div style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,236,227,0.35)', marginTop: '4px' }}>{label}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(to bottom, transparent, #0a1218)', pointerEvents: 'none' }} />
      </div>

      {/* ── SECTIONS ─────────────────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem,8vw,5rem)', paddingBottom: 'clamp(3rem,8vw,5rem)' }}>
        <KomselSection />
        <KegiatanKKA />
        <DownloadSection />
        <Kesaksian />
      </div>

      {/* ── FOOTER strip ──────────────────────────────────── */}
      <div style={{ borderTop: '1px solid rgba(201,168,76,0.12)', padding: '2rem 1.5rem', textAlign: 'center' }}>
        <div style={{ height: '2px', background: 'linear-gradient(90deg,transparent,#c9a84c,#e8c96d,#c9a84c,transparent)', marginBottom: '1.5rem' }} />
        <p style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.35)', margin: 0 }}>
          © {new Date().getFullYear()} GPPK CBN Church · Keluarga Kerajaan Allah
        </p>
      </div>
    </div>
  );
}

export default KKA;