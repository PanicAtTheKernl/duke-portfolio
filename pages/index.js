
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 font-inter">
      <header className="w-full py-4 px-6 flex justify-between items-center bg-gray-900/80 backdrop-blur-md shadow border-b border-gray-800">
        <div className="flex items-center gap-2">
          <img src="/globe.svg" alt="Logo" className="h-6 w-6" />
          <span className="text-xl font-bold tracking-wide text-white">codedbyduke</span>
        </div>
        <nav>
          <a href="#contact" className="text-teal-300 hover:text-white font-medium transition">Contact</a>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="relative bg-white/5 border border-gray-800 rounded-xl shadow-lg p-6 max-w-sm w-full backdrop-blur-md">
          <div className="absolute inset-0 rounded-xl pointer-events-none" style={{background: 'linear-gradient(120deg, rgba(44,83,100,0.08) 0%, rgba(72,85,99,0.12) 100%)', zIndex: 0}}></div>
          <div className="relative z-10">
            <img src="/file.svg" alt="Portfolio" className="mx-auto mb-4 h-8 w-8" />
            <h1 className="text-2xl font-extrabold text-white mb-1 tracking-tight">Welcome to codedbyduke.co.uk</h1>
            <h2 className="text-base font-medium text-teal-200 mb-3">Portfolio Under Maintenance</h2>
            <p className="text-sm text-white/80 mb-3">
              My portfolio is currently undergoing scheduled maintenance.<br />
              <span className="text-teal-200 font-semibold">Estimated time remaining: &lt;1 week.</span><br />
              Thank you for your patience and understanding.<br />
              <span className="text-white/70">Please check back soon!</span>
            </p>
            <div className="flex justify-center gap-3 mt-5">
              <a href="mailto:duke@codedbyduke.co.uk" className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-teal-400/80 text-gray-900 font-medium shadow hover:bg-teal-300/90 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8 4v-4m0 0V8m0 4h4m-4 0H8" /></svg>
                Email Me
              </a>
              <a href="https://github.com/codedbyduke" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/20 text-white font-medium shadow hover:bg-white/30 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 3.582 8 8 8s8-3.582 8-8c0-5.523-4.477-10-8-10zm0 18c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8z" /></svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full py-3 text-center text-white/60 text-xs bg-gray-900/80 border-t border-gray-800 mt-6 backdrop-blur-md">
        &copy; {new Date().getFullYear()} codedbyduke. All rights reserved.
      </footer>
    </div>
  );
}
