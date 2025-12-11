import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ChevronRight, BarChart2, Cpu, 
  MessageSquare, Layout, Rocket, Users, 
  CheckCircle2, AlertCircle, ArrowRight, 
  Mail, Phone, MapPin, Clock, ShieldCheck,
  TrendingUp, Zap, Target, Brain
} from 'lucide-react';
import { useLanguage } from "@/contexts/LanguageContext";
import logoWhite from "@assets/8-removebg-preview (1)_1757780913071.png";
import LanguageSwitch from "@/components/language-switch";

/**
 * Hook para detectar cuando un elemento entra en el viewport (Scroll Reveal)
 */
const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Solo animar una vez
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible] as const;
};

/**
 * Componente Wrapper para animaciones de entrada
 */
const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/**
 * Tarjeta con efecto Spotlight (sigue el mouse)
 */
const SpotlightCard = ({ children, className = "", onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

export default function Home() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden relative">
      {/* Advanced Global Styles */}
      <style>{`
        html { scroll-behavior: smooth; }
        
        /* Grid Background Effect */
        .bg-grid {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
        }

        .glass-nav {
          background: rgba(2, 6, 23, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .text-glow {
          text-shadow: 0 0 30px rgba(99, 102, 241, 0.3);
        }

        .btn-glow {
          box-shadow: 0 0 20px rgba(79, 70, 229, 0.4);
          transition: all 0.3s ease;
        }
        .btn-glow:hover {
          box-shadow: 0 0 30px rgba(79, 70, 229, 0.6);
          transform: translateY(-2px);
        }

        /* Animated Gradient Text */
        .animate-gradient-text {
          background: linear-gradient(to right, #818cf8, #c084fc, #38bdf8, #818cf8);
          background-size: 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: animatedText 6s linear infinite;
        }

        @keyframes animatedText {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #020617; 
        }
        ::-webkit-scrollbar-thumb {
          background: #334155; 
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #475569; 
        }
      `}</style>

      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-100"></div>
        {/* Ambient colored lights */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[4000ms]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <div className="w-9 h-9 relative flex items-center justify-center">
              <img 
                src={logoWhite} 
                alt="Sparkia Lab"
                className="h-8 w-auto object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors">
              Sparkia <span className="text-indigo-500">Lab</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {['process', 'services', 'results'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all capitalize"
              >
                {t(`nav.${item}`)}
              </button>
            ))}
            <div className="w-px h-6 bg-slate-800 mx-2"></div>
            <LanguageSwitch />
            <button 
              onClick={() => scrollToSection('contact')}
              className="ml-2 bg-slate-100 text-slate-950 px-5 py-2 rounded-full text-sm font-bold hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              {t('hero.cta')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitch />
            <button className="text-white p-2" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-xl border-b border-slate-800 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen p-6' : 'max-h-0'}`}>
          <div className="flex flex-col gap-4">
            {['process', 'services', 'results'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className="text-left text-lg font-medium text-slate-300 py-2 border-b border-slate-800/50 capitalize">
                {t(`nav.${item}`)}
              </button>
            ))}
            <button onClick={() => scrollToSection('contact')} className="mt-4 bg-indigo-600 text-white px-6 py-4 rounded-xl text-center font-bold shadow-lg shadow-indigo-900/20">
              {t('hero.cta')}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 container mx-auto px-6 z-10">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-950/30 border border-indigo-500/20 text-indigo-300 text-xs md:text-sm font-semibold mb-8 hover:border-indigo-500/50 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Accepting 3 new clients for this month
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight text-white">
              {t('hero.build')} <span className="animate-gradient-text">{t('hero.digital')}</span><br />
              {t('hero.authentic')}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed antialiased">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg overflow-hidden btn-glow"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <div className="flex items-center justify-center gap-2">
                  {t('hero.cta')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <button 
                onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto px-8 py-4 bg-slate-900/50 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 rounded-full font-bold text-lg transition-all backdrop-blur-sm"
              >
                {t('nav.services')}
              </button>
            </div>
          </div>
        </Reveal>

        {/* Hero Stats */}
        <Reveal delay={200}>
          <div className="mt-24">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800 overflow-hidden">
              {[
                { val: "$90K+", label: t('stats.revenue') },
                { val: "300%", label: t('stats.roi'), color: "text-indigo-400" },
                { val: "24/7", label: t('stats.automation') },
                { val: "98%", label: t('stats.satisfaction'), color: "text-green-400" }
              ].map((stat, idx) => (
                <div key={idx} className="p-8 text-center group hover:bg-slate-800/50 transition-colors">
                  <div className={`text-3xl lg:text-4xl font-bold mb-2 ${stat.color || "text-white"} group-hover:scale-110 transition-transform duration-300`}>{stat.val}</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </header>

      {/* Before / After Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-xs font-bold tracking-[0.2em] text-indigo-500 uppercase mb-4">Transformation</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">From Improvisation to <span className="text-indigo-400">Structured Growth</span></h3>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">We transform stagnant businesses into automated and scalable growth machines.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Before Card */}
            <Reveal delay={100}>
              <SpotlightCard className="h-full p-8 lg:p-10 border-l-4 border-l-red-500/60 bg-gradient-to-b from-slate-900/80 to-slate-950/80">
                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                  <AlertCircle className="w-32 h-32" />
                </div>
                <h4 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-200">
                  <span className="text-3xl grayscale brightness-75">😰</span> Before Sparkia Lab
                </h4>
                <ul className="space-y-8 relative z-10">
                  {[
                    { icon: Target, title: "Don't know where to start", desc: "Lack of structure and clear direction for their online brand" },
                    { icon: Clock, title: "Constantly improvising", desc: "Wasting valuable time without defined processes or strategy" },
                    { icon: MessageSquare, title: "Message that doesn't position", desc: "Communication that fails to generate tangible results" },
                    { icon: TrendingUp, title: "Competition advancing", desc: "Watching others progress while they remain stagnant" }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-5 group">
                      <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:border-red-500/50 transition-colors">
                        <item.icon className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-200 mb-1 group-hover:text-red-300 transition-colors">{item.title}</h5>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>

            {/* After Card */}
            <Reveal delay={300}>
              <SpotlightCard className="h-full p-8 lg:p-10 border-l-4 border-l-green-500 bg-gradient-to-b from-indigo-950/20 to-slate-900/80 shadow-[0_0_50px_rgba(79,70,229,0.1)]">
                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                  <CheckCircle2 className="w-32 h-32 text-green-500" />
                </div>
                <h4 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                  <span className="text-3xl">✨</span> After Sparkia Lab
                </h4>
                <ul className="space-y-8 relative z-10">
                  {[
                    { icon: Target, title: "Clear and measurable strategy", desc: "A plan tailored to their specific reality and objectives" },
                    { icon: Cpu, title: "Intelligent delegation", desc: "Technical automation that frees them to focus on leading" },
                    { icon: MessageSquare, title: "Effective communication", desc: "A clear message that connects with their ideal audience" },
                    { icon: TrendingUp, title: "Sustainable growth", desc: "An organized business with peace of mind and consistent results" }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-5 group">
                      <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover:bg-green-500/20 group-hover:border-green-500/50 transition-all">
                        <item.icon className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h5 className="font-bold text-white mb-1 group-hover:text-green-300 transition-colors">{item.title}</h5>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Solutions in <br/><span className="text-indigo-400">Strategic Phases</span></h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">Each phase is implemented according to business needs and maturity, guaranteeing measurable and sustainable results.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: Brain, 
                title: t('services.web.title'), 
                desc: t('services.web.desc'),
                tags: ["Differentiator analysis", "Digital audit", "Action plan"]
              },
              { 
                icon: MessageSquare, 
                title: t('services.marketing.title'), 
                desc: t('services.marketing.desc'),
                tags: ["Value proposition", "Storytelling", "Copywriting"]
              },
              { 
                icon: Layout, 
                title: "Intelligent Web Platform", 
                desc: "Web design and development with focus on UX/UI and AI automations.",
                tags: ["UX/UI Design", "AI Automations", "CRM"]
              },
              { 
                icon: Rocket, 
                title: t('services.automation.title'), 
                desc: t('services.automation.desc'),
                tags: ["Funnel Design", "Lead Magnets", "Email Marketing"]
              },
              { 
                icon: BarChart2, 
                title: "Strategic Support", 
                desc: "Monthly mentoring with results analysis and continuous adjustments.",
                tags: ["Mentoring", "Metrics Analysis", "Tech Support"]
              },
              { 
                icon: Users, 
                title: "Social Media Mgmt", 
                desc: "Complete social media strategy with calendar and community management.",
                tags: ["Content Calendar", "Community Mgmt", "Metrics"]
              }
            ].map((service, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <SpotlightCard className="h-full p-8 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-14 h-14 bg-slate-800/50 rounded-xl flex items-center justify-center mb-6 border border-slate-700/50 group-hover:border-indigo-500/50 transition-colors">
                    <service.icon className="w-7 h-7 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white tracking-tight">{service.title}</h3>
                  <p className="text-slate-400 mb-8 text-sm leading-relaxed">{service.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-medium uppercase tracking-wider bg-slate-800/80 text-slate-300 px-3 py-1.5 rounded-md border border-slate-700/50">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center text-indigo-400 text-sm font-bold cursor-pointer hover:text-indigo-300 transition-colors mt-auto">
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="text-slate-400 hover:text-white border-b border-slate-800 hover:border-white pb-1 transition-all text-sm font-medium tracking-wide">
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Feature Spotlight: Automation */}
      <section className="py-24 bg-slate-900/30 border-y border-slate-800/50 overflow-hidden relative">
        {/* Background Glitch/Tech effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/10 to-transparent"></div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6">
                <Cpu className="w-3 h-3" /> Automation
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">24/7 Active Automation</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                System that generates leads, nurtures prospects and closes sales even while you sleep. We integrate AI-powered chatbots and automated email sequences tailored to your funnel.
              </p>
              <ul className="space-y-5">
                {["AI-powered chatbots", "Automated email marketing", "Continuous analysis and optimization"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 group-hover:text-white" />
                    </div>
                    <span className="text-slate-200 group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          
          {/* Visual Representation of Automation */}
          <Reveal delay={200}>
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 blur-[120px] opacity-20 animate-pulse"></div>
              <SpotlightCard className="p-8 border border-slate-700/50 bg-[#0B1120]/80 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-6">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="font-mono text-sm text-green-400 tracking-wider">SYSTEM_ACTIVE</span>
                  </div>
                  <Cpu className="text-slate-600 animate-[spin_10s_linear_infinite]" />
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: "Leads generated today", val: "+23", icon: Users, color: "text-indigo-400", bg: "bg-indigo-500/10" },
                    { label: "Emails sent", val: "847", icon: Mail, color: "text-blue-400", bg: "bg-blue-500/10" },
                    { label: "Conversions", val: "12", icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-500/10" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-slate-800/30 p-4 rounded-xl flex justify-between items-center border border-slate-800 hover:border-slate-600 transition-colors">
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-semibold">{stat.label}</div>
                        <div className="text-2xl font-bold text-white tracking-tight">{stat.val}</div>
                      </div>
                      <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center`}>
                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Simulated Code/Log */}
                <div className="mt-6 pt-6 border-t border-slate-800 font-mono text-xs text-slate-500 space-y-2">
                  <div className="flex justify-between">
                    <span>&gt; Initiating sequence...</span>
                    <span className="text-slate-600">09:41:22</span>
                  </div>
                  <div className="flex justify-between">
                    <span>&gt; Analyzing metrics...</span>
                    <span className="text-slate-600">09:41:23</span>
                  </div>
                  <div className="flex justify-between text-green-500/70">
                    <span>&gt; Optimization complete.</span>
                    <span className="text-green-900">09:41:24</span>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Process</h2>
              <p className="text-slate-400 text-lg">{t('process.subtitle')}</p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", week: "Week 1", title: t('process.step1.title'), icon: Brain },
                { step: "02", week: "Weeks 2-3", title: t('process.step2.title'), icon: Target },
                { step: "03", week: "Weeks 4-8", title: t('process.step3.title'), icon: Cpu },
                { step: "04", week: "Weeks 9-12", title: t('process.step4.title'), icon: Rocket }
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 150}>
                  <div className="relative z-10 group h-full">
                    <div className="bg-[#020617] border border-slate-800 p-8 rounded-2xl h-full hover:border-indigo-500/50 transition-all duration-300 flex flex-col items-center text-center shadow-2xl hover:shadow-indigo-900/20 hover:-translate-y-2">
                      <div className="w-16 h-16 bg-slate-900 rounded-2xl border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-indigo-500 group-hover:bg-indigo-500/10 shadow-lg relative">
                        <div className="absolute -inset-2 bg-indigo-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <item.icon className="w-7 h-7 text-indigo-400 group-hover:text-indigo-300 relative z-10" />
                        <span className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center bg-indigo-600 text-white text-xs font-bold rounded-full border-4 border-[#020617]">{item.step}</span>
                      </div>
                      <div className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3">{item.week}</div>
                      <h3 className="text-xl font-bold text-white mb-4 leading-tight">{item.title}</h3>
                      <div className="mt-auto w-full pt-4 border-t border-slate-800/50">
                        <span className="text-xs text-slate-500 group-hover:text-indigo-400 transition-colors">See details below</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Reveal delay={600}>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                {t('nav.start')}
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Results / Stats Section - Dashboard Style */}
      <section id="results" className="py-24 bg-slate-900/20 border-t border-slate-800/50">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="border border-slate-800 bg-slate-950/80 rounded-3xl overflow-hidden backdrop-blur-xl relative">
               <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
               <div className="p-10 md:p-16 text-center relative z-10">
                 <h2 className="text-3xl md:text-4xl font-bold mb-16">Results That Speak for Themselves</h2>
                 
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
                   <div className="relative group">
                     <div className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tighter">$90K+</div>
                     <div className="text-indigo-400 text-sm font-bold uppercase tracking-widest">{t('stats.revenue')}</div>
                     <div className="text-slate-500 text-xs mt-2">Average Annual per client</div>
                     {/* Decorative line */}
                     <div className="absolute right-0 top-1/4 h-1/2 w-px bg-slate-800 hidden md:block"></div>
                   </div>
                   
                   <div className="relative group">
                     <div className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tighter group-hover:text-indigo-300 transition-colors">300%</div>
                     <div className="text-indigo-400 text-sm font-bold uppercase tracking-widest">{t('stats.roi')}</div>
                     <div className="text-slate-500 text-xs mt-2">Average in 12 months</div>
                     <div className="absolute right-0 top-1/4 h-1/2 w-px bg-slate-800 hidden md:block"></div>
                   </div>
                   
                   <div className="relative group">
                     <div className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tighter group-hover:text-green-300 transition-colors">98%</div>
                     <div className="text-indigo-400 text-sm font-bold uppercase tracking-widest">{t('stats.satisfaction')}</div>
                     <div className="text-slate-500 text-xs mt-2">5-star rating</div>
                     <div className="absolute right-0 top-1/4 h-1/2 w-px bg-slate-800 hidden md:block"></div>
                   </div>
                   
                   <div className="relative group">
                     <div className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tighter">50+</div>
                     <div className="text-indigo-400 text-sm font-bold uppercase tracking-widest">{t('stats.clients')}</div>
                     <div className="text-slate-500 text-xs mt-2">Transformed successfully</div>
                   </div>
                 </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Offer / CTA Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Background glow behind form */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left Column: Copy */}
            <div className="lg:col-span-5 space-y-10">
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  {t('cta.title')} <br />
                  <span className="text-indigo-400">{t('cta.business')}</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {t('cta.subtitle')}
                </p>
                
                <div className="relative overflow-hidden bg-slate-900 border border-indigo-500/30 p-8 rounded-2xl group hover:border-indigo-500/60 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">LAUNCH OFFER</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3 text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" /> 
                      <span>Free Strategic Diagnosis <span className="text-slate-600 line-through text-sm ml-2">($500)</span></span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" /> 
                      <span>30% discount on first project</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" /> 
                      <span>Results guarantee in 6 months</span>
                    </li>
                  </ul>
                  <div className="flex items-center gap-2 text-amber-400 text-sm font-bold animate-pulse bg-amber-400/10 p-3 rounded-lg w-fit border border-amber-400/20">
                    <Clock className="w-4 h-4" /> Only 2 spaces available this month
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="space-y-6 pt-4 border-t border-slate-800">
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm">Why choose Sparkia Lab?</h4>
                  {[
                    { title: "Personalized Strategy", desc: "No generic formulas. Adapted to your reality." },
                    { title: "Intelligent Automation", desc: "AI that works 24/7 generating leads." },
                    { title: "Guaranteed ROI", desc: "If ROI doesn't improve in 6 months, we work for free." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full group-hover:scale-150 transition-transform" />
                      <div>
                        <strong className="text-slate-200 block mb-1 group-hover:text-indigo-300 transition-colors">{item.title}</strong>
                        <span className="text-slate-500 text-sm leading-snug">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <Reveal delay={300}>
                <div className="bg-[#0f172a]/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-slate-700/50 shadow-2xl relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Request your Free Diagnosis</h3>
                        <p className="text-slate-400 text-sm">Fill out the form and we'll contact you in less than 24 hours.</p>
                      </div>
                      <div className="hidden md:flex w-10 h-10 bg-indigo-600 rounded-full items-center justify-center shadow-lg shadow-indigo-500/30">
                         <Mail className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name *</label>
                          <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-700" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email *</label>
                          <input type="email" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-700" placeholder="john@company.com" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone</label>
                          <input type="tel" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-700" placeholder="+1 (555) 000-0000" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Business Type</label>
                          <div className="relative">
                            <select className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-300 focus:outline-none focus:border-indigo-500 transition-all appearance-none cursor-pointer">
                              <option>Select an option</option>
                              <option>Professional Services</option>
                              <option>E-commerce</option>
                              <option>SaaS / Technology</option>
                              <option>Consulting</option>
                              <option>Other</option>
                            </select>
                            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 rotate-90 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Current Monthly Revenue</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {['< $5K', '$5K - $15K', '$15K - $50K', '> $50K'].map((range, idx) => (
                            <label key={idx} className="cursor-pointer group">
                              <input type="radio" name="revenue" className="peer sr-only" />
                              <div className="text-center px-2 py-3 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 text-sm peer-checked:bg-indigo-600 peer-checked:text-white peer-checked:border-indigo-500 peer-checked:shadow-lg peer-checked:shadow-indigo-500/20 transition-all group-hover:border-slate-600">
                                {range}
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Biggest Challenge *</label>
                        <textarea className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-500 h-28 resize-none placeholder:text-slate-700" placeholder="Tell us what is holding you back..."></textarea>
                      </div>

                      <div className="flex items-start gap-3 pt-2">
                        <div className="relative flex items-center">
                          <input type="checkbox" className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-slate-700 bg-slate-900 checked:border-indigo-500 checked:bg-indigo-600 transition-all" />
                          <CheckCircle2 className="pointer-events-none absolute h-3 w-3 text-white opacity-0 peer-checked:opacity-100 left-0.5" />
                        </div>
                        <span className="text-xs text-slate-500 leading-tight">I agree to receive communications from Sparkia Lab and the privacy policy. My data will be protected and never shared with third parties. *</span>
                      </div>

                      <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl shadow-[0_10px_30px_rgba(79,70,229,0.3)] transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative">Request My Free Diagnosis</span>
                      </button>
                      
                      <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                        <ShieldCheck className="w-3 h-3 text-green-500" /> Your data is 100% secure and protected
                      </div>
                    </form>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020617] border-t border-slate-800 pt-16 pb-10 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                   <img 
                    src={logoWhite} 
                    alt="Sparkia Lab"
                    className="h-6 w-auto object-contain"
                  />
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">Sparkia <span className="text-indigo-500">Lab</span></span>
              </div>
              <p className="text-slate-500 text-sm max-w-sm mb-6 leading-relaxed">
                Strategic digital agency that helps entrepreneurs and small businesses build an authentic, automated, and consistent digital presence with AI.
              </p>
              <div className="flex items-center gap-2 text-slate-400 text-sm border border-slate-800 px-3 py-1.5 rounded-full w-fit">
                <span>🇺🇸 EN</span>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-3 text-slate-500 text-sm">
                <li className="hover:text-indigo-400 cursor-pointer transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-700 rounded-full"></div> Strategic Diagnosis</li>
                <li className="hover:text-indigo-400 cursor-pointer transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-700 rounded-full"></div> AI Web Development</li>
                <li className="hover:text-indigo-400 cursor-pointer transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-700 rounded-full"></div> Marketing Automation</li>
                <li className="hover:text-indigo-400 cursor-pointer transition-colors flex items-center gap-2"><div className="w-1 h-1 bg-slate-700 rounded-full"></div> Social Media Management</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li className="flex items-center gap-3 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-indigo-500 transition-colors">
                    <Phone className="w-4 h-4 text-indigo-500" /> 
                  </div>
                  +57 321 693 1671
                </li>
                <li className="flex items-center gap-3 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-indigo-500 transition-colors">
                    <Mail className="w-4 h-4 text-indigo-500" />
                  </div>
                  hello@sparkialab.com
                </li>
                <li className="flex items-center gap-3 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-indigo-500 transition-colors">
                    <MapPin className="w-4 h-4 text-indigo-500" />
                  </div>
                  Miami, FL
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-600 text-xs font-medium">
              © 2025 Sparkia Lab. All rights reserved.
            </div>
            <div className="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-wider">
               <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
