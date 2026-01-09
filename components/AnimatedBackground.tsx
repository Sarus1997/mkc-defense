import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 opacity-20 pointer-events-none">
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
        animation: 'pulse 4s ease-in-out infinite'
      }} />
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
          style={{
            top: `${20 + i * 20}%`,
            left: '-100%',
            right: '-100%',
            animation: `slide ${3 + i}s linear infinite`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
    </div>
  );
};