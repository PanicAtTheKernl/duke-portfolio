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

          html, body {
            margin: 0;
            padding: 0;
            font-family: 'Roboto Slab', serif;
            background-color: #fff;
            color: #000;
            user-select: none;
            -webkit-font-smoothing: antialiased;
          }

          .container {
            max-width: 720px;
            margin: 60px auto 80px;
            padding: 50px 60px 70px;
            border: 10px solid #000;
            position: relative;
            box-sizing: border-box;
            background: #fff;
            box-shadow:
              0 0 20px rgba(0, 0, 0, 0.1),
              inset 0 0 15px rgba(0, 0, 0, 0.05);
          }

          .seal {
            position: absolute;
            top: 40px;
            right: 50px;
            width: 120px;
            opacity: 0.12;
            filter: grayscale(100%) brightness(90%);
            pointer-events: none;
            user-select: none;
            transform: rotate(-6deg);
            z-index: 0;
          }

          h1 {
            font-size: 3.8rem;
            font-weight: 900;
            text-align: center;
            letter-spacing: 6px;
            margin: 0 0 12px;
            z-index: 1;
            position: relative;
            text-shadow:
              1px 1px 2px rgba(0, 0, 0, 0.15);
          }

          h2 {
            font-size: 1.8rem;
            font-weight: 700;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 3px;
            margin: 0 0 38px;
            position: relative;
            z-index: 1;
          }

          .case-info {
            font-family: 'Courier New', Courier, monospace;
            font-weight: 700;
            font-size: 1.1rem;
            background: #f5f5f5;
            border: 2px solid #000;
            padding: 16px 26px;
            max-width: 420px;
            margin: 0 auto 40px;
            box-shadow: inset 2px 2px 6px #ddd;
            letter-spacing: 1.8px;
            user-select: text;
            position: relative;
            z-index: 1;
          }

          p {
            font-size: 1.25rem;
            line-height: 1.7;
            margin-bottom: 1.5em;
            max-width: 720px;
            margin-left: auto;
            margin-right: auto;
            position: relative;
            z-index: 1;
            user-select: text;
          }

          strong.highlight {
            font-weight: 900;
            color: #b30000;
          }

          .warning {
            font-weight: 900;
            color: #b30000;
            font-size: 1.7rem;
            text-align: center;
            margin-top: 3em;
            text-transform: uppercase;
            letter-spacing: 3px;
            animation: flashRed 1.3s infinite alternate;
            user-select: none;
            text-shadow: 1px 1px 1px #700;
            position: relative;
            z-index: 1;
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
            position: relative;
            z-index: 1;
          }

          abbr {
            border-bottom: 1px dotted #000;
            cursor: help;
            user-select: none;
          }

          a {
            color: #000;
            text-decoration: underline;
            transition: color 0.2s ease;
          }

          a:hover {
            color: #b30000;
          }
        `}</style>
      </Head>

      <main className="container" role="main" aria-labelledby="title">
        <img
          className="seal"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/FBI_Seal.svg/120px-FBI_Seal.svg.png"
          alt="FBI Seal"
        />
        <h1 id="title">⚠️ NOTICE OF DOMAIN SEIZURE ⚠️</h1>
        <h2>
          Seized by the <abbr title="Federal Bureau of Investigation">FBI</abbr> &amp; <abbr title="Central Intelligence Agency">CIA</abbr>
        </h2>

        <section className="case-info" aria-label="Case and Investigation Reference Numbers" role="contentinfo">
          <div>Case Number: <strong className="highlight">2025-FBI-783214</strong></div>
          <div>Investigation ID: <strong className="highlight">CIA-INTEL-954321-X</strong></div>
          <div>Effective Date: <strong className="highlight">July 20, 2025</strong></div>
        </section>

        <p>
          This domain has been <strong className="highlight">seized and taken offline</strong> pursuant to a court order issued under{' '}
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
      </main>
    </>
  );
}
