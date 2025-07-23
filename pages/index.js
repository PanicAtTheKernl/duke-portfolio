
import React from 'react';

export default function MaintenancePage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      fontFamily: 'Inter, Arial, sans-serif',
      color: '#b91c1c',
      margin: 0,
      padding: 0
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(185,28,28,0.08)',
        border: '2px solid #b91c1c',
        padding: '48px 32px',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center'
      }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ marginBottom: '16px' }}>
          <circle cx="12" cy="12" r="10" fill="#fee2e2" />
          <path d="M8 15h8M9 9h6M12 12v6" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '12px', color: '#b91c1c', letterSpacing: '1px' }}>
          codedbyduke.co.uk
        </h1>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '24px', color: '#b91c1c' }}>
          I'll be back soon!
        </h2>
        <p style={{ fontSize: '1rem', marginBottom: '24px', color: '#7f1d1d' }}>
          My portfolio is currently undergoing scheduled maintenance.<br />
          <span style={{ color: '#b91c1c', fontWeight: 600 }}>Estimated time remaining: &lt;1 week.</span><br />
          I appreciate your patience and apologize for any inconvenience.<br />
          Please check back soon!
        </p>
        <div style={{ fontSize: '0.95rem', color: '#7f1d1d', marginBottom: '8px' }}>
          For urgent inquiries, contact me at:
        </div>
        <a href="mailto:contact@codedbyduke.co.uk" style={{
          color: '#b91c1c',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          borderBottom: '1px dotted #b91c1c'
        }}>
          contact@codedbyduke.co.uk
        </a>
        <div style={{ marginTop: '32px', fontSize: '0.85rem', color: '#b91c1c' }}>
          &copy; {new Date().getFullYear()} codedbyduke.co.uk
        </div>
      </div>
    </div>
  );
}
