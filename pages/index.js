
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#1c92d2] font-inter">
      <header className="w-full py-6 px-4 flex justify-between items-center bg-white/10 backdrop-blur-lg shadow-lg border-b border-white/20">
        <div className="flex items-center gap-3">
          <img src="/globe.svg" alt="Logo" className="h-10 w-10 drop-shadow-lg" />
          <span className="text-3xl font-extrabold tracking-wide text-white drop-shadow">codedbyduke</span>
        </div>
        <nav>
          <a href="#contact" className="text-cyan-300 hover:text-white font-semibold transition">Contact</a>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="relative bg-white/10 border border-white/30 rounded-3xl shadow-2xl p-10 max-w-xl w-full backdrop-blur-2xl glassmorph animate-fade-in">
          <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{background: 'linear-gradient(135deg, rgba(44,83,100,0.12) 0%, rgba(28,146,210,0.18) 100%)', zIndex: 0}}></div>
          <div className="relative z-10">
            <img src="/file.svg" alt="Portfolio" className="mx-auto mb-8 h-20 w-20 drop-shadow-xl" />
            <h1 className="text-5xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg">Welcome to codedbyduke.co.uk</h1>
            <h2 className="text-2xl font-semibold text-cyan-200 mb-6 drop-shadow">Portfolio Under Maintenance</h2>
            <p className="text-lg text-white/80 mb-6">
              My portfolio is currently undergoing scheduled maintenance.<br />
              <span className="text-cyan-200 font-bold">Estimated time remaining: &lt;1 week.</span><br />
              Thank you for your patience and understanding.<br />
              <span className="text-white/70">Please check back soon!</span>
            </p>
            <div className="flex justify-center gap-6 mt-8">
              <a href="mailto:duke@codedbyduke.co.uk" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-400/80 text-slate-900 font-bold shadow-lg hover:bg-cyan-300/90 transition backdrop-blur-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8 4v-4m0 0V8m0 4h4m-4 0H8" /></svg>
                Email Me
              </a>
              <a href="https://github.com/codedbyduke" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/20 text-white font-bold shadow-lg hover:bg-white/30 transition backdrop-blur-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 3.582 8 8 8s8-3.582 8-8c0-5.523-4.477-10-8-10zm0 18c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8z" /></svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full py-5 text-center text-white/70 text-base bg-white/10 border-t border-white/20 mt-12 backdrop-blur-lg">
        &copy; {new Date().getFullYear()} codedbyduke. All rights reserved.
      </footer>
      <style jsx>{`
        .glassmorph {
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.18);
        }
        .animate-fade-in {
          animation: fadeIn 1.2s cubic-bezier(.39,.575,.565,1) both;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}
