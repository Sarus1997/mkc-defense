"use client";

import React from 'react';
import { Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { VisitorCounter } from '@/components/VisitorCounter';

export const Footer: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <footer className="relative border-t border-blue-500/20 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-blue-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {lang === "en" && "CYBER DEFENSE"}
            {lang === "th" && "ไซเบอร์ ดีเฟนส์"}
          </span>
        </div>
        <p className="text-gray-400 mb-4">
          {lang === "en" && "Elite Digital Protection | Secured by Advanced Military Technology"}
          {lang === "th" && "การป้องกันดิจิทัลชั้นยอด | ปลอดภัยด้วยเทคโนโลยีทหารขั้นสูง"}
        </p>

        {/* Visitor Counter */}
        <VisitorCounter />

        <p className="text-gray-600 text-sm mt-4">
          {lang === "en" && "© 2026 Cyber Defense Command Center. All systems operational."}
          {lang === "th" && "© 2026 ศูนย์บัญชาการไซเบอร์ดีเฟนส์ ระบบทั้งหมดพร้อมใช้งาน"}
        </p>
      </div>
    </footer>
  );
};
