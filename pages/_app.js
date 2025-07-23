
import { Analytics } from "@vercel/analytics/next";

export default function App({ Component, pageProps }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#f4f6f8',
      fontFamily: 'Inter, Arial, sans-serif',
      color: '#222',
    }}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
