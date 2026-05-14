import React, { useState, useEffect } from 'react';

const KomselItem = ({ komsel, index }) => {
  const handleContactLeader = () => {
    const phoneNumber = komsel.contact.startsWith('0')
      ? `62${komsel.contact.substring(1)}`
      : komsel.contact;
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div
      style={{
        background: '#0f1923',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        border: '1px solid rgba(201,168,76,0.15)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.3s, transform 0.3s',
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '180px', overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={komsel.image}
          alt={komsel.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(15,25,35,0.85) 0%, rgba(15,25,35,0.1) 60%)',
        }} />
        {/* Category pill */}
        <div style={{
          position: 'absolute', top: '0.875rem', right: '0.875rem',
          padding: '4px 10px',
          background: 'rgba(15,25,35,0.75)',
          border: '1px solid rgba(201,168,76,0.3)',
          borderRadius: '100px',
          backdropFilter: 'blur(8px)',
        }}>
          <span style={{
            fontSize: '9px', fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: '#c9a84c',
          }}>
            {komsel.category}
          </span>
        </div>
        {/* Index number */}
        <div style={{
          position: 'absolute', bottom: '0.875rem', left: '0.875rem',
        }}>
          <span style={{
            fontFamily: 'Georgia, serif',
            fontSize: '11px', color: 'rgba(201,168,76,0.5)',
            letterSpacing: '0.05em',
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 style={{
          fontFamily: 'Georgia, serif',
          fontSize: '1rem', fontWeight: 700,
          color: '#f0ece3', margin: 0,
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>
          {komsel.name}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
          {[
            { icon: '📅', label: komsel.day },
            { icon: '🕐', label: `${komsel.time} WIB` },
            { icon: '👤', label: komsel.leader, bold: true },
            { icon: '📍', label: komsel.area },
          ].map(({ icon, label, bold }, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', opacity: 0.6, flexShrink: 0 }}>{icon}</span>
              <span style={{
                fontSize: '12px',
                color: bold ? 'rgba(240,236,227,0.85)' : 'rgba(240,236,227,0.45)',
                fontWeight: bold ? 600 : 400,
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={handleContactLeader}
          style={{
            marginTop: '0.5rem',
            width: '100%',
            padding: '0.625rem',
            background: 'rgba(201,168,76,0.1)',
            border: '1px solid rgba(201,168,76,0.3)',
            borderRadius: '0.75rem',
            color: '#c9a84c',
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'background 0.2s, border-color 0.2s',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(201,168,76,0.2)';
            e.currentTarget.style.borderColor = 'rgba(201,168,76,0.55)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(201,168,76,0.1)';
            e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          Hubungi Leader
        </button>
      </div>
    </div>
  );
};

const KomselSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [komselData, setKomselData] = useState([]);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.gppkcbn.org/cbn/v1/kka/getAll');
        const result = await response.json();
        if (result.code === 200) setKomselData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const filteredData = komselData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const displayedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section style={{ padding: '0 1rem', fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
            <div style={{ width: '20px', height: '1px', background: '#c9a84c' }} />
            <span style={{
              fontSize: '10px', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#c9a84c',
            }}>
              Temukan KKA Anda
            </span>
          </div>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700, margin: 0,
            color: '#f0ece3', lineHeight: 1.1,
          }}>
            Kelompok Kecil di Sekitar Anda
          </h2>
        </div>

        {/* Search bar */}
        <div style={{ position: 'relative', marginBottom: '2.5rem', maxWidth: '480px' }}>
          <svg
            style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Cari area, kalangan, atau nama KKA..."
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            style={{
              width: '100%',
              padding: '0.75rem 1rem 0.75rem 2.75rem',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '100px',
              color: '#f0ece3',
              fontSize: '13px',
              outline: 'none',
              boxSizing: 'border-box',
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.5)'; }}
            onBlur={(e) => { e.target.style.borderColor = 'rgba(201,168,76,0.2)'; }}
          />
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '1.25rem',
        }}>
          {displayedData.map((komsel, i) => (
            <KomselItem key={komsel.id} komsel={komsel} index={(currentPage - 1) * itemsPerPage + i} />
          ))}
          {displayedData.length === 0 && (
            <div style={{
              gridColumn: '1 / -1',
              textAlign: 'center', padding: '4rem 1rem',
              color: 'rgba(240,236,227,0.3)',
              fontFamily: 'Georgia, serif',
              fontSize: '1rem',
            }}>
              Tidak ada KKA yang ditemukan
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{
            display: 'flex', justifyContent: 'center',
            alignItems: 'center', gap: '1.5rem',
            marginTop: '3rem',
          }}>
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              style={{
                padding: '0.5rem 1.25rem',
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.25)',
                borderRadius: '100px',
                color: currentPage === 1 ? 'rgba(201,168,76,0.3)' : '#c9a84c',
                fontSize: '12px', fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
              }}
            >
              ← Prev
            </button>
            <span style={{
              fontFamily: 'Georgia, serif',
              fontSize: '13px', color: 'rgba(240,236,227,0.4)',
            }}>
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              style={{
                padding: '0.5rem 1.25rem',
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.25)',
                borderRadius: '100px',
                color: currentPage === totalPages ? 'rgba(201,168,76,0.3)' : '#c9a84c',
                fontSize: '12px', fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
              }}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default KomselSection;