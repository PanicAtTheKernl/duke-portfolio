import React from 'react';

export default function UltraRealisticSeizedNotice() {
  return (
    <div style={{
      fontFamily: "'Times New Roman', Times, serif",
      backgroundColor: '#ffffff',
      color: '#000000',
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      userSelect: 'none'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0',
        backgroundColor: '#ffffff',
        minHeight: '100vh'
      }}>
        
        {/* Official Government Header */}
        <div style={{
          backgroundColor: '#000080',
          color: 'white',
          padding: '10px 0',
          textAlign: 'center',
          fontSize: '12px',
          fontWeight: 'bold',
          letterSpacing: '1px'
        }}>
          OFFICIAL UNITED STATES GOVERNMENT WEBSITE
        </div>

        <div style={{
          backgroundColor: '#f8f8f8',
          borderBottom: '4px solid #000080',
          padding: '20px 40px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/640px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
                alt="FBI Seal"
                style={{ width: '70px', height: '70px', marginRight: '20px', float: 'left' }}
              />
              <div style={{ paddingTop: '5px' }}>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#000080' }}>
                  FEDERAL BUREAU OF INVESTIGATION
                </div>
                <div style={{ fontSize: '14px', color: '#333', marginTop: '2px' }}>
                  United States Department of Justice
                </div>
                <div style={{ fontSize: '12px', color: '#666', marginTop: '2px', marginLeft: '90px' }}>
                  Cybercrime Division - Asset Forfeiture Unit
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'right', fontSize: '11px', color: '#666' }}>
              <div>Classification: OFFICIAL USE ONLY</div>
              <div>Date: 20 July 2025</div>
              <div>Time: 1432 EST</div>
            </div>
          </div>
        </div>

        <div style={{ padding: '40px' }}>
          
          {/* Main Header */}
          <div style={{
            textAlign: 'center',
            backgroundColor: '#dc3545',
            color: 'white',
            padding: '25px',
            marginBottom: '30px',
            border: '3px solid #000'
          }}>
            <div style={{
              fontSize: '32px',
              fontWeight: 'bold',
              letterSpacing: '3px',
              marginBottom: '10px'
            }}>
              DOMAIN SEIZED
            </div>
            <div style={{
              fontSize: '18px',
              letterSpacing: '2px'
            }}>
              THIS WEBSITE HAS BEEN SEIZED
            </div>
          </div>

          {/* Seizure Information */}
          <table style={{
            width: '100%',
            border: '2px solid #000',
            borderCollapse: 'collapse',
            marginBottom: '30px',
            backgroundColor: '#f8f9fa'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#000080', color: 'white' }}>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  border: '1px solid #000'
                }}>
                  SEIZURE WARRANT INFORMATION
                </th>
                <th style={{
                  padding: '12px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  border: '1px solid #000'
                }}>
                  REFERENCE NUMBER / DETAILS
                </th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '13px', fontFamily: "'Courier New', monospace" }}>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: 'bold' }}>
                  Case Number
                </td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                  CR25-0891-WDB (W.D. Pa.)
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: 'bold' }}>
                  Seizure Warrant
                </td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                  SW 25-MAG-1847
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: 'bold' }}>
                  Issuing Court
                </td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                  United States District Court, Western District of Pennsylvania
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: 'bold' }}>
                  Magistrate Judge
                </td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                  The Honorable Maureen P. Kelly
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: 'bold' }}>
                  Date of Seizure
                </td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                  July 20, 2025 at 14:32:15 Eastern Standard Time
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: 'bold' }}>
                  Lead Agency
                </td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                  FBI Pittsburgh Field Office
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ccc', fontWeight: 'bold' }}>
                  Investigation ID
                </td>
                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                  297A-PG-2758413
                </td>
              </tr>
            </tbody>
          </table>

          {/* Legal Authority */}
          <div style={{
            backgroundColor: '#fff3cd',
            border: '2px solid #ffc107',
            padding: '20px',
            marginBottom: '25px'
          }}>
            <div style={{
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '10px',
              textTransform: 'uppercase'
            }}>
              LEGAL AUTHORITY FOR SEIZURE
            </div>
            <div style={{ fontSize: '14px', lineHeight: '1.5' }}>
              This seizure was conducted pursuant to the authority granted under:
              <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                <li>18 U.S.C. § 981 (Civil forfeiture)</li>
                <li>18 U.S.C. § 982 (Criminal forfeiture)</li>
                <li>18 U.S.C. § 1030 (Fraud and related activity in connection with computers)</li>
                <li>21 U.S.C. § 853 (Criminal forfeitures)</li>
                <li>Federal Rules of Criminal Procedure, Rule 41</li>
              </ul>
            </div>
          </div>

          {/* Main Notice */}
          <div style={{
            fontSize: '15px',
            lineHeight: '1.6',
            textAlign: 'justify',
            marginBottom: '25px'
          }}>
            <p style={{ marginBottom: '15px' }}>
              <strong>NOTICE:</strong> The domain name and all associated digital assets referenced in the above 
              seizure warrant have been seized by the Federal Bureau of Investigation pursuant to a seizure 
              warrant issued by the United States District Court for the Western District of Pennsylvania.
            </p>
            
            <p style={{ marginBottom: '15px' }}>
              This action was taken as part of an ongoing federal criminal investigation. All content, 
              databases, user accounts, communications, and related digital evidence previously hosted 
              on or associated with this domain have been secured and preserved for law enforcement purposes.
            </p>
            
            <p style={{ marginBottom: '15px' }}>
              The seized assets are being held pending further legal proceedings. This seizure action 
              was coordinated with the United States Attorney's Office for the Western District of Pennsylvania 
              and conducted in accordance with applicable federal statutes and Department of Justice guidelines.
            </p>
          </div>

          {/* Warning Section */}
          <div style={{
            backgroundColor: '#f8d7da',
            border: '3px solid #dc3545',
            padding: '20px',
            marginBottom: '25px'
          }}>
            <div style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#721c24',
              marginBottom: '15px',
              textAlign: 'center'
            }}>
              FEDERAL CRIMINAL WARNING
            </div>
            <div style={{ fontSize: '14px', color: '#721c24', lineHeight: '1.5' }}>
              <strong>WARNING:</strong> Any attempt to access, tamper with, modify, or interfere with 
              this seized domain or its associated digital assets may constitute a violation of federal 
              criminal law, including but not limited to:
              <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                <li>18 U.S.C. § 1030 - Computer Fraud and Abuse Act</li>
                <li>18 U.S.C. § 1512 - Tampering with a witness, victim, or an informant</li>
                <li>18 U.S.C. § 1519 - Destruction, alteration, or falsification of records</li>
              </ul>
              <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
                Violations may result in criminal prosecution, substantial monetary penalties, and imprisonment.
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div style={{
            backgroundColor: '#e9ecef',
            border: '2px solid #6c757d',
            padding: '20px',
            marginBottom: '30px'
          }}>
            <div style={{
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '15px'
            }}>
              OFFICIAL LAW ENFORCEMENT CONTACT INFORMATION
            </div>
            <div style={{ fontSize: '13px', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '10px' }}>
                <strong>Lead Investigating Agency:</strong><br />
                Federal Bureau of Investigation<br />
                Pittsburgh Field Office<br />
                3311 East Carson Street<br />
                Pittsburgh, PA 15203-1357
              </div>
              <div style={{ marginBottom: '10px' }}>
                <strong>Case Agent Contact:</strong><br />
                FBI Pittsburgh Division<br />
                Phone: (412) 432-4000<br />
                Email: pittsburgh.fbi.gov
              </div>
              <div>
                <strong>U.S. Attorney's Office:</strong><br />
                Western District of Pennsylvania<br />
                700 Grant Street, Suite 4000<br />
                Pittsburgh, PA 15219<br />
                Phone: (412) 644-3500
              </div>
            </div>
          </div>

          {/* Victim Information */}
          <div style={{
            backgroundColor: '#d1ecf1',
            border: '2px solid #17a2b8',
            padding: '20px',
            marginBottom: '30px'
          }}>
            <div style={{
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: '#0c5460'
            }}>
              INFORMATION FOR POTENTIAL VICTIMS
            </div>
            <div style={{ fontSize: '14px', color: '#0c5460', lineHeight: '1.5' }}>
              If you believe you may have been a victim of criminal activity related to this domain, 
              you are encouraged to file a complaint with the FBI's Internet Crime Complaint Center (IC3) 
              at <a href="https://www.ic3.gov" style={{ color: '#0c5460' }}>www.ic3.gov</a> or contact 
              your local FBI field office. Victim services and support may be available through the 
              Department of Justice Office for Victims of Crime.
            </div>
          </div>

          {/* Footer */}
          <div style={{
            borderTop: '3px solid #000080',
            paddingTop: '20px',
            fontSize: '12px',
            color: '#666'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
              <div><strong>OFFICIAL GOVERNMENT DOCUMENT</strong></div>
              <div>Document Control Number: FBI-AFU-2025-0720-1432-PST</div>
              <div>Classification: LAW ENFORCEMENT SENSITIVE</div>
            </div>
            
            <div style={{
              textAlign: 'center',
              fontSize: '11px',
              fontStyle: 'italic',
              color: '#999',
              marginTop: '20px',
              paddingTop: '15px',
              borderTop: '1px solid #ccc'
            }}>
              For more information about the FBI's mission and operations, visit www.fbi.gov
            </div>

            {/* The reveal */}
            <div style={{
              backgroundColor: '#f8f9fa',
              border: '1px solid #dee2e6',
              padding: '15px',
              marginTop: '30px',
              fontSize: '12px',
              textAlign: 'center',
              color: '#6c757d'
            }}>
              <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>
                MAINTENANCE IN PROGRESS (Obviously)
              </div>
              <div>
                Alright, you got me. It's just maintenance. The FBI didn't actually seize my website 
                where I post pictures of my lunch and complain about JavaScript frameworks. 
                Though honestly, if they saw my commit history they might consider it.
              </div>
              <div style={{ marginTop: '10px' }}>
                Currently debugging why everything's fucked and questioning my life choices. 
                Normal service will resume once I remember what the hell I was doing before I broke everything.
              </div>
              <div style={{ marginTop: '10px', fontSize: '11px', fontStyle: 'italic' }}>
                - Management (it's just me)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
