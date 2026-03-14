"use client";

import React, { useState, useEffect } from 'react';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Navigation } from '@/components/Navigation';
import { Sidebar } from '@/components/Sidebar';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function CyberDefenseWebsite() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">
      <AnimatedBackground />

      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onMenuClick={() => setSidebarOpen(true)}
      />

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <HeroSection scrollY={scrollY} />
      <FeaturesSection />
      <CTASection />
      <Footer />

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(10deg); 
          }
        }
      `}</style>
    </div>
  );
}