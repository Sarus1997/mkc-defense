/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect } from 'react';
import { Eye, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const VisitorCounter: React.FC = () => {
  const { lang } = useLanguage();
  const [totalVisits, setTotalVisits] = useState<number>(0);
  const [todayVisits, setTodayVisits] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get today's date as a key
    const today = new Date().toDateString();
    const lastVisitDate = localStorage.getItem('lastVisitDate');

    // Get total visits
    const storedTotalVisits = parseInt(localStorage.getItem('totalVisits') || '0');

    // Get today's visits
    let storedTodayVisits = parseInt(localStorage.getItem('todayVisits') || '0');

    // Reset today's count if it's a new day
    if (lastVisitDate !== today) {
      storedTodayVisits = 0;
      localStorage.setItem('lastVisitDate', today);
    }

    // Increment counters
    const newTotalVisits = storedTotalVisits + 1;
    const newTodayVisits = storedTodayVisits + 1;

    // Save to localStorage
    localStorage.setItem('totalVisits', newTotalVisits.toString());
    localStorage.setItem('todayVisits', newTodayVisits.toString());

    // Update state
    setTotalVisits(newTotalVisits);
    setTodayVisits(newTodayVisits);
    setIsLoading(false);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center gap-6 py-6">
        <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="inline-flex flex-wrap justify-center items-center gap-6 py-6 px-8 bg-slate-900/50 backdrop-blur-sm border border-blue-500/30 rounded-xl">
      {/* Total Visits */}
      <div className="flex items-center gap-3 group">
        <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
          <Users className="w-6 h-6 text-blue-400" />
        </div>
        <div className="text-left">
          <div className="text-2xl font-bold text-blue-400">
            {formatNumber(totalVisits)}
          </div>
          <div className="text-sm text-gray-400">
            {lang === "en" && "Total Visitors"}
            {lang === "th" && "ผู้เข้าชมทั้งหมด"}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-12 w-px bg-blue-500/30" />

      {/* Today's Visits */}
      <div className="flex items-center gap-3 group">
        <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
          <Eye className="w-6 h-6 text-cyan-400" />
        </div>
        <div className="text-left">
          <div className="text-2xl font-bold text-cyan-400">
            {formatNumber(todayVisits)}
          </div>
          <div className="text-sm text-gray-400">
            {lang === "en" && "Today's Visitors"}
            {lang === "th" && "ผู้เข้าชมวันนี้"}
          </div>
        </div>
      </div>
    </div>
  );
};