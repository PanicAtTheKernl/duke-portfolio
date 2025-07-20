import Head from 'next/head';

export default function SeizedNotice() {
  return (
    <>
      <Head>
        <title>⚠️ OFFICIAL NOTICE: DOMAIN SEIZED BY FBI & CIA ⚠️</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap');

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0; padding: 0;
            font-family: 'Roboto Slab', serif;
            background: #fff;
            color: #000;
            user-select: none;
            overflow-x: hidden;
          }

          .container {
            max-width: 780px;
            margin: 50px auto 80px auto;
            padding: 50px 70px 80px 70px;
            border: 12px solid #000;
            position: relative;
            background: #fff;
            box-shadow:
              0 0 15px rgba(0,0,0,0.15),
              inset 0 0 10px rgba(0,0,0,0.1);
          }

          /* FBI Seal top right watermark */
          .seal {
            position: absolute;
            top: 40px;
            right: 50px;
            width: 130px;
            opacity: 0.12;
            filter: grayscale(100%) brightness(85%);
            pointer-events: none;
            user-select: none;
            z-index: 1;
            transform: rotate(-5deg);
          }

          h1 {
            font-size: 4rem;
            font-weight: 900;
            text-align: center;
            letter-spacing: 8px;
            margin: 0 0 15px 0;
            text-shadow:
              1px 1px 0 #aaa,
              2px 2px 0 #bbb;
          }

          h2 {
            font-size: 1.9rem;
            font-weight: 800;
            text-align: center;
            text-transform: uppercase;
            margin: 0 0 45px 0;
            letter-spacing: 4px;
          }

          .case-info {
            font-family: monospace, monospace;
            font-weight: 700;
            font-size: 1.1rem;
            background: #f8f8f8;
            border: 2px solid #000;
            padding: 15px 25px;
            max-width: 420px;
            margin: 0 auto 40px auto;
            user-select: all;
            letter-spacing: 2px;
            box-shadow: inset 2px 2px 4px #ddd;
          }

          p {
            font-size: 1.25rem;
            line-height: 1.7;
            margin-bottom: 1.6em;
            max-width: 720px;
            margin-left: auto;
            margin-right: auto;
            user-select: text;
          }

          .highlight {
            font-weight: 900;
            color: #b30000;
          }

          .warning {
            font-weight: 900;
            color: #b30000;
            font-size: 1.7rem;
            text-align: center;
            margin-top: 2.5em;
            text-transform: uppercase;
            letter-spacing: 3px;
            animation: flashRed 1.3s infinite alternate;
            user-select: none;
            text-shadow: 1px 1px 1px #700;
          }

          @keyframes flashRed {
            0% { opacity: 1; }
            100% { opacity: 0.4; }
          }

          footer {
            margin-top: 6em;
            font-size: 0.9rem;
            color: #444;
            text-align: center;
            font-style: italic;
            user-select: text;
            max-width: 720px;
            margin-left: auto;
            margin-right: auto;
          }

          abbr {
            border-bottom: 1px dotted #000;
            cursor: help;
            user-select: none;
          }

          a {
            color: #000;
            text-decoration: underline;
          }

          a:hover {
            color: #b30000;
          }
        `}</style>
      </Head>

      <div className="container" role="main" aria-labelledby="title">
        <img
          className="seal"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/FBI_Seal.svg/120px-FBI_Seal.svg.png"
          alt="FBI Seal"
        />
        <h1 id="title">⚠️ NOTICE OF DOMAIN SEIZURE ⚠️</h1>
        <h2>
          Seized by the <abbr title="Federal Bureau of Investigation">FBI</abbr> &amp; <abbr title="Central Intelligence Agency">CIA</abbr>
        </h2>

        <div className="case-info" aria-label="Case and Investigation Reference Numbers" role="contentinfo">
          <div>Case Number: <span className="highlight">2025-FBI-783214</span></div>
          <div>Investigation ID: <span className="highlight">CIA-INTEL-954321-X</span></div>
          <div>Effective Date: <span className="highlight">July 20, 2025</span></div>
        </div>

        <p>
          This domain has been <strong>seized and taken offline</strong> pursuant to a court order issued under{' '}
          <a href="https://www.law.cornell.edu/uscode/text/18/981" target="_blank" rel="noopener noreferrer">
            18 U.S.C. § 981
          </a>
          , following an ongoing federal investigation involving violations of United States criminal law.
        </p>

        <p>
          All content previously hosted on this domain has been removed and preserved as evidence. Access to this domain is{' '}
          <strong className="highlight">strictly prohibited</strong> under federal law.
        </p>

        <p className="warning" role="alert">
          UNAUTHORIZED ACCESS OR ATTEMPT TO TAMPER WITH THIS DOMAIN MAY RESULT IN CRIMINAL PROSECUTION.
        </p>

        <footer>
          For official inquiries, contact the <strong>U.S. Department of Justice</strong> at{' '}
          <a href="https://www.justice.gov" target="_blank" rel="noopener noreferrer">
            www.justice.gov
          </a>.
          <br /><br />
          <small>Just kidding, I’m just working on the website. Thanks for your patience!</small>
        </footer>
      </div>
    </>
  );
}
