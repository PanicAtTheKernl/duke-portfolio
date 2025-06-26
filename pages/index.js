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
  X
} from 'lucide-react';

const TypewriterText = ({ text, delay = 50 }) => {
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

const ServiceCard = ({ icon: Icon, title, description, features, gradient }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-slate-900/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-slate-400 mb-6 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-slate-300">
              <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {isHovered && (
        <div className="absolute top-4 right-4">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ title, description, tech, type, status = "Completed" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-orange-400 uppercase tracking-wide">{type}</span>
        </div>
        <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded-full">{status}</span>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-slate-400 mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span key={index} className="text-xs bg-slate-800/80 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
            {item}
          </span>
        ))}
      </div>
      
      {isHovered && (
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowRight className="w-4 h-4 text-orange-500" />
        </div>
      )}
    </div>
  );
};

const TestimonialCard = ({ text, author, role, rating = 5 }) => (
  <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-800">
    <div className="flex items-center gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
      ))}
    </div>
    
    <Quote className="w-8 h-8 text-orange-500/30 mb-4" />
    
    <p className="text-slate-300 mb-4 leading-relaxed italic">
      "{text}"
    </p>
    
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
        <User className="w-5 h-5 text-white" />
      </div>
      <div>
        <div className="font-semibold text-white">{author}</div>
        <div className="text-sm text-slate-400">{role}</div>
      </div>
    </div>
  </div>
);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Duke</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['about', 'services', 'portfolio', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-slate-300 hover:text-orange-400 transition-colors duration-300 capitalize font-medium"
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 py-4">
            <div className="flex flex-col gap-4 px-6">
              {['about', 'services', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-slate-300 hover:text-orange-400 transition-colors duration-300 capitalize font-medium text-left"
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

export default function DukeProfessionalPortfolio() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navigation />
      
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 right-1/3 w-60 h-60 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(90deg, rgba(251, 146, 60, 0.1) 1px, transparent 1px), linear-gradient(rgba(251, 146, 60, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Mouse follower */}
        <div 
          className="absolute w-4 h-4 bg-orange-500/20 rounded-full blur-sm pointer-events-none transition-all duration-100 ease-out"
          style={{
            left: mousePos.x - 8,
            top: mousePos.y - 8,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center space-y-8 max-w-4xl">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl text-slate-400">Professional Tech Solutions</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
                  Duke
                </span>
              </h1>
              
              <div className="text-2xl md:text-3xl text-slate-300 font-light">
                <TypewriterText text="Tech Repair • Coding • Gaming Solutions" delay={80} />
              </div>
            </div>
            
            <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              17-year-old tech specialist delivering <span className="text-orange-400 font-semibold">no-BS solutions</span> in hardware repair, 
              Linux development, and performance optimization. Zero shortcuts, maximum results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 px-8 py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center gap-3 justify-center"
              >
                <Mail className="w-5 h-5" />
                Get Solutions
              </button>
              
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-slate-800/80 hover:bg-slate-700/80 border-2 border-slate-700 hover:border-orange-500 px-8 py-4 rounded-xl text-slate-300 hover:text-white font-bold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center gap-3 justify-center"
              >
                <Code className="w-5 h-5" />
                View Work
              </button>
            </div>
            
            <div className="flex justify-center items-center gap-8 pt-8 text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>UK Based</span>
              </div>
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-4 h-4" />
                <span>Gaming Enthusiast</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
            <p className="text-xl text-slate-400">Direct approach, proven results</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl blur-xl"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">The Direct Approach</h3>
                  <p className="text-slate-300 leading-relaxed">
                    I'm Duke, 17 years old, and I don't believe in sugar-coating or taking shortcuts. 
                    When your tech breaks, when your code fails, or when your system needs optimization—I deliver solutions that work.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-800">
                <h4 className="text-lg font-semibold text-orange-400 mb-3">Core Philosophy</h4>
                <p className="text-slate-300">
                  "Windows is dead to me. Linux is life. Hardware should be pushed to its limits, 
                  and software should be crafted with precision. No compromises, no excuses."
                </p>
              </div>
              
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-800">
                <h4 className="text-lg font-semibold text-orange-400 mb-3">What Drives Me</h4>
                <p className="text-slate-300">
                  Breaking down complex problems, optimizing performance, and building custom solutions 
                  from scratch. Every project gets my full attention and expertise.
                </p>
              </div>
              
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-800">
                <h4 className="text-lg font-semibold text-orange-400 mb-3">Battle Station</h4>
                <div className="flex items-center gap-3 text-slate-300">
                  <Monitor className="w-5 h-5 text-orange-500" />
                  <span>Lenovo ThinkPad T480 • i7-8650U • 16GB RAM</span>
                </div>
                <p className="text-slate-400 text-sm mt-2">Solid, reliable, no BS—just like my work.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Services</h2>
            <p className="text-xl text-slate-400">Expertise that delivers results</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Wrench}
              title="Tech Repair"
              description="Hardware diagnostics, component replacement, and system optimization. I fix what others can't."
              features={[
                "Hardware diagnostics & repair",
                "Component upgrades & replacements",
                "Performance optimization",
                "System troubleshooting",
                "Custom build consultations"
              ]}
              gradient="from-orange-500 to-red-500"
            />
            
            <ServiceCard
              icon={Terminal}
              title="Development"
              description="Linux-focused software development, automation, and custom tool creation. Built right, built to last."
              features={[
                "Linux system development",
                "Bot creation & automation",
                "Custom script development",
                "API integrations",
                "Performance optimization"
              ]}
              gradient="from-red-500 to-orange-500"
            />
            
            <ServiceCard
              icon={Gamepad2}
              title="Gaming Solutions"
              description="Performance tuning, custom configurations, and gaming setup optimization for competitive edge."
              features={[
                "Gaming PC optimization",
                "Custom configuration setups",
                "Performance tuning",
                "Competitive gaming prep",
                "Hardware recommendations"
              ]}
              gradient="from-orange-600 to-red-600"
            />
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Portfolio</h2>
            <p className="text-xl text-slate-400">Projects that prove the point</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Custom Linux Bot Framework"
              description="Built a comprehensive Discord bot framework with advanced automation features and Linux system integration."
              tech={["Python", "Discord.py", "Linux", "SQLite", "API Integration"]}
              type="Development"
              status="Active"
            />
            
            <ProjectCard
              title="Hardware Diagnostic Suite"
              description="Developed custom diagnostic tools for rapid hardware fault detection and performance analysis."
              tech={["Python", "System Monitoring", "Hardware APIs", "Logging"]}
              type="Tech Repair"
              status="Completed"
            />
            
            <ProjectCard
              title="Gaming Performance Optimizer"
              description="Created automated scripts for optimizing gaming performance across multiple system configurations."
              tech={["Bash", "System Optimization", "Performance Monitoring"]}
              type="Gaming"
              status="Ongoing"
            />
            
            <ProjectCard
              title="Client System Overhauls"
              description="Complete system rebuilds and optimizations for improved performance and reliability."
              tech={["Hardware Repair", "Linux Installation", "Performance Tuning"]}
              type="Tech Repair"
              status="Multiple Projects"
            />
            
            <ProjectCard
              title="Automation Scripts Collection"
              description="Suite of productivity and system maintenance scripts for Linux environments."
              tech={["Bash", "Python", "Cron", "System Administration"]}
              type="Development"
              status="Expanding"
            />
            
            <ProjectCard
              title="Custom Tool Development"
              description="Bespoke software solutions for specific client needs and workflow optimization."
              tech={["Python", "Custom APIs", "Database Integration"]}
              type="Development"
              status="Various"
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Client Feedback</h2>
            <p className="text-xl text-slate-400">Results speak louder than words</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              text="Duke fixed my laptop when three other repair shops couldn't. Direct, professional, and actually knows what he's doing."
              author="Sarah M."
              role="Local Business Owner"
              rating={5}
            />
            
            <TestimonialCard
              text="Needed a custom bot for my server. Duke delivered exactly what I asked for, no fluff, just results."
              author="Gaming Community Lead"
              role="Discord Server Admin"
              rating={5}
            />
            
            <TestimonialCard
              text="System was running like garbage. Duke optimized everything and now it's faster than when I bought it."
              author="Tech Enthusiast"
              role="Hardware Collector"
              rating={5}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
            <p className="text-xl text-slate-400">Ready to solve your tech problems?</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl blur-2xl"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white">Let's Talk Solutions</h3>
                    <p className="text-slate-400">
                      Got a tech problem that needs solving? Need custom development work? 
                      Want to optimize your gaming setup? Let's cut through the BS and get it done.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-orange-500" />
                        <span className="text-slate-300">Available for project discussions</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-orange-500" />
                        <span className="text-slate-300">Remote work preferred</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-orange-500" />
                        <span className="text-slate-300">Quick turnaround times</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                      <h4 className="font-semibold text-orange-400 mb-2">What I Do Best</h4>
                      <ul className="text-slate-300 space-y-1 text-sm">
                        <li>• Hardware repair & diagnostics</li>
                        <li>• Linux development & automation</li>
                        <li>• Gaming optimization</li>
                        <li>• Custom tool development</li>
                        <li>• System troubleshooting</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                      <h4 className="font-semibold text-orange-400 mb-2">Work Style</h4>
                      <p className="text-slate-300 text-sm">
                        Direct communication, transparent pricing, and results-focused approach. 
                        No corporate nonsense, just professional service.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-800">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:contact@duke-tech.com"
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 px-8 py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center gap-3 justify-center"
                    >
                      <Mail className="w-5 h-5" />
                      Start a Project
                    </a>
                    
                    <a
                      href="https://github.com/duke-tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800/80 hover:bg-slate-700/80 border-2 border-slate-700 hover:border-orange-500 px-8 py-4 rounded-xl text-slate-300 hover:text-white font-bold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center gap-3 justify-center"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center text-slate-500 py-12 border-t border-slate-800/50">
          <div className="space-y-4">
            <div className="flex justify-center items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span>© 2025 Duke - Professional Tech Solutions</span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            <p className="text-sm">Built with precision. No shortcuts, no compromises.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
