"use client";

import React from 'react';
import { Shield, Rocket, Anchor } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroSectionProps {
  scrollY: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ scrollY }) => {
  const { lang } = useLanguage();

  const stats = [
    {
      value: '99.9%',
      labelEn: 'Uptime',
      labelTh: 'เวลาทำงาน'
    },
    {
      value: '1M+',
      labelEn: 'Threats Blocked',
      labelTh: 'ภัยคุกคามที่ถูกบล็อก'
    },
    {
      value: '24/7',
      labelEn: 'Protection',
      labelTh: 'การป้องกัน'
    },
    {
      value: '< 1ms',
      labelEn: 'Response Time',
      labelTh: 'เวลาตอบสนอง'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Main Shield Logo */}
        <div className="relative inline-block mb-8 group">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
          <div className="relative">
            <Shield
              className="w-48 h-48 mx-auto text-blue-400 drop-shadow-[0_0_50px_rgba(59,130,246,0.8)] transition-transform duration-300 hover:scale-110"
              style={{
                transform: `translateY(${scrollY * 0.1}px) rotateY(${scrollY * 0.1}deg)`,
                filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.8))'
              }}
            />
            {/* Orbiting Elements */}
            <Rocket
              className="absolute top-0 right-0 w-12 h-12 text-cyan-400"
              style={{
                animation: 'float 3s ease-in-out infinite',
                animationDelay: '0s'
              }}
            />
            <Anchor
              className="absolute bottom-0 left-0 w-12 h-12 text-blue-300"
              style={{
                animation: 'float 3s ease-in-out infinite',
                animationDelay: '1.5s'
              }}
            />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
          style={{ animation: 'fadeInUp 1s ease-out' }}>
          {lang === "en" && "CYBER DEFENSE"}
          {lang === "th" && "ไซเบอร์ ดีเฟนส์"}
        </h1>
        <p className="text-2xl md:text-3xl text-blue-200 mb-4"
          style={{ animation: 'fadeInUp 1s ease-out 0.2s both' }}>
          {lang === "en" && "Command Center"}
          {lang === "th" && "ศูนย์บัญชาการ"}
        </p>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          style={{ animation: 'fadeInUp 1s ease-out 0.4s both' }}>
          {lang === "en" && "Elite Digital Protection Systems | Advanced Threat Neutralization | 24/7 Surveillance"}
          {lang === "th" && "ระบบป้องกันดิจิทัลระดับสูง | การกำจัดภัยคุกคามขั้นสูง | เฝ้าระวัง 24/7"}
        </p>

        <div className="flex gap-6 justify-center flex-wrap"
          style={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}>
          <button className="px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all transform hover:scale-105 active:scale-95">
            {lang === "en" && "Deploy Protection"}
            {lang === "th" && "เปิดใช้งานการป้องกัน"}
          </button>
          <button className="px-8 py-4 border-2 border-blue-500 rounded-lg font-semibold text-lg hover:bg-blue-500/10 transition-all transform hover:scale-105 active:scale-95">
            {lang === "en" && "View Systems"}
            {lang === "th" && "ดูระบบ"}
          </button>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/30 rounded-lg p-6 hover:border-blue-400 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transform hover:-translate-y-1"
              style={{ animation: `fadeInUp 1s ease-out ${0.8 + idx * 0.1}s both` }}
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-gray-400">
                {lang === "en" && stat.labelEn}
                {lang === "th" && stat.labelTh}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};