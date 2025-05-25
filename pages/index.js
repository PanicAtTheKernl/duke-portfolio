import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Monitor, 
  Code, 
  Server,
  Globe,
  ChevronDown,
  Terminal,
  Cpu,
  Coffee,
  Zap,
  Award,
  BookOpen,
  Users,
  Clock,
  Github,
  Linkedin,
  Calendar,
  MapPin,
  Lightbulb,
  Target,
  TrendingUp,
  Heart
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

const SkillBadge = ({ skill, level, years }) => (
  <div className="group relative bg-gradient-to-r from-slate-800 to-slate-700 rounded-full px-4 py-2 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
    <span className="text-cyan-300 font-medium">{skill}</span>
    {years && (
      <span className="ml-2 text-xs text-slate-400">({years}y)</span>
    )}
    <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
);

const ProjectCard = ({ title, description, technologies, isHighlight = false, year, status, link }) => (
  <div className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:scale-[1.02] ${
    isHighlight 
      ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-cyan-400/30 shadow-lg shadow-cyan-500/10' 
      : 'bg-slate-800/50 border-slate-700/50 hover:border-slate-600/50'
  }`}>
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative p-6">
      <div className="flex justify-between items-start mb-3">
        <h3 className={`text-xl font-bold ${isHighlight ? 'text-cyan-300' : 'text-white'} group-hover:text-cyan-300 transition-colors`}>
          {title}
        </h3>
        <div className="flex gap-2 text-xs">
          {year && <span className="px-2 py-1 bg-slate-700/50 text-slate-400 rounded">{year}</span>}
          {status && <span className="px-2 py-1 bg-emerald-600/20 text-emerald-400 rounded">{status}</span>}
        </div>
      </div>
      <p className="text-slate-300 leading-relaxed mb-4">{description}</p>
      {technologies && (
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 text-xs bg-slate-700/50 text-cyan-400 rounded-md border border-slate-600/30">
              {tech}
            </span>
          ))}
        </div>
      )}
      {link && (
        <a href={link} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium">
          View Project <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
        </a>
      )}
    </div>
  </div>
);

const TimelineItem = ({ year, title, description, type = "education" }) => (
  <div className="flex gap-4 group">
    <div className="flex flex-col items-center">
      <div className={`w-4 h-4 rounded-full border-2 ${
        type === "education" ? "bg-cyan-500 border-cyan-500" : "bg-emerald-500 border-emerald-500"
      } group-hover:scale-125 transition-transform`}></div>
      <div className="w-0.5 bg-slate-700 flex-1 mt-2"></div>
    </div>
    <div className="pb-8 flex-1">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-slate-400 text-sm font-medium">{year}</span>
        <span className={`px-2 py-1 text-xs rounded ${
          type === "education" ? "bg-cyan-500/20 text-cyan-300" : "bg-emerald-500/20 text-emerald-300"
        }`}>
          {type === "education" ? "Education" : "Experience"}
        </span>
      </div>
      <h4 className="text-white font-semibold mb-2">{title}</h4>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

const StatCard = ({ icon: Icon, value, label, description }) => (
  <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 group">
    <div className="flex items-center gap-4 mb-3">
      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>
      <div>
        <div className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">{value}</div>
        <div className="text-sm text-slate-400">{label}</div>
      </div>
    </div>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
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
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Enhanced animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 -left-60 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-cyan-400/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        {/* Enhanced Hero Section */}
        <header className="min-h-screen flex flex-col justify-center relative">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-slate-800/60 rounded-full border border-slate-700/50">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-slate-300 text-sm">Currently available</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-slate-800/60 rounded-full border border-slate-700/50">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span className="text-slate-300 text-sm">England, UK</span>
                </div>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
                  Hector Pugh
                </span>
              </h1>
              <div className="text-2xl md:text-3xl text-slate-300 font-light">
                <TypewriterText text="Full-Stack Developer & Open Source Enthusiast" delay={80} />
              </div>
            </div>
            
            <div className="max-w-4xl">
              <p className="text-xl text-slate-400 leading-relaxed mb-6">
                Seventeen years young and absolutely crackers about code. I'm a British developer who believes 
                brilliant software should be both functional and beautiful. Currently crafting elegant solutions 
                to complex problems whilst contributing to the open-source community that's taught me everything I know.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed">
                When I'm not elbow-deep in TypeScript or tinkering with my Arch Linux setup, you'll find me 
                exploring the latest in web technologies, contributing to projects that matter, and always 
                learning something new. Proper keen to work with like-minded teams who value quality, 
                innovation, and the occasional cup of tea.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-slate-800/60 to-slate-700/60 rounded-full border border-slate-600/50">
                <Coffee className="w-4 h-4 text-amber-400" />
                <span className="text-slate-300">Fuelled by curiosity (and caffeine)</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-slate-800/60 to-slate-700/60 rounded-full border border-slate-600/50">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300">3+ years of serious development</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-cyan-400" />
          </div>
        </header>

        {/* Stats Section */}
        <section className="py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              icon={Code}
              value="50+"
              label="Projects Built"
              description="From simple scripts to full-stack applications, each one teaching me something new"
            />
            <StatCard
              icon={Github}
              value="200+"
              label="GitHub Commits"
              description="This year alone, contributing regularly to personal and open-source projects"
            />
            <StatCard
              icon={Coffee}
              value="∞"
              label="Cups of Tea"
              description="The unofficial fuel of British developers everywhere"
            />
            <StatCard
              icon={Lightbulb}
              value="24/7"
              label="Learning Mode"
              description="Always curious, always growing, always ready for the next challenge"
            />
          </div>
        </section>

        {/* About Section - Enhanced */}
        <section className="py-20 space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Why Work With Me?
            </h2>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              {`I bring a unique combination of youthful enthusiasm, modern technical skills, and a genuinely 
              British approach to problem-solving. Here's what sets me apart from the crowd.`}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <ProjectCard
              title="Enterprise Portfolio Platform"
              description="A comprehensive portfolio website built with Next.js, featuring dynamic routing, responsive design, and seamless GitHub integration for live project updates. Implements modern SEO practices, Core Web Vitals optimization, and a proper headless CMS for content management. The site achieves 100/100 Lighthouse scores across all metrics because performance matters, especially on mobile."
              technologies={['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GitHub API', 'Vercel', 'Sanity CMS']}
              isHighlight={true}
              year="2024"
              status="Live"
              link="https://github.com/codedbyduke"
            />
            
            <ProjectCard
              title="React Accessibility Component Library"
              description="Contributed critical accessibility improvements to a popular React component library used by 50,000+ developers. Enhanced keyboard navigation, screen reader support, and focus management. Added comprehensive documentation and interactive examples. The changes improved the library's accessibility score from 68% to 94% in automated testing."
              technologies={['React 18', 'TypeScript', 'Jest', 'Testing Library', 'Storybook', 'ARIA', 'Documentation']}
              year="2024"
              status="Merged"
              link="https://github.com/codedbyduke"
            />
            
            <ProjectCard
              title="Discord-Minecraft Integration Bot"
              description="A sophisticated Discord bot with real-time Minecraft server integration using Mineflayer. Features include live player statistics, server monitoring with custom alerts, automated backups, and a web dashboard for server administration. Handles 1000+ users across multiple servers with 99.9% uptime. Built with proper error handling, logging, and graceful degradation."
              technologies={['Node.js', 'Discord.js v14', 'Mineflayer', 'WebSocket', 'MongoDB', 'Express', 'Docker', 'PM2']}
              year="2023"
              status="Production"
            />
            
            <ProjectCard
              title="Smart Home Automation Suite"
              description="A comprehensive home automation system built with Python and FastAPI, controlling lights, heating, security cameras, and music systems. Features include voice control integration, mobile app, automated schedules based on occupancy, and energy usage monitoring. Reduced household energy consumption by 23% through intelligent automation."
              technologies={['Python', 'FastAPI', 'Raspberry Pi', 'MQTT', 'React Native', 'SQLite', 'Home Assistant']}
              year="2024"
              status="Personal Use"
            />

            <ProjectCard
              title="Linux System Automation Suite"
              description="A comprehensive collection of Bash scripts and Python tools for automated system maintenance, backup management, and development environment setup. Includes intelligent package management, dotfiles synchronization, automated security updates, and disaster recovery procedures. Used daily by 50+ developers in the open-source community."
              technologies={['Python 3.11', 'Bash', 'Systemd', 'Cron', 'Docker', 'Ansible', 'Git Hooks']}
              year="2023"
              status="Open Source"
              link="https://github.com/codedbyduke"
            />

            <ProjectCard
              title="Real-Time Collaborative Code Editor"
              description="A web-based code editor with real-time collaboration features, syntax highlighting for 20+ languages, integrated terminal, and Git integration. Built the entire backend WebSocket infrastructure from scratch to handle concurrent editing, conflict resolution, and user presence. Supports 100+ concurrent users with sub-100ms latency."
              technologies={['React', 'Node.js', 'WebSocket', 'Monaco Editor', 'Redis', 'PostgreSQL', 'Docker']}
              isHighlight={true}
              year="2024"
              status="Beta"
            />
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">More Projects on GitHub</h3>
              <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
                These are just the highlights. My GitHub profile contains dozens more projects, 
                from weekend experiments to serious tools used by other developers. 
                Each one represents a problem I was curious to solve or a technology I wanted to master.
              </p>
              <a
                href="https://github.com/codedbyduke"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5" />
                Explore All Projects
              </a>
            </div>
          </div>
        </section>

        {/* Philosophy & Approach */}
        <section className="py-20 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-white mb-4">My Development Philosophy</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              How I approach problems, write code, and think about technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">User-Centric Design</h3>
                </div>
                <p className="text-slate-400 leading-relaxed mb-4">
                  {`Every line of code should serve the user. I don't build features for the sake of it – 
                  I build solutions to real problems that real people face.`}
                </p>
                <p className="text-slate-500 text-sm">
                  "The best interface is no interface, but if you must have one, make it brilliant."
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-8 h-8 text-emerald-400" />
                  <h3 className="text-2xl font-bold text-white">Continuous Learning</h3>
                </div>
                <p className="text-slate-400 leading-relaxed mb-4">
                  {`Technology evolves ridiculously fast, and I love that about it. I'm always learning, 
                  always experimenting, always pushing myself to urstand things more deeply.nde`}
                </p>
                <p className="text-slate-500 text-sm">
                  "The moment you stop learning is the moment you become obsolete."
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white">Open Source First</h3>
                </div>
                <p className="text-slate-400 leading-relaxed mb-4">
                 {` The open-source community taught me everything I know. Contributing back isn't just nice – 
                  it's essential. Code should be shared, improved, and celebrated collectively.`}
                </p>
                <p className="text-slate-500 text-sm">
                  "Standing on the shoulders of giants means helping others climb up too."
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-8 h-8 text-amber-400" />
                  <h3 className="text-2xl font-bold text-white">Performance Matters</h3>
                </div>
                <p className="text-slate-400 leading-relaxed mb-4">
                  {`Fast software is better software. Every millisecond matters, especially for users on 
                  slower devices or connections. Optimization isn't optional – it's respectful.`}
                </p>
                <p className="text-slate-500 text-sm">
                  "If it's not fast enough for your grandmother's phone, it's not fast enough."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What I'm Looking For */}
        <section className="py-20 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-white mb-4">{`What I'm After`}</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {`I'm not just looking for any job – I want to join a team where I can grow, 
              contribute meaningfully, and build things that actually matter.`}
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-8 md:p-12 border border-slate-700/50">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Ideal Environment</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-slate-300 font-medium">Remote-first or flexible working</p>
                      <p className="text-slate-500 text-sm">Because great code can be written anywhere</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-slate-300 font-medium">Modern tech stack</p>
                      <p className="text-slate-500 text-sm">Tools that enhance productivity, not hinder it</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-slate-300 font-medium">Learning-focused culture</p>
                      <p className="text-slate-500 text-sm">Teams that encourage growth and experimentation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-slate-300 font-medium">Open source friendly</p>
                      <p className="text-slate-500 text-sm">Companies that contribute back to the community</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">What I Bring</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-slate-300 font-medium">Fresh perspective & energy</p>
                      <p className="text-slate-500 text-sm">Unencumbered by "that's how we've always done it"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-slate-300 font-medium">Genuine passion for the craft</p>
                      <p className="text-slate-500 text-sm">This isn't just work – it's what I love doing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-slate-300 font-medium">Strong technical foundation</p>
                      <p className="text-slate-500 text-sm">Self-taught but thorough, with room to grow</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <p className="text-slate-300 font-medium">Collaborative mindset</p>
                      <p className="text-slate-500 text-sm">Great software is built by great teams</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action - Enhanced */}
        <section className="py-20">
          <div className="text-center space-y-8">
            <h2 className="text-5xl font-bold text-white mb-6">Fancy a Chat?</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              {`Whether you're looking for a developer who brings fresh ideas, genuine enthusiasm, and proper 
              technical skills, or you just want to discuss the latest in web technology over a brew, 
              I'd love to hear from you. Let's build something brilliant together.`}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="mailto:hectorpugh08@icloud.com"
                className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25"
              >
                <Mail className="w-5 h-5" />
                Drop Me a Line
              </a>
              
              <a
                href="https://github.com/codedbyduke"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-slate-500 px-8 py-4 rounded-full text-slate-300 hover:text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5" />
                Check Out My Code
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
              <div className="text-center">
                <h4 className="text-white font-semibold mb-2">Email</h4>
                <a href="mailto:hectorpugh08@icloud.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  hectorpugh08@icloud.com
                </a>
              </div>
              <div className="text-center">
                <h4 className="text-white font-semibold mb-2">GitHub</h4>
                <a href="https://github.com/codedbyduke" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  @codedbyduke
                </a>
              </div>
              <div className="text-center">
                <h4 className="text-white font-semibold mb-2">LinkedIn</h4>
                <a href="https://www.linkedin.com/in/hectorpugh" className="text-slate-400 hover:text-cyan-400 transition-colors">
                 {`/in/hectorpugh`}
                </a>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 max-w-2xl mx-auto">
              <p className="text-slate-400 text-sm leading-relaxed">
                <strong className="text-slate-300">Quick note:</strong> {`I'm currently available for internships, 
                junior developer positions, or freelance projects. Based in England but happy to work with 
                teams anywhere (time zones permitting). Always interested in discussing interesting projects, 
                even if you're not hiring right now.`}
              </p>
            </div>
          </div>
        </section>

        <footer className="text-center text-slate-500 py-8 border-t border-slate-800 mt-20">
          <p className="mb-4">© 2025 Hector Pugh. Crafted with passion, precision, and plenty of tea.</p>
          <p className="text-sm">
            Built with React, styled with Tailwind, deployed with love. 
            <a href="https://github.com/codedbyduke" className="text-cyan-400 hover:text-cyan-300 ml-1">
              Source code available on GitHub
            </a>
          </p>
        </footer>
      </div>
