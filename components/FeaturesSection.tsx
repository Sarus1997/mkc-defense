"use client";

import React from 'react';
import { Shield, Rocket, Lock, Radio } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const FeaturesSection: React.FC = () => {
  const { lang } = useLanguage();

  const icons = [
    <Shield className="w-8 h-8" key="shield" />,
    <Rocket className="w-8 h-8" key="rocket" />,
    <Lock className="w-8 h-8" key="lock" />,
    <Radio className="w-8 h-8" key="radio" />
  ];

  const features = [
    {
      titleEn: 'Advanced Protection',
      titleTh: 'การป้องกันขั้นสูง',
      descEn: 'Military-grade security protocols protecting your digital assets 24/7',
      descTh: 'โปรโตคอลความปลอดภัยระดับทหารปกป้องทรัพย์สินดิจิทัลของคุณตลอด 24/7'
    },
    {
      titleEn: 'Rapid Response',
      titleTh: 'การตอบสนองอย่างรวดเร็ว',
      descEn: 'Lightning-fast threat detection and neutralization systems',
      descTh: 'ระบบตรวจจับและกำจัดภัยคุกคามที่รวดเร็วเหมือนสายฟ้าแลบ'
    },
    {
      titleEn: 'Encrypted Systems',
      titleTh: 'ระบบเข้ารหัส',
      descEn: 'End-to-end encryption ensuring maximum data confidentiality',
      descTh: 'การเข้ารหัสแบบ end-to-end รับประกันความลับของข้อมูลสูงสุด'
    },
    {
      titleEn: 'Real-time Monitoring',
      titleTh: 'การตรวจสอบแบบเรียลไทม์',
      descEn: 'Continuous surveillance of all network entry points',
      descTh: 'การเฝ้าระวังอย่างต่อเนื่องของจุดเข้าเครือข่ายทั้งหมด'
    }
  ];

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {lang === "en" && "Defense Systems"}
          {lang === "th" && "ระบบป้องกัน"}
        </h2>
        <p className="text-center text-gray-400 mb-16 text-xl">
          {lang === "en" && "Military-Grade Protection Technology"}
          {lang === "th" && "เทคโนโลยีการป้องกันระดับทหาร"}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-b from-slate-900/80 to-slate-950/80 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:border-blue-400/50 transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] hover:-translate-y-2"
              style={{ animation: `fadeInUp 0.8s ease-out ${idx * 0.1}s both` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500/20 transition-all group-hover:scale-110">
                  {icons[idx]}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {lang === "en" && feature.titleEn}
                  {lang === "th" && feature.titleTh}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {lang === "en" && feature.descEn}
                  {lang === "th" && feature.descTh}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};