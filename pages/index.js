import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Monitor, 
  Code, 
  Server,
  Globe,
  ChevronDown,
  Terminal,
  Cpu,
  Github,
  Linkedin,
  ExternalLink,
  Zap,
  Star,
  MousePointer,
  Sparkles
} from 'lucide-react';

const FloatingParticle = ({ delay = 0 }) => (
  <div 
    className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-60"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${3 + Math.random() * 2}s`
    }}
  />
);

const InteractiveGrid = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const gridRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (gridRef.current) {
        const rect = gridRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const grid = gridRef.current;
    if (grid) {
      grid.addEventListener('mousemove', handleMouseMove);
      return () => grid.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div 
      ref={gridRef}
      className="absolute inset-0 opacity-20 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(34, 211, 238, 0.3) 0%, transparent 50%), linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px), linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        transition: 'background-image 0.1s ease-out'
      }}
    />
  );
};

const TypewriterText = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span>
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
    </span>
  );
};

const MagneticButton = ({ children, className = "", href, external = false, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * 0.2;
    const deltaY = (e.clientY - centerY) * 0.2;
    
    setMousePos({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const Component = href ? 'a' : 'button';
  const linkProps = href ? { 
    href, 
    ...(external && { target: "_blank", rel: "noopener noreferrer" })
  } : {};

  return (
    <Component
      ref={buttonRef}
      className={`group relative overflow-hidden transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
      }}
      {...linkProps}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      <div className="relative z-10">
        {children}
      </div>
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 animate-pulse"></div>
      )}
    </Component>
  );
};

const GlowingSkillBadge = ({ skill, level }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative bg-gradient-to-r from-slate-800/90 to-slate-700/90 rounded-full px-6 py-3 border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-500 hover:scale-110 cursor-pointer backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 blur-md"></div>
      </div>
      <span className="relative z-10 text-cyan-300 font-medium">{skill}</span>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100">
        <Star className="w-3 h-3 text-white m-0.5" />
      </div>
      {isHovered && (
        <>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

const HolographicProjectCard = ({ title, description, technologies, isHighlight = false, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div 
      ref={cardRef}
      className={`group relative overflow-hidden rounded-3xl border transition-all duration-700 hover:scale-[1.03] cursor-pointer ${
        isHighlight 
          ? 'bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-cyan-400/40 shadow-2xl shadow-cyan-500/20' 
          : 'bg-slate-800/70 border-slate-700/50 hover:border-slate-600/70'
      } backdrop-blur-sm`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Holographic background effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(34, 211, 238, 0.15) 0%, rgba(16, 185, 129, 0.1) 25%, transparent 50%)`
        }}
      />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-purple-500/20 animate-pulse"></div>
      </div>

      {/* Floating particles */}
      {isHovered && (
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <FloatingParticle key={i} delay={i * 0.2} />
          ))}
        </div>
      )}

      <div className="relative p-8 z-10">
        <div className="flex items-start justify-between mb-4">
          <h3 className={`text-2xl font-bold mb-3 ${isHighlight ? 'text-cyan-300' : 'text-white'} group-hover:text-cyan-300 transition-colors duration-300`}>
            {title}
          </h3>
          {link && (
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              <ExternalLink className="w-5 h-5 text-cyan-400" />
            </div>
          )}
        </div>
        
        <p className="text-slate-300 leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-300">
          {description}
        </p>
        
        {technologies && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1.5 text-sm bg-slate-700/60 text-cyan-400 rounded-lg border border-slate-600/40 backdrop-blur-sm group-hover:bg-slate-600/60 group-hover:border-cyan-500/40 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Sparkle effect */}
        {isHovered && (
          <div className="absolute top-4 right-4">
            <Sparkles className="w-6 h-6 text-cyan-400 animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
};

const PulsingOrb = ({ size = 'w-4 h-4', color = 'bg-cyan-400', delay = 0 }) => (
  <div 
    className={`${size} ${color} rounded-full animate-pulse relative`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className={`absolute inset-0 ${color} rounded-full animate-ping opacity-30`}></div>
  </div>
);

export default function UltraModernPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentSection, setCurrentSection] = useState('hero');
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Interactive Grid Background */}
      <InteractiveGrid />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large glowing orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-emerald-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 right-1/3 w-60 h-60 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.3} />
        ))}
        
        {/* Mouse trail effect */}
        <div 
          className="absolute w-4 h-4 bg-cyan-400/30 rounded-full blur-sm pointer-events-none transition-all duration-100 ease-out"
          style={{
            left: mousePos.x - 8,
            top: mousePos.y - 8,
            transform: `scale(${scrollY * 0.001 + 1})`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <header className="min-h-screen flex flex-col justify-center relative">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="relative">
                <h1 className="text-7xl md:text-9xl font-black tracking-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 bg-clip-text text-transparent animate-pulse">
                    Hector Pugh
                  </span>
                </h1>
                {/* Glowing effect behind name */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-emerald-400/20 to-cyan-300/20 blur-3xl -z-10 animate-pulse"></div>
              </div>
              
              <div className="text-3xl md:text-4xl text-slate-300 font-light">
                <TypewriterText text="Full-Stack Developer & Digital Architect" delay={60} />
              </div>
            </div>
            
            <div className="max-w-4xl">
              <p className="text-2xl text-slate-400 leading-relaxed">
                I'm a British developer who crafts <span className="text-cyan-400 font-semibold">extraordinary digital experiences</span> with cutting-edge technology. 
                Specializing in React, TypeScript, and modern cloud architectures, I transform complex problems into elegant solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-full border border-emerald-500/40 backdrop-blur-sm">
                <PulsingOrb size="w-3 h-3" color="bg-emerald-400" />
                <span className="text-slate-300 font-medium">Available for opportunities</span>
              </div>
              
              <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-full border border-cyan-500/40 backdrop-blur-sm">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-300 font-medium">England, UK</span>
              </div>
              
              <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-full border border-purple-500/40 backdrop-blur-sm">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="text-slate-300 font-medium">Open Source Contributor</span>
              </div>
            </div>

            {/* Interactive CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <MagneticButton
                href="mailto:hectorpugh08@icloud.com"
                className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 px-10 py-5 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
              >
                <Mail className="w-6 h-6" />
                Let's Create Magic
              </MagneticButton>
              
              <MagneticButton
                href="https://github.com/codedbyduke"
                external
                className="flex items-center gap-3 bg-slate-800/80 hover:bg-slate-700/80 border-2 border-slate-600 hover:border-cyan-500 px-10 py-5 rounded-full text-slate-300 hover:text-white font-bold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <Code className="w-6 h-6" />
                Explore My Code
              </MagneticButton>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
            <div className="relative">
              <ChevronDown className="w-8 h-8 text-cyan-400" />
              <div className="absolute inset-0 w-8 h-8 text-cyan-400 animate-ping opacity-30">
                <ChevronDown className="w-8 h-8" />
              </div>
            </div>
          </div>
        </header>

        {/* Enhanced About Section */}
        <section className="py-32 space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
              Why Choose Excellence?
            </h2>
            <p className="text-2xl text-slate-400 max-w-4xl mx-auto">
              I don't just write code—I architect digital experiences that push boundaries and exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Code,
                title: "Cutting-Edge Technology",
                description: "Master of React, Next.js, TypeScript, and emerging web technologies. I stay ahead of the curve to deliver future-proof solutions.",
                gradient: "from-cyan-500 to-emerald-500"
              },
              {
                icon: Terminal,
                title: "System Architecture",
                description: "Deep Linux expertise with Arch Linux mastery, Docker orchestration, and cloud-native development practices.",
                gradient: "from-emerald-500 to-purple-500"
              },
              {
                icon: Sparkles,
                title: "Innovation Mindset",
                description: "Active open-source contributor with a passion for accessibility, performance optimization, and community impact.",
                gradient: "from-purple-500 to-cyan-500"
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                <div className="relative p-10 rounded-3xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-700 hover:transform hover:scale-105 backdrop-blur-sm">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-lg group-hover:text-slate-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Technical Skills */}
        <section className="py-32 space-y-16">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-6">Technical Mastery</h2>
            <p className="text-2xl text-slate-400">The tools and technologies I wield to create digital magic</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Frontend Sorcery</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'WebGL', 'GraphQL'].map((skill, index) => (
                  <GlowingSkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-xl">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Backend Wizardry</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {['Node.js', 'Python & FastAPI', 'Docker & K8s', 'AWS & Azure', 'PostgreSQL', 'Redis', 'Microservices'].map((skill, index) => (
                  <GlowingSkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Development Setup */}
        <section className="py-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Battle Station</h2>
            <p className="text-2xl text-slate-400">Engineered for peak performance and productivity</p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-r from-slate-800/90 to-slate-900/90 rounded-3xl p-12 border border-slate-700/50 backdrop-blur-sm">
              <div className="flex flex-col xl:flex-row items-center gap-12">
                <div className="flex-shrink-0 relative">
                  <div className="w-40 h-40 bg-gradient-to-br from-cyan-500/30 to-emerald-500/30 rounded-3xl flex items-center justify-center border border-cyan-500/40 relative overflow-hidden">
                    <Monitor className="w-20 h-20 text-cyan-400 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 animate-pulse"></div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
                </div>
                
                <div className="flex-1 space-y-8">
                  <h3 className="text-4xl font-bold text-white">ThinkPad T480 Development Beast</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      {[
                        { icon: Cpu, text: "Intel Core i7-8650U (Quad-Core)", color: "text-cyan-400" },
                        { icon: null, text: "16GB DDR4 RAM @ 2400MHz", color: "text-emerald-400" },
                        { icon: null, text: "512GB NVMe SSD", color: "text-purple-400" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4 group">
                          {item.icon ? (
                            <item.icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                          ) : (
                            <div className={`w-6 h-6 ${item.color.replace('text-', 'bg-')} rounded-sm group-hover:scale-110 transition-transform duration-300`}></div>
                          )}
                          <span className="text-slate-300 text-lg group-hover:text-white transition-colors duration-300">{item.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { icon: Terminal, text: "Arch Linux + i3wm", color: "text-cyan-400" },
                        { icon: Code, text: "VSCode + Neovim", color: "text-emerald-400" },
                        { icon: null, text: "Dual 4K Monitor Setup", color: "text-purple-400" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-4 group">
                          {item.icon ? (
                            <item.icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                          ) : (
                            <div className={`w-6 h-6 ${item.color.replace('text-', 'bg-')} rounded-sm group-hover:scale-110 transition-transform duration-300`}></div>
                          )}
                          <span className="text-slate-300 text-lg group-hover:text-white transition-colors duration-300">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-400 leading-relaxed text-lg">
                    This powerhouse setup delivers the perfect fusion of portability and performance. The Arch Linux 
                    environment keeps me intimately connected with system internals, while i3wm provides a 
                    lightning-fast, keyboard-driven workflow that maximizes productivity and minimizes distractions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Featured Projects */}
        <section className="py-32 space-y-16">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-6">Digital Masterpieces</h2>
            <p className="text-2xl text-slate-400">Real-world applications that showcase innovation and technical excellence</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <HolographicProjectCard
              title="Enterprise Portfolio Platform"
              description="A comprehensive portfolio website built with Next.js, featuring dynamic routing, responsive design, and seamless GitHub integration for live project updates. Implements modern SEO practices and performance optimization."
              technologies={['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GitHub API']}
              isHighlight={true}
              link="https://github.com/codedbyduke"
            />
            
            <HolographicProjectCard
              title="Open Source React A11y Library"
              description="Contributed critical accessibility improvements to a popular React component library, enhancing keyboard navigation and screen reader support. Improved developer experience with comprehensive documentation."
              technologies={['React', 'TypeScript', 'Jest', 'Accessibility', 'Documentation']}
            />
            
            <HolographicProjectCard
              title="Discord-Minecraft Integration Bot"
              description="Developed a sophisticated Discord bot with real-time Minecraft server integration using Mineflayer. Features include player statistics, server monitoring, and automated notifications with robust error handling."
              technologies={['Node.js', 'Discord.js', 'Mineflayer', 'WebSocket', 'MongoDB']}
            />
            
            <HolographicProjectCard
              title="Linux System Automation Suite"
              description="Created a collection of Bash scripts and Python tools for automated system maintenance, backup management, and development environment setup. Includes comprehensive logging and error recovery."
              technologies={['Python', 'Bash', 'Cron', 'Systemd', 'Docker']}
            />
          </div>
        </section>

        {/* Enhanced Call to Action */}
        <section className="py-32">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative text-center space-y-12 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl p-16 border border-slate-700/50 backdrop-blur-sm">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Ready to Build the 
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"> Future</span>?
              </h2>
              <p className="text-2xl text-slate-400 max-w-3xl mx-auto">
                I'm actively seeking opportunities to contribute to groundbreaking projects and collaborate with visionary teams.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
                <MagneticButton
                  href="mailto:hectorpugh08@icloud.com"
                  className="flex items-center gap-4 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 px-12 py-6 rounded-full text-white font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
                >
                  <Mail className="w-6 h-6" />
                  Start a Conversation
                  <Sparkles className="w-5 h-5 animate-spin" />
                </MagneticButton>
                
                <MagneticButton
                  href="https://github.com/codedbyduke"
                  external
                  className="flex items-center gap-4 bg-slate-800/80 hover:bg-slate-700/80 border-2 border-slate-600 hover:border-cyan-500 px-12 py-6 rounded-full text-slate-300 hover:text-white font-bold text-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  <Github className="w-6 h-6" />
                  Explore My Universe
                  <ExternalLink className="w-5 h-5" />
                </MagneticButton>
              </div>

              <div className="flex flex-wrap justify-center gap-8 pt-12 text-slate-400">
                <MagneticButton
                  href="https://github.com/codedbyduke"
                  external
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300 text-lg"
                >
                  <Github className="w-5 h-5" />
                  @codedbyduke
                </MagneticButton>
                <MagneticButton
                  href="https://www.linkedin.com/in/hectorpugh"
                  external
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300 text-lg"
                >
                  <Linkedin className="w-5 h-5" />
                  hectorpugh
                </MagneticButton>
                <MagneticButton
                  href="mailto:hectorpugh08@icloud.com"
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300 text-lg"
                >
                  <Mail className="w-5 h-5" />
                  hectorpugh08@icloud.com
                </MagneticButton>
              </div>

              {/* Floating interaction elements */}
              <div className="absolute top-8 right-8">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <MousePointer className="w-4 h-4" />
                  <span>Hover to interact</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center text-slate-500 py-12 border-t border-slate-800/50 mt-32">
          <div className="space-y-4">
            <p className="text-lg">© 2025 Hector Pugh. Crafted with passion, precision, and a touch of magic.</p>
            <div className="flex justify-center items-center gap-2">
              <PulsingOrb size="w-2 h-2" color="bg-cyan-400" />
              <span className="text-sm">Powered by imagination and caffeine</span>
              <PulsingOrb size="w-2 h-2" color="bg-emerald-400" delay={1} />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