<div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500">
  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
    <Zap className="w-8 h-8 text-white" />
  </div>
  <h3 className="text-2xl font-bold text-white mb-4">Fresh Perspective</h3>
  <p className="text-slate-400 leading-relaxed mb-4">
      {`Being seventeen means I've grown up with the modern web. I think mobile-first, accessibility-first,
      and user-first because that's how I've always experienced technology.`}
    </p>
    <p className="text-slate-500 text-sm">
      {`No legacy thinking here – just clean, modern approaches to every problem.`}
    </p>
</div>

<div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500">
  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
    <Terminal className="w-8 h-8 text-white" />
  </div>
  <h3 className="text-2xl font-bold text-white mb-4">Proper Technical Chops</h3>
  <p className="text-slate-400 leading-relaxed mb-4">
    I don't just use frameworks – I understand them. From React internals to Linux kernel
    parameters, I believe in knowing how things work under the hood.
  </p>
  <p className="text-slate-500 text-sm">
    Daily-driving Arch Linux has taught me more about systems than any course ever could.
  </p>
</div>

<div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500">
      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Heart className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">Genuine Passion</h3>
      <p className="text-slate-400 leading-relaxed mb-4">
        {`This isn't just a job prospect for me – it's my obsession. I code because I love it,
        contribute to open source because I believe in it, and learn continuously because I can't help myself.`}
      </p>
      <p className="text-slate-500 text-sm">
        {`When you love what you do, the quality shows in every line of code.`}
      </p>
    </div>
  </div>

        {/* Journey Timeline */}
        <section className="py-20 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-white mb-4">My Journey So Far</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From curious teenager to confident developer – here's how I've been spending my time
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
              <TimelineItem
                year="2021"
                title="First Line of Code"
                description="Started with Python during lockdown, immediately fell in love with the logic and creativity of programming. Built my first calculator and knew this was what I wanted to do."
                type="education" />
              <TimelineItem
                year="2022"
                title="Discovered Linux & Open Source"
                description="Made the switch to Linux (Ubuntu first, then Arch), discovered the beauty of open source software, and started contributing to projects. This fundamentally changed how I think about technology."
                type="education" />
              <TimelineItem
                year="2023"
                title="Full-Stack Development Focus"
                description="Dove deep into web development with React, Next.js, and modern JavaScript. Built several personal projects and started freelancing for local businesses."
                type="experience" />
              <TimelineItem
                year="2024"
                title="Advanced System Administration"
                description="Mastered Docker, CI/CD pipelines, and cloud deployment. Set up my own homelab and started managing production systems. Also became active in the developer community."
                type="experience" />
              <TimelineItem
                year="2025"
                title="Ready for Professional Challenges"
                description="Currently seeking opportunities to apply my skills in a professional environment, contribute to meaningful projects, and learn from experienced developers."
                type="experience" />
            </div>
        </section>

        {/* Technical Skills - Enhanced */}
        <section className="py-20 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              The tools and technologies I use to build exceptional software,
              organised by how much I absolutely love working with them
            </p>
          </div><div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Code className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-2xl font-bold text-white">Frontend Wizardry</h3>
                  </div>
                  <p className="text-slate-400 mb-6">
                    {`I believe the frontend is where the magic happens – it's where users actually interact with your brilliant ideas.`}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <SkillBadge skill="React & Next.js" years="2" />
                    <SkillBadge skill="TypeScript" years="2" />
                    <SkillBadge skill="Tailwind CSS" years="2" />
                    <SkillBadge skill="Framer Motion" years="1" />
                    <SkillBadge skill="JavaScript ES6+" years="3" />
                    <SkillBadge skill="Responsive Design" years="2" />
                    <SkillBadge skill="Accessibility (a11y)" years="1" />
                    <SkillBadge skill="Performance Optimization" years="1" />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Server className="w-8 h-8 text-emerald-400" />
                    <h3 className="text-2xl font-bold text-white">Backend & Infrastructure</h3>
                  </div>
                  <p className="text-slate-400 mb-6">
                    The backend is where the real work gets done. I love building robust, scalable systems that just work.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <SkillBadge skill="Python & FastAPI" years="3" />
                    <SkillBadge skill="Node.js & Express" years="2" />
                    <SkillBadge skill="Docker & Kubernetes" years="1" />
                    <SkillBadge skill="Linux Administration" years="3" />
                    <SkillBadge skill="Git & CI/CD" years="2" />
                    <SkillBadge skill="Cloud Services (AWS)" years="1" />
                    <SkillBadge skill="Database Design (SQL/NoSQL)" years="2" />
                    <SkillBadge skill="API Development" years="2" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-3">Currently Learning & Exploring</h3>
                  <p className="text-slate-400">
                    Because standing still in tech is basically going backwards
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  <SkillBadge skill="Rust Programming" />
                  <SkillBadge skill="WebAssembly" />
                  <SkillBadge skill="GraphQL" />
                  <SkillBadge skill="Blockchain Development" />
                  <SkillBadge skill="Machine Learning (PyTorch)" />
                  <SkillBadge skill="Microservices Architecture" />
                </div>
              </div>
            </div>
        </section>

        {/* Development Setup - Enhanced */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">My Battle Station</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {`Every developer needs the right tools. Here's the kit that helps me turn caffeine into code,
              optimised for both performance and that lovely satisfying clack of mechanical keys.`}
            </p>
          </div>
          <div className="space-y-12">
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
                          <span className="text-slate-300">Intel Core i7-8650U (Quad-Core, 4.2GHz boost)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-emerald-400 rounded-sm"></div>
                          <span className="text-slate-300">16GB DDR4-2400 (crucial for those 50+ browser tabs)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-purple-400 rounded-sm"></div>
                          <span className="text-slate-300">512GB NVMe SSD (Samsung 970 EVO Plus)</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Terminal className="w-5 h-5 text-cyan-400" />
                          <span className="text-slate-300">Arch Linux + i3wm (I use Arch, btw)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Code className="w-5 h-5 text-emerald-400" />
                          <span className="text-slate-300">Neovim + VSCode (best of both worlds)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-cyan-400 rounded-sm"></div>
                          <span className="text-slate-300">Dual 1080p displays (productivity essential)</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
                      <h4 className="text-lg font-semibold text-white mb-3">Why This Setup Works Brilliantly</h4>
                      <p className="text-slate-400 leading-relaxed mb-4">
                        This ThinkPad strikes the perfect balance between portability and power. The build quality is absolutely
                        legendary – this machine has survived countless late-night coding sessions, coffee spills (well, tea spills),
                        and the occasional frustrated keyboard bash when debugging particularly stubborn code.
                      </p>
                      <p className="text-slate-400 leading-relaxed">
                        Running Arch Linux keeps me close to the metal and forces me to understand how everything works.
                        The i3 window manager provides a clean, keyboard-driven workflow that maximises screen real estate
                        and minimises distractions. It's a setup that grows with you and rewards the time invested in learning it properly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-cyan-400" />
                    Terminal Setup
                  </h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li>• Alacritty (GPU-accelerated)</li>
                    <li>• Zsh with Oh My Zsh</li>
                    <li>• Starship prompt</li>
                    <li>• Tmux for session management</li>
                    <li>• Custom dotfiles on GitHub</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Code className="w-5 h-5 text-emerald-400" />
                    Development Tools
                  </h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li>• Neovim (with LSP support)</li>
                    <li>• VSCode (for complex debugging)</li>
                    <li>• Firefox Developer Edition</li>
                    <li>• Postman for API testing</li>
                    <li>• Docker Desktop alternative</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-amber-400" />
                    Productivity
                  </h4>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li>• Pomodoro timer (25min focus)</li>
                    <li>• Notion for project planning</li>
                    <li>• Spotify (lo-fi hip hop essential)</li>
                    <li>• Blue light filters (late nights)</li>
                    <li>• Plenty of Yorkshire Tea</li>
                  </ul>
                </div>
              </div>
            </div>
        </section>

        {/* Featured Projects - Enhanced */}
        <section className="py-20 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto">
              A curated selection of projects that showcase my technical abilities, problem-solving approach,
              and commitment to writing code that doesn't just work, but works beautifully.
            </p>
          </div>
        </section>
    </>
  );
}