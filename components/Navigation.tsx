"use client";

import React, { useState, useEffect } from 'react';
import { Shield, Menu, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface NavigationProps {
  activeSection: number;
  setActiveSection: (index: number) => void;
  onMenuClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  setActiveSection,
  onMenuClick
}) => {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { en: 'Home', th: 'หน้าแรก' },
    { en: 'Services', th: 'บริการ' },
    { en: 'Technology', th: 'เทคโนโลยี' },
    { en: 'Contact', th: 'ติดต่อ' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-30 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-xl border-b border-blue-500/30 shadow-lg shadow-blue-500/10' : 'bg-slate-950/80 backdrop-blur-lg border-b border-blue-500/20'
      }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-blue-400 animate-pulse" />
          <span className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {lang === "en" && "CYBER DEFENSE"}
            {lang === "th" && "ไซเบอร์ ดีเฟนส์"}
          </span>
        </div>

        <div className="hidden md:flex gap-8">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSection(idx)}
              className={`transition-all relative ${activeSection === idx ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                }`}
            >
              {lang === "en" && item.en}
              {lang === "th" && item.th}
              {activeSection === idx && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-blue-400 to-cyan-400" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-lg transition-all group"
          >
            <Globe className="w-5 h-5 text-blue-400 group-hover:rotate-180 transition-transform duration-300" />
            <span className="text-sm font-medium text-gray-300">
              {lang === 'en' ? 'EN' : 'ไทย'}
            </span>
          </button>

          {/* Menu Button */}
          <button
            onClick={onMenuClick}
            className="p-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-lg transition-all"
          >
            <Menu className="w-6 h-6 text-blue-400" />
          </button>
        </div>
      </div>
    </nav>
  );
};