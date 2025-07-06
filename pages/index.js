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
  Sparkles,
  Users,
  Target,
  Award,
  BookOpen,
  Coffee,
  Lightbulb,
  Heart,
  MapPin,
  Phone,
  Download,
  User,
  Briefcase,
  GraduationCap,
  Camera,
  Music,
  Gamepad2,
  Settings,
  Shield,
  Wrench,
  Bot,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Quote,
  Menu,
  X,
  AlertTriangle,
  Skull
} from 'lucide-react';

const TypewriterText = ({ text, delay = 80 }) => {
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
    }, 600);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="font-mono">
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>_</span>
    </span>
  );
};

const ServiceCard = ({ icon: Icon, title, description, features, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-black border-2 border-red-600 p-6 shadow-lg transition-all duration-300 hover:shadow-red-600/50 hover:shadow-xl hover:border-red-400"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-red-600 border-2 border-red-400 flex items-center justify-center">
          <Icon className="w-6 h-6 text-black" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white uppercase tracking-wide">{title}</h3>
          <div className="text-red-400 font-mono text-sm">{price}</div>
        </div>
      </div>
      
      <p className="text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="border-t border-red-800 pt-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-300">
              <span className="text-red-500 font-bold">»</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {isHovered && (
        <div className="absolute top-2 right-2">
          <div className="w-3 h-3 bg-red-500 animate-pulse"></div>
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ title, description, tech, type, year, status = "COMPLETE" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-black border-2 border-gray-600 p-5 transition-all duration-300 hover:border-red-500 hover:shadow-lg hover:shadow-red-600/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-red-500 animate-pulse"></div>
          <span className="text-red-400 font-mono text-sm uppercase">{type}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 font-mono text-xs">{year}</span>
          <span className="text-xs bg-red-600 text-black px-2 py-1 font-bold uppercase">{status}</span>
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-white mb-2 uppercase">
        {title}
      </h3>
      
      <p className="text-gray-400 mb-3 text-sm">
        {description}
      </p>
      
      <div className="border-t border-gray-800 pt-3">
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 border border-gray-700 font-mono">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black border-b-2 border-red-600' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-600 border-2 border-red-400 flex items-center justify-center">
              <Terminal className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold text-white font-mono">DUKE.EXE</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {['about', 'services', 'portfolio', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-red-400 transition-colors duration-300 uppercase font-bold text-sm border-b-2 border-transparent hover:border-red-400"
              >
                {item}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden bg-black border-t-2 border-red-600 py-4">
            <div className="flex flex-col gap-3 px-4">
              {['about', 'services', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300 uppercase font-bold text-sm text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default function DukeBritishPortfolio() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navigation />
      
      {/* Retro grid background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(90deg, #dc2626 1px, transparent 1px), linear-gradient(#dc2626 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-16">
          <div className="text-center space-y-8 max-w-4xl">
            {/* System Info Header */}
            <div className="bg-black border-2 border-red-600 p-4 mb-8 font-mono text-sm">
              <div className="flex justify-between items-center">
                <span className="text-red-400">SYSTEM STATUS: ONLINE</span>
                <span className="text-gray-400">{time.toLocaleTimeString()}</span>
              </div>
              <div className="text-gray-500 text-xs mt-1">
                ThinkPad T480 | i7-8650U | 16GB RAM | Linux Debian
              </div>
            </div>

            {/* Warning Banner */}
            <div className="bg-red-600 text-black p-3 border-2 border-red-400 mb-8">
              <div className="flex items-center gap-2 justify-center">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-bold">NOT THE BLOODY MUSICIAN</span>
              </div>
              <div className="text-sm mt-1">
                Looking for the artist Hector Pugh? Try Spotify, mate.
              </div>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black tracking-tight font-mono">
                <span className="text-red-500">DUKE</span>
              </h1>
              
              <div className="text-xl md:text-2xl text-gray-300 font-mono border-2 border-gray-600 p-4 bg-black">
                <TypewriterText text="TECH_REPAIR.EXE | CODING.BAT | GAMING_OPT.SH" delay={60} />
              </div>
            </div>
            
            <div className="bg-black border-2 border-red-600 p-6 max-w-3xl mx-auto">
              <p className="text-gray-300 leading-relaxed">
                Young tech bloke. No corporate bollocks. No Windows. Linux only. 
                Hardware gets fixed. Code gets written. Performance gets optimized. 
                <span className="text-red-400 font-bold"> Zero compromises.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-600 hover:bg-red-500 border-2 border-red-400 px-8 py-3 text-black font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50 flex items-center gap-3 justify-center uppercase"
              >
                <Mail className="w-5 h-5" />
                GET SORTED
              </button>
              
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-black border-2 border-red-600 hover:border-red-400 px-8 py-3 text-red-400 hover:text-red-300 font-bold text-lg transition-all duration-300 flex items-center gap-3 justify-center uppercase"
              >
                <Code className="w-5 h-5" />
                VIEW PROJECTS
              </button>
            </div>
            
            <div className="flex justify-center items-center gap-6 pt-6 text-gray-500 text-sm font-mono">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 animate-pulse"></div>
                <span>STATUS: AVAILABLE</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>LOCATION: UK</span>
              </div>
              <div className="flex items-center gap-2">
                <Skull className="w-4 h-4" />
                <span>WINDOWS: DEAD</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-red-500 font-mono uppercase">ABOUT.TXT</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-black border-2 border-red-600 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-600 border-2 border-red-400 flex items-center justify-center">
                    <User className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase">THE FACTS</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm Duke. I fix tech that's buggered. I write code that works. I optimize systems that drag. 
                  No marketing waffle. No fancy graphics. Just proper results.
                </p>
              </div>
              
              <div className="bg-black border-2 border-gray-600 p-6">
                <h4 className="text-lg font-bold text-red-400 mb-3 uppercase">CORE VALUES</h4>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">»</span>
                    <span>Windows is dead. Linux is life.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">»</span>
                    <span>Hardware should work at maximum capacity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">»</span>
                    <span>Code should be efficient and functional.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">»</span>
                    <span>No shortcuts. No compromises.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-black border-2 border-red-600 p-6">
                <h4 className="text-lg font-bold text-red-400 mb-3 uppercase">CURRENT SETUP</h4>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">MACHINE:</span>
                    <span className="text-white">Lenovo ThinkPad T480</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">CPU:</span>
                    <span className="text-white">Intel i7-8650U</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">RAM:</span>
                    <span className="text-white">16GB DDR4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">OS:</span>
                    <span className="text-white">Linux Debian</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">STATUS:</span>
                    <span className="text-green-400">OPTIMIZED</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-black border-2 border-gray-600 p-6">
                <h4 className="text-lg font-bold text-red-400 mb-3 uppercase">PHILOSOPHY</h4>
                <p className="text-gray-300 text-sm font-mono">
                  "If it's knackered, I'll fix it. If it's slow, I'll optimize it. 
                  If it doesn't exist, I'll build it. Simple as that."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-red-500 font-mono uppercase">SERVICES.DAT</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              icon={Wrench}
              title="TECH REPAIR"
              description="Hardware diagnostics, component replacement, system optimization. I fix what others bin."
              price="£20-50/hour"
              features={[
                "Complete hardware diagnostics",
                "Component upgrades & replacements", 
                "System performance optimization",
                "Troubleshooting & problem solving",
                "Custom build consultations"
              ]}
            />
            
            <ServiceCard
              icon={Terminal}
              title="DEVELOPMENT"
              description="Linux-focused development, automation, custom tools. Built to last, built to work properly."
              price="£25-60/hour"
              features={[
                "Linux system development",
                "Discord bot creation",
                "Automation scripts",
                "API integrations",
                "Performance optimization tools"
              ]}
            />
            
            <ServiceCard
              icon={Gamepad2}
              title="GAMING OPT"
              description="Performance tuning, configuration optimization. Making your rig actually competitive."
              price="£30-40/session"
              features={[
                "Gaming PC optimization",
                "Custom config setups",
                "Performance tuning",
                "Competitive gaming prep",
                "Hardware upgrade advice"
              ]}
            />
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-red-500 font-mono uppercase">PROJECTS.LOG</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="DISCORD BOT FRAMEWORK"
              description="Comprehensive bot system with automation, moderation, and custom commands. Python-based, Linux optimized."
              tech={["Python", "Discord.py", "SQLite", "Linux"]}
              type="DEV"
              year="2024"
              status="ACTIVE"
            />
            
            <ProjectCard
              title="HARDWARE DIAGNOSTIC SUITE"
              description="Custom tools for rapid hardware fault detection and performance analysis. CLI-based for maximum efficiency."
              tech={["Python", "System APIs", "Bash", "Monitoring"]}
              type="REPAIR"
              year="2024"
              status="COMPLETE"
            />
            
            <ProjectCard
              title="GAMING PERFORMANCE OPTIMIZER"
              description="Automated scripts for gaming performance optimization across different hardware configurations."
              tech={["Bash", "Python", "System Tuning"]}
              type="GAMING"
              year="2024"
              status="ONGOING"
            />
            
            <ProjectCard
              title="CLIENT SYSTEM OVERHAULS"
              description="Complete system rebuilds with Linux installations, performance tuning, and hardware upgrades."
              tech={["Linux", "Hardware", "Optimization"]}
              type="REPAIR"
              year="2024"
              status="MULTIPLE"
            />
            
            <ProjectCard
              title="AUTOMATION SCRIPT COLLECTION"
              description="Suite of productivity and maintenance scripts for Linux environments. Open source contributions."
              tech={["Bash", "Python", "Cron", "Git"]}
              type="DEV"
              year="2023-24"
              status="EXPANDING"
            />
            
            <ProjectCard
              title="CUSTOM TOOL DEVELOPMENT"
              description="Bespoke software solutions for specific client needs. Command-line focused, maximum efficiency."
              tech={["Python", "C", "APIs", "CLI"]}
              type="DEV"
              year="2024"
              status="VARIOUS"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-red-500 font-mono uppercase">CONTACT.EXE</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-black border-2 border-red-600 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white uppercase">GET IT SORTED</h3>
                  <p className="text-gray-400">
                    Got busted tech? Need custom code? Want gaming optimization? 
                    No corporate waffle. Just proper solutions.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 font-mono text-sm">
                      <span className="text-red-500">»</span>
                      <span className="text-gray-300">Quick response times</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-sm">
                      <span className="text-red-500">»</span>
                      <span className="text-gray-300">No-nonsense pricing</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-sm">
                      <span className="text-red-500">»</span>
                      <span className="text-gray-300">Remote work preferred</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-sm">
                      <span className="text-red-500">»</span>
                      <span className="text-gray-300">Linux-focused solutions</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-900 border border-gray-700 p-4">
                    <h4 className="font-bold text-red-400 mb-2 uppercase">WHAT I DO</h4>
                    <ul className="text-gray-300 text-sm space-y-1 font-mono">
                      <li>• Hardware repair & diagnostics</li>
                      <li>• Linux development & automation</li>
                      <li>• Gaming performance optimization</li>
                      <li>• Custom tool development</li>
                      <li>• System troubleshooting</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-900 border border-gray-700 p-4">
                    <h4 className="font-bold text-red-400 mb-2 uppercase">HOW I WORK</h4>
                    <p className="text-gray-300 text-sm font-mono">
                      Straight talk. Fair prices. Results-focused work. 
                      No corporate bollocks. Just proper service.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t-2 border-red-800">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:hectorpugh08@icloud.com"
                    className="bg-red-600 hover:bg-red-500 border-2 border-red-400 px-8 py-3 text-black font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50 flex items-center gap-3 justify-center uppercase"
                  >
                    <Mail className="w-5 h-5" />
                    START PROJECT
                  </a>
                  
                  <a
                    href="https://github.com/codedbyduke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black border-2 border-red-600 hover:border-red-400 px-8 py-3 text-red-400 hover:text-red-300 font-bold text-lg transition-all duration-300 flex items-center gap-3 justify-center uppercase"
                  >
                    <Github className="w-5 h-5" />
                    VIEW CODE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center text-gray-600 py-8 border-t-2 border-red-800">
          <div className="space-y-3">
            <div className="flex justify-center items-center gap-3 font-mono text-sm">
              <span className="text-red-500">»</span>
              <span>© 2025 DUKE.EXE - TECH SOLUTIONS</span>
              <span className="text-red-500">«</span>
            </div>
            <p className="text-xs font-mono">BUILT WITH PRECISION. NO SHORTCUTS. NO COMPROMISES.</p>
            <div className="flex justify-center items-center gap-2 text-xs font-mono text-gray-700">
              <span>POWERED BY</span>
              <div className="w-2 h-2 bg-red-600 animate-pulse"></div>
              <span>LINUX</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
