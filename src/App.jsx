import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageSquare, X, ArrowUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showChatBadge, setShowChatBadge] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-paper font-body text-ink overflow-x-hidden newsprint-dot-grid">
      {/* Sticky Layout Wrapper */}
      <Header />
      
      {/* Main Newspaper Page Content */}
      <main className="w-full">
        <Hero />
        <About />
        <Services />
        <Team />
        <Projects />
        <Pricing />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      
      <Footer />

      {/* Floating Messenger/Chat Button (Playful Geometric + Newsprint Accent) */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-40 select-none">
        
        {/* Floating Chat Button */}
        {showChatBadge && (
          <div className="bg-editorial-yellow border-2 border-ink text-ink font-mono text-[9px] font-black uppercase tracking-wider py-1.5 px-3 shadow-hard flex items-center gap-2 hover:-translate-y-1 transition-all">
            <span>Weather Status: Active</span>
            <button 
              onClick={() => setShowChatBadge(false)} 
              className="hover:text-editorial-red text-neutral-500 font-bold ml-1.5"
              aria-label="Dismiss weather badge"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        )}

        <a
          href="https://m.me/buildwithus" // Messenger Link mockup
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-editorial-red text-paper border-2 border-ink flex items-center justify-center transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard shadow-hard-sm active:translate-x-1 active:translate-y-1 active:shadow-none"
          title="Chat with our team"
          aria-label="Open Messenger chat"
        >
          <MessageSquare className="h-6 w-6 text-paper" strokeWidth={2.5} />
        </a>
      </div>
    </div>
  );
}
