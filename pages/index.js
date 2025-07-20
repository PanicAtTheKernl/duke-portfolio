import React from 'react';

export default function RealisticSeizedNotice() {
  return (
    <div style={{
      fontFamily: "'Times New Roman', Times, serif",
      backgroundColor: '#f8f8f8',
      color: '#000',
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      backgroundImage: `
        repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          rgba(255,255,0,0.03) 10px,
          rgba(255,255,0,0.03) 20px
        )
      `,
      userSelect: 'none'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 20px',
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        boxShadow: '0 0 30px rgba(0,0,0,0.1)',
        position: 'relative'
      }}>
        
        {/* Header with FBI and DOJ seals */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
          borderBottom: '3px solid #000',
          paddingBottom: '20px'
        }}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/FBI_Seal.svg/120px-FBI_Seal.svg.png"
            alt="FBI Seal"
            style={{ width: '80px', height: '80px' }}
          />
          <div style={{
            textAlign: 'center',
            flex: 1,
            margin: '0 20px'
          }}>
            <h1 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              margin: '0',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              UNITED STATES DEPARTMENT OF JUSTICE
            </h1>
            <div style={{
              fontSize: '16px',
              fontWeight: 'normal',
              marginTop: '5px'
            }}>
              Federal Bureau of Investigation
            </div>
          </div>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Seal_of_the_United_States_Department_of_Justice.svg/120px-Seal_of_the_United_States_Department_of_Justice.svg.png"
            alt="DOJ Seal"
            style={{ width: '80px', height: '80px' }}
          />
        </div>

        {/* Main Notice */}
        <div style={{
          backgroundColor: '#cc0000',
          color: 'white',
          padding: '20px',
          textAlign: 'center',
          marginBottom: '30px',
          border: '3px solid #990000',
          boxShadow: 'inset 0 0 10px rgba(0,0,0,0.3)'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 'bold',
            margin: '0 0 10px 0',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            🚨 THIS DOMAIN HAS BEEN SEIZED 🚨
          </h2>
          <div style={{
            fontSize: '18px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            BY THE FEDERAL BUREAU OF INVESTIGATION
          </div>
        </div>

        {/* Case Information Box */}
        <div style={{
          backgroundColor: '#f0f0f0',
          border: '2px solid #000',
          padding: '20px',
          marginBottom: '30px',
          fontFamily: "'Courier New', monospace"
        }}>
          <h3 style={{
            margin: '0 0 15px 0',
            fontSize: '16px',
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}>
            CASE INFORMATION
          </h3>
          <div style={{ lineHeight: '1.6' }}>
            <div><strong>Case Number:</strong> FBI-2025-CY-783214-WDPA</div>
            <div><strong>Operation:</strong> DIGITAL STRIKE</div>
            <div><strong>Date of Seizure:</strong> July 20, 2025, 14:32 UTC</div>
            <div><strong>Judicial Authority:</strong> U.S. District Court, Western District of Pennsylvania</div>
            <div><strong>Warrant Number:</strong> 25-MJ-1847</div>
          </div>
        </div>

        {/* Legal Notice */}
        <div style={{
          backgroundColor: '#fff3cd',
          border: '2px solid #856404',
          borderLeft: '8px solid #ffc107',
          padding: '20px',
          marginBottom: '30px'
        }}>
          <h3 style={{
            margin: '0 0 15px 0',
            fontSize: '18px',
            color: '#856404'
          }}>
            ⚠️ LEGAL NOTICE
          </h3>
          <p style={{
            margin: '0',
            lineHeight: '1.6',
            fontSize: '14px'
          }}>
            This domain and its contents have been seized pursuant to a seizure warrant obtained by the 
            Federal Bureau of Investigation and issued pursuant to 18 U.S.C. §§ 981 and 982 by the 
            United States District Court for the Western District of Pennsylvania.
          </p>
        </div>

        {/* Main Content */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.7',
            marginBottom: '20px',
            textAlign: 'justify'
          }}>
            The domain identified in this notice was seized as part of an ongoing federal criminal 
            investigation. The seizure was executed in accordance with federal laws governing the 
            confiscation of property used in connection with criminal activity.
          </p>
          
          <p style={{
            fontSize: '16px',
            lineHeight: '1.7',
            marginBottom: '20px',
            textAlign: 'justify'
          }}>
            All digital assets, databases, user information, and related materials previously hosted 
            on this domain have been secured and preserved for evidentiary purposes. This action was 
            taken following extensive investigation by federal law enforcement agencies.
          </p>

          <div style={{
            backgroundColor: '#d4edda',
            border: '1px solid #c3e6cb',
            borderLeft: '4px solid #28a745',
            padding: '15px',
            marginBottom: '20px'
          }}>
            <strong style={{ color: '#155724' }}>FOR THE PUBLIC:</strong>
            <div style={{ marginTop: '10px', fontSize: '14px', color: '#155724' }}>
              If you believe you may be a victim of criminal activity related to this domain, 
              please contact the FBI's Internet Crime Complaint Center (IC3) at 
              <a href="https://www.ic3.gov" style={{ color: '#155724', textDecoration: 'underline' }}>
                www.ic3.gov
              </a>
            </div>
          </div>
        </div>

        {/* Warning Box */}
        <div style={{
          backgroundColor: '#f8d7da',
          color: '#721c24',
          border: '2px solid #f5c6cb',
          borderLeft: '8px solid #dc3545',
          padding: '20px',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            🚫 WARNING 🚫
          </div>
          <div style={{ fontSize: '16px', lineHeight: '1.5' }}>
            Attempting to access, modify, or interfere with seized digital assets may constitute 
            a federal crime punishable by fine and imprisonment under 18 U.S.C. § 1030 and other 
            applicable statutes.
          </div>
        </div>

        {/* Contact Information */}
        <div style={{
          backgroundColor: '#e9ecef',
          border: '1px solid #dee2e6',
          padding: '20px',
          marginBottom: '30px'
        }}>
          <h3 style={{
            margin: '0 0 15px 0',
            fontSize: '16px',
            textTransform: 'uppercase'
          }}>
            OFFICIAL CONTACT INFORMATION
          </h3>
          <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
            <div><strong>FBI Field Office:</strong> Pittsburgh Division</div>
            <div><strong>Address:</strong> 3311 E Carson St, Pittsburgh, PA 15203</div>
            <div><strong>Public Affairs:</strong> (412) 432-4000</div>
            <div><strong>Online:</strong> <a href="https://www.fbi.gov">www.fbi.gov</a></div>
          </div>
        </div>

        {/* Footer with the reveal */}
        <div style={{
          borderTop: '2px solid #000',
          paddingTop: '20px',
          textAlign: 'center',
          fontSize: '12px',
          color: '#666'
        }}>
          <div style={{ marginBottom: '20px' }}>
            <strong>DOCUMENT ID:</strong> FBI-SEIZURE-2025-07-20-14:32:15-EST
          </div>
          
          <div style={{
            backgroundColor: '#d1ecf1',
            color: '#0c5460',
            padding: '15px',
            borderRadius: '5px',
            border: '1px solid #bee5eb',
            fontSize: '14px'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>
              😄 JUST KIDDING!
            </div>
            <div>
              This site is temporarily down for maintenance. Thanks for your patience while I work on improvements!
              <br />
              <em>- Your friendly neighborhood developer</em>
            </div>
          </div>
          
          <div style={{ marginTop: '10px', fontSize: '11px' }}>
            This is a parody maintenance page. Any resemblance to actual government seizure notices is purely coincidental.
          </div>
        </div>
      </div>
    </div>
  );
}
