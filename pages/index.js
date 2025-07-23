
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#232526] via-[#414345] to-[#485563] font-inter">
      <header className="w-full py-5 px-6 flex justify-between items-center bg-white/5 backdrop-blur-md shadow-md border-b border-white/10">
        <div className="flex items-center gap-2">
          <img src="/globe.svg" alt="Logo" className="h-8 w-8" />
          <span className="text-2xl font-bold tracking-wide text-white">codedbyduke</span>
        </div>
        <nav>
          <a href="#contact" className="text-teal-300 hover:text-white font-semibold transition">Contact</a>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="relative bg-white/10 border border-white/20 rounded-2xl shadow-xl p-8 max-w-md w-full backdrop-blur-lg glass animate-fade-in">
          <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{background: 'linear-gradient(120deg, rgba(44,83,100,0.10) 0%, rgba(72,85,99,0.18) 100%)', zIndex: 0}}></div>
          <div className="relative z-10">
            <img src="/file.svg" alt="Portfolio" className="mx-auto mb-5 h-12 w-12" />
            <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Welcome to codedbyduke.co.uk</h1>
            <h2 className="text-lg font-medium text-teal-200 mb-4">Portfolio Under Maintenance</h2>
            <p className="text-base text-white/80 mb-4">
              My portfolio is currently undergoing scheduled maintenance.<br />
              <span className="text-teal-200 font-semibold">Estimated time remaining: &lt;1 week.</span><br />
              Thank you for your patience and understanding.<br />
              <span className="text-white/70">Please check back soon!</span>
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <a href="mailto:duke@codedbyduke.co.uk" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-400/80 text-slate-900 font-semibold shadow hover:bg-teal-300/90 transition backdrop-blur">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8 4v-4m0 0V8m0 4h4m-4 0H8" /></svg>
                Email Me
              </a>
              <a href="https://github.com/codedbyduke" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 text-white font-semibold shadow hover:bg-white/30 transition backdrop-blur">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 3.582 8 8 8s8-3.582 8-8c0-5.523-4.477-10-8-10zm0 18c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8z" /></svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full py-4 text-center text-white/70 text-sm bg-white/5 border-t border-white/10 mt-8 backdrop-blur-md">
        &copy; {new Date().getFullYear()} codedbyduke. All rights reserved.
      </footer>
      <style jsx>{`
        .glass {
          box-shadow: 0 4px 24px 0 rgba(31, 38, 135, 0.18);
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.12);
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
