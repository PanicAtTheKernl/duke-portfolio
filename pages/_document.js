import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="codedbyduke.co.uk - Professional Portfolio. Site under maintenance, back soon." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <title>CodedByDuke | Professional Portfolio</title>
      </Head>
      <body style={{ background: '#f4f6f8', margin: 0 }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
