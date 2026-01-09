"use client";

import React from 'react';
import { Shield, Lock, Rocket, Radio, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: number;
  setActiveSection: (index: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  activeSection,
  setActiveSection
}) => {
  const { lang } = useLanguage();

  const menuItems = [
    {
      labelEn: 'Home',
      labelTh: 'หน้าแรก',
      icon: <Shield className="w-5 h-5" />
    },
    {
      labelEn: 'Services',
      labelTh: 'บริการ',
      icon: <Lock className="w-5 h-5" />
    },
    {
      labelEn: 'Technology',
      labelTh: 'เทคโนโลยี',
      icon: <Rocket className="w-5 h-5" />
    },
    {
      labelEn: 'Contact',
      labelTh: 'ติดต่อ',
      icon: <Radio className="w-5 h-5" />
    }
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-slate-950/95 backdrop-blur-xl border-l border-blue-500/30 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-blue-400">
                {lang === "en" && "MENU"}
                {lang === "th" && "เมนู"}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-blue-500/10 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-400 hover:text-white" />
            </button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveSection(idx);
                  onClose();
                }}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-lg transition-all ${activeSection === idx
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                  : 'text-gray-400 hover:bg-blue-500/10 hover:text-white'
                  }`}
              >
                {item.icon}
                <span className="font-medium">
                  {lang === "en" && item.labelEn}
                  {lang === "th" && item.labelTh}
                </span>
              </button>
            ))}
          </nav>

          <div className="mt-12 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <h3 className="text-blue-400 font-semibold mb-2">
              {lang === "en" && "System Status"}
              {lang === "th" && "สถานะระบบ"}
            </h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>
                  {lang === "en" && "Security Level:"}
                  {lang === "th" && "ระดับความปลอดภัย:"}
                </span>
                <span className="text-green-400">
                  {lang === "en" && "Maximum"}
                  {lang === "th" && "สูงสุด"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>
                  {lang === "en" && "Active Shields:"}
                  {lang === "th" && "โล่พลังงานที่ทำงาน:"}
                </span>
                <span className="text-blue-400">4/4</span>
              </div>
              <div className="flex justify-between">
                <span>
                  {lang === "en" && "Threats Blocked:"}
                  {lang === "th" && "ภัยคุกคามที่บล็อก:"}
                </span>
                <span className="text-cyan-400">1,247</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};