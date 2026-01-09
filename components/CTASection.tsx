"use client";

import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const CTASection: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-950/50 to-cyan-950/50 backdrop-blur-sm border-2 border-blue-500/50 rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-pulse" />
          <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-cyan-400 relative z-10 animate-bounce" />
          <h3 className="text-4xl font-bold mb-4 relative z-10">
            {lang === "en" && "Ready to Secure Your Systems?"}
            {lang === "th" && "พร้อมที่จะรักษาความปลอดภัยระบบของคุณ?"}
          </h3>
          <p className="text-xl text-gray-300 mb-8 relative z-10">
            {lang === "en" && "Join thousands of organizations protected by our defense systems"}
            {lang === "th" && "เข้าร่วมกับหลายพันองค์กรที่ได้รับการปกป้องโดยระบบป้องกันของเรา"}
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-lg hover:shadow-[0_0_40px_rgba(59,130,246,0.8)] transition-all transform hover:scale-105 active:scale-95 relative z-10">
            {lang === "en" && "Activate Protection Now"}
            {lang === "th" && "เปิดใช้งานการป้องกันทันที"}
          </button>
        </div>
      </div>
    </section>
  );
};