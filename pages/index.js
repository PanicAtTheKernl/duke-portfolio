import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Monitor, 
  Code, 
  Server,
  Globe,
  ChevronDown,
  Terminal,
  Cpu
} from 'lucide-react';

const TypewriterText = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return <span>{displayText}<span className="animate-pulse">|</span></span>;
};

const SkillBadge = ({ skill, level }) => (
  <div className="group relative bg-gradient-to-r from-slate-800 to-slate-700 rounded-full px-4 py-2 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
    <span className="text-cyan-300 font-medium">{skill}</span>
    <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
);

const ProjectCard = ({ title, description, technologies, isHighlight = false }) => (
  <div className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:scale-[1.02] ${
    isHighlight 
      ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-cyan-400/30 shadow-lg shadow-cyan-500/10' 
      : 'bg-slate-800/50 border-slate-700/50 hover:border-slate-600/50'
  }`}>
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative p-6">
      <h3 className={`text-xl font-bold mb-3 ${isHighlight ? 'text-cyan-300' : 'text-white'} group-hover:text-cyan-300 transition-colors`}>
        {title}
      </h3>
      <p className="text-slate-300 leading-relaxed mb-4">{description}</p>
      {technologies && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 text-xs bg-slate-700/50 text-cyan-400 rounded-md border border-slate-600/30">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default function EnhancedPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 right-1/3 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <header className="min-h-screen flex flex-col justify-center relative">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                  Hector Pugh
                </span>
              </h1>
              <div className="text-2xl md:text-3xl text-slate-300 font-light">
                <TypewriterText text="Full-Stack Developer & Open Source Contributor" delay={80} />
              </div>
            </div>
            
            <div className="max-w-3xl">
              <p className="text-xl text-slate-400 leading-relaxed">
                17-year-old British developer passionate about creating elegant solutions to complex problems. 
                Currently mastering modern web technologies and contributing to the open-source ecosystem.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-slate-300">Available for opportunities</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-300">England, UK</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-cyan-400" />
          </div>
        </header>

        {/* About Section */}
        <section className="py-20 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Why Choose Me?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              I bring fresh perspective, cutting-edge skills, and an unstoppable drive to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Modern Tech Stack</h3>
              <p className="text-slate-400 leading-relaxed">
                Proficient in the latest web technologies including React, Next.js, TypeScript, and modern deployment practices.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">System Expertise</h3>
              <p className="text-slate-400 leading-relaxed">
                Deep Linux knowledge with Arch Linux daily-driving experience, Docker containerization, and system optimization.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Open Source Mindset</h3>
              <p className="text-slate-400 leading-relaxed">
                Active contributor to open-source projects with a focus on accessibility, clean code, and community collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="py-20 space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
            <p className="text-xl text-slate-400">Tools and technologies I use to build exceptional software</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Frontend Development</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <SkillBadge skill="React & Next.js" />
                <SkillBadge skill="TypeScript" />
                <SkillBadge skill="Tailwind CSS" />
                <SkillBadge skill="Framer Motion" />
                <SkillBadge skill="JavaScript ES6+" />
                <SkillBadge skill="Responsive Design" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Server className="w-8 h-8 text-emerald-400" />
                <h3 className="text-2xl font-bold text-white">Backend & DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <SkillBadge skill="Python & FastAPI" />
                <SkillBadge skill="Docker & Kubernetes" />
                <SkillBadge skill="Linux Administration" />
                <SkillBadge skill="Git & CI/CD" />
                <SkillBadge skill="Cloud Services" />
                <SkillBadge skill="Database Design" />
              </div>
            </div>
          </div>
        </section>

        {/* Development Setup */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Development Environment</h2>
            <p className="text-xl text-slate-400">Optimized for productivity and performance</p>
          </div>

          <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 rounded-3xl p-8 border border-slate-700/50">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/30">
                  <Monitor className="w-16 h-16 text-cyan-400" />
                </div>
              </div>
              
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-bold text-white">ThinkPad T480 Development Rig</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-5 h-5 text-cyan-400" />
                      <span className="text-slate-300">Intel Core i7-8650U (Quad-Core)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-emerald-400 rounded-sm"></div>
                      <span className="text-slate-300">16GB DDR4 RAM @ 2400MHz</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-purple-400 rounded-sm"></div>
                      <span className="text-slate-300">512GB NVMe SSD</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Terminal className="w-5 h-5 text-cyan-400" />
                      <span className="text-slate-300">Arch Linux + i3wm</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Code className="w-5 h-5 text-emerald-400" />
                      <span className="text-slate-300">VSCode + Neovim</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-cyan-400 rounded-sm"></div>
                      <span className="text-slate-300">Dual Monitor Setup</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed">
                  This setup provides the perfect balance of portability and power, allowing me to develop 
                  complex applications efficiently. The Arch Linux environment keeps me close to system 
                  internals while i3 provides a clean, keyboard-driven workflow that maximizes productivity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-400">Real-world applications showcasing my technical abilities</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <ProjectCard
              title="Enterprise Portfolio Platform"
              description="A comprehensive portfolio website built with Next.js, featuring dynamic routing, responsive design, and seamless GitHub integration for live project updates. Implements modern SEO practices and performance optimization."
              technologies={['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GitHub API']}
              isHighlight={true}
            />
            
            <ProjectCard
              title="Open Source React A11y Library"
              description="Contributed critical accessibility improvements to a popular React component library, enhancing keyboard navigation and screen reader support. Improved developer experience with comprehensive documentation."
              technologies={['React', 'TypeScript', 'Jest', 'Accessibility', 'Documentation']}
            />
            
            <ProjectCard
              title="Discord-Minecraft Integration Bot"
              description="Developed a sophisticated Discord bot with real-time Minecraft server integration using Mineflayer. Features include player statistics, server monitoring, and automated notifications with robust error handling."
              technologies={['Node.js', 'Discord.js', 'Mineflayer', 'WebSocket', 'MongoDB']}
            />
            
            <ProjectCard
              title="Linux System Automation Suite"
              description="Created a collection of Bash scripts and Python tools for automated system maintenance, backup management, and development environment setup. Includes comprehensive logging and error recovery."
              technologies={['Python', 'Bash', 'Cron', 'Systemd', 'Docker']}
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              I'm actively seeking opportunities to contribute to innovative projects and grow with a forward-thinking team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="mailto:hectorpugh08@icloud.com"
                className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
              
              <a
                href="https://github.com/codedbyduke"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-slate-500 px-8 py-4 rounded-full text-slate-300 hover:text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                <Code className="w-5 h-5" />
                View My Code
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-8 text-slate-400">
              <a href="https://github.com/codedbyduke" className="hover:text-cyan-400 transition-colors">
                GitHub: @miyeka
              </a>
              <a href="https://linkedin.com/in/hectorpugh" className="hover:text-cyan-400 transition-colors">
                LinkedIn: hectorpugh
              </a>
              <a href="mailto:hectorpugh08@icloud.com" className="hover:text-cyan-400 transition-colors">
                hectorpugh08@icloud.com
              </a>
            </div>
          </div>
        </section>

        <footer className="text-center text-slate-500 py-8 border-t border-slate-800 mt-20">
          <p>© 2025 Hector Pugh. Crafted with passion and precision.</p>
        </footer>
      </div>
    </div>
  );
}