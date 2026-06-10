import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/id";

moment.locale("id");

const DownloadSection = () => {
  const [materi, setMateri] = useState(null);
  const [allMateri, setAllMateri] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMateri();
  }, []);

  const fetchMateri = async () => {
    try {
      const res = await axios.get(
        "https://api.gppkcbn.org/cbn/v1/artikel/bahanKKA"
      );

      const data = res.data.data || [];

      if (data.length > 0) {
        const sortedData = data.sort(
          (a, b) =>
            new Date(b.waktuPembuatan) -
            new Date(a.waktuPembuatan)
        );
        
        setMateri(sortedData[0]);
        setAllMateri(sortedData.slice(1));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const featuredMateri = materi;

  const archiveMateri = allMateri;
  if (loading) {
    return (
      <section className="py-20 text-center">
        <p>Memuat materi KKA...</p>
      </section>
    );
  }
  return (
    <section style={{ padding: '0 1rem', fontFamily: "Georgia,'Times New Roman',serif" }}>
      <style>{`
        @media (max-width: 640px) {
          .dl-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
            <div style={{ width: '20px', height: '1px', background: '#c9a84c' }} />
            <span style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a84c' }}>
              Sumber Daya
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 700, margin: 0, color: '#f0ece3', lineHeight: 1.1 }}>
            Materi <span style={{ color: 'rgba(240,236,227,0.35)' }}>KKA</span>
          </h2>
        </div>

        <div style={{ background: '#0f1923', borderRadius: '2rem', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.15)' }}>
          <div style={{ height: '3px', background: 'linear-gradient(90deg,transparent,#c9a84c,#e8c96d,#c9a84c,transparent)' }} />

          <div className="dl-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
            {/* LEFT: Featured */}
            <div style={{ padding: 'clamp(2rem,5vw,3.5rem)', borderRight: '1px solid rgba(201,168,76,0.1)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '2rem' }}>
                <div style={{ width: '20px', height: '1px', background: '#c9a84c' }} />
                <span style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', color: '#c9a84c', textTransform: 'uppercase' }}>Materi Terbaru</span>
              </div>

              <div style={{ fontSize: '80px', lineHeight: 1, color: '#c9a84c', opacity: 0.1, marginBottom: '-1.25rem' }}>"</div>
              <h3 style={{ fontSize: 'clamp(1.3rem,2.5vw,2rem)', fontWeight: 700, lineHeight: 1.2, color: '#f0ece3', margin: '0 0 1rem', letterSpacing: '-0.01em' }}>
                {featuredMateri?.judulMateri}
              </h3>
              <p style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: '13px', lineHeight: 1.8, color: 'rgba(240,236,227,0.45)', margin: '0 0 0.5rem' }}>
              Materi Komunitas Kelompok Akrab (KKA) yang dapat diunduh dan dipelajari bersama untuk pertumbuhan iman dan kehidupan rohani.
              </p>
              <p style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: '11px', letterSpacing: '0.05em', color: '#c9a84c', opacity: 0.65, margin: '0 0 2rem' }}>
                {moment(featuredMateri?.waktuPembuatan).format('DD MMMM YYYY')}
              </p>

              <a
  href={featuredMateri?.url}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "0.875rem 1.75rem",
    background: "#c9a84c",
    borderRadius: "100px"
  }}
>                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f1923" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <span style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0f1923' }}>Download Materi</span>
              </a>
            </div>

            {/* RIGHT: Archive */}
            <div style={{ padding: 'clamp(2rem,5vw,3.5rem)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>
                  </svg>
                  <span style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c9a84c' }}>Arsip Materi</span>
                </div>
                <span style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: '11px', color: 'rgba(240,236,227,0.3)' }}>{demoAll.length} dokumen</span>
              </div>
              <div style={{ height: '1px', background: 'rgba(201,168,76,0.2)', marginBottom: '0.5rem' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {archiveMateri.map((item, idx) => (
                                  <div key={idx}>
<a
  href={item.url}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    textDecoration: "none",
    display: "block"
  }}
>                      <div
                        style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '0.75rem 0.875rem', borderRadius: '0.625rem', cursor: 'pointer', transition: 'background 0.2s' }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(201,168,76,0.06)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                      >
                        <span style={{ fontFamily: 'Georgia,serif', fontSize: '10px', color: '#c9a84c', opacity: 0.5, minWidth: '18px', textAlign: 'right' }}>{String(idx + 1).padStart(2, '0')}</span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ fontFamily: 'Georgia,serif', fontSize: '12px', fontWeight: 700, color: 'rgba(240,236,227,0.85)', margin: '0 0 1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.judulMateri}</p>
                          <p style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: '10px', color: 'rgba(240,236,227,0.28)', margin: 0 }}>{moment(item.waktuPembuatan).format('MMMM YYYY')}</p>
                        </div>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                      </div>
                    </a>
                    {idx < demoAll.length - 1 && <div style={{ height: '1px', background: 'rgba(255,255,255,0.04)', margin: '0 0.875rem' }} />}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '1.5rem', padding: '0.875rem 1rem', background: 'rgba(201,168,76,0.06)', borderRadius: '0.875rem', border: '1px solid rgba(201,168,76,0.15)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.65, flexShrink: 0, marginTop: '1px' }}>
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <p style={{ fontFamily: "'Helvetica Neue',Arial,sans-serif", fontSize: '11px', color: 'rgba(201,168,76,0.55)', margin: 0, lineHeight: 1.6 }}>
                  Materi baru diterbitkan setiap minggu. Hubungi leader KKA Anda untuk akses arsip lengkap.
                </p>
              </div>
            </div>
          </div>

          <div style={{ height: '3px', background: 'linear-gradient(90deg,transparent,#c9a84c,#e8c96d,#c9a84c,transparent)' }} />
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;