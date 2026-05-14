import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchKesaksianData = async () => {
  const response = await axios.get(
    'https://api.gppkcbn.org/cbn/v1/artikel/kesaksian/getAllData'
  );
  return response.data.data;
};

const Kesaksian = () => {
  const { data: kesaksianData = [], isLoading, error } = useQuery({
    queryKey: ['kesaksianData'],
    queryFn: fetchKesaksianData,
  });

  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  const goTo = (idx) => {
    if (idx === active || animating || !kesaksianData.length) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 320);
  };

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % kesaksianData.length);
        setAnimating(false);
      }, 320);
    }, 5500);
  };

  useEffect(() => {
    if (kesaksianData.length > 1) startTimer();
    return () => clearInterval(timerRef.current);
  }, [kesaksianData.length]);

  if (error || (!isLoading && kesaksianData.length === 0)) return null;

  const testimony = kesaksianData[active] || {};

  return (
    <section
      style={{
        padding: '0 1rem',
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
            <div style={{ width: '20px', height: '1px', background: '#c9a84c' }} />
            <span style={{
              fontSize: '10px', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#c9a84c',
            }}>
              Living Testimonies
            </span>
          </div>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700, margin: 0,
            color: '#f0ece3', lineHeight: 1.1,
          }}>
            Kesaksian <span style={{ color: 'rgba(240,236,227,0.35)' }}>Jemaat</span>
          </h2>
        </div>

        {/* Main card */}
        <div style={{
          background: '#0f1923',
          borderRadius: '2rem',
          overflow: 'hidden',
          border: '1px solid rgba(201,168,76,0.15)',
          position: 'relative',
        }}>
          {/* Gold top line */}
          <div style={{
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #c9a84c, #e8c96d, #c9a84c, transparent)',
          }} />

          {isLoading ? (
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              height: '360px', color: 'rgba(201,168,76,0.4)',
              fontFamily: 'Georgia, serif', fontSize: '14px',
            }}>
              Memuat kesaksian...
            </div>
          ) : (
            /* Responsive layout: column on mobile, row on desktop */
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'clamp(220px, 35%, 320px) 1fr',
            }}>
              {/* Left: Image */}
              <div style={{ position: 'relative', minHeight: '400px', overflow: 'hidden' }}>
                <img
                  src={testimony.url}
                  alt={testimony.nama}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', display: 'block',
                    opacity: animating ? 0 : 1,
                    transform: animating ? 'scale(1.04)' : 'scale(1)',
                    transition: 'opacity 0.35s ease, transform 0.45s ease',
                    position: 'absolute', inset: 0,
                  }}
                  onError={(e) => { e.target.style.opacity = '0'; }}
                />
                {/* Vignette */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to right, rgba(15,25,35,0) 50%, rgba(15,25,35,0.7) 100%)',
                  pointerEvents: 'none',
                }} />
              </div>

              {/* Right: Content */}
              <div style={{
                padding: 'clamp(2rem, 5vw, 3.5rem)',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                gap: '2rem',
              }}>
                <div style={{
                  opacity: animating ? 0 : 1,
                  transform: animating ? 'translateY(10px)' : 'translateY(0)',
                  transition: 'opacity 0.32s ease, transform 0.32s ease',
                }}>
                  {/* Big quote mark */}
                  <div style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '100px', lineHeight: 1,
                    color: '#c9a84c', opacity: 0.1,
                    marginBottom: '-1.5rem',
                    userSelect: 'none',
                  }}>
                    "
                  </div>

                  {/* Name + divider */}
                  <h3 style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                    fontWeight: 700, color: '#f0ece3',
                    margin: '0 0 0.5rem',
                  }}>
                    {testimony.nama}
                  </h3>
                  <div style={{ width: '2rem', height: '2px', background: '#c9a84c', marginBottom: '1.5rem' }} />

                  {/* Highlight quote */}
                  <p style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    fontStyle: 'italic', lineHeight: 1.75,
                    color: 'rgba(240,236,227,0.65)',
                    margin: 0,
                  }}>
                    "{testimony.highlight}"
                  </p>
                </div>

                {/* Bottom: CTA + nav */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}>
                  <Link
                    to={`/kesaksian/${testimony.id}`}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      padding: '0.75rem 1.5rem',
                      background: '#c9a84c',
                      borderRadius: '100px',
                      textDecoration: 'none',
                      color: '#0f1923',
                      fontSize: '11px', fontWeight: 700,
                      letterSpacing: '0.1em', textTransform: 'uppercase',
                      transition: 'background 0.2s',
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#e8c96d'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = '#c9a84c'; }}
                  >
                    Baca Kisah Lengkap
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </Link>

                  {/* Dot nav */}
                  {kesaksianData.length > 1 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {kesaksianData.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => { clearInterval(timerRef.current); goTo(i); startTimer(); }}
                          style={{
                            width: i === active ? '24px' : '7px',
                            height: '7px',
                            borderRadius: '100px',
                            background: i === active ? '#c9a84c' : 'rgba(201,168,76,0.25)',
                            border: 'none', cursor: 'pointer', padding: 0,
                            transition: 'all 0.3s ease',
                          }}
                          aria-label={`Kesaksian ${i + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Gold bottom line */}
          <div style={{
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #c9a84c, #e8c96d, #c9a84c, transparent)',
          }} />
        </div>
      </div>
    </section>
  );
};

export default Kesaksian;