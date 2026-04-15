import type { FC } from 'react';
import { theme } from '../../styles/theme';
import { hero } from '../../constants/content';

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection: FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section 
      className="relative flex items-center justify-center text-center overflow-hidden"
      style={{ padding: theme.spacing.heroPadding, minHeight: '100vh' }}
    >
      {/* Background Glow */}
      <div 
        className="absolute top-[20%] left-1/2 -translate-x-1/2 pointer-events-none z-0"
        style={{ 
          width: '600px', 
          height: '600px', 
          background: 'radial-gradient(circle, rgba(255, 59, 48, 0.08) 0%, transparent 70%)' 
        }}
      />
      
      <div className="relative z-10 w-full" style={{ maxWidth: '720px' }}>
        <div 
          className="inline-flex items-center gap-1.5 font-semibold uppercase"
          style={{ 
            color: theme.colors.accent,
            fontSize: '12px',
            letterSpacing: '2.5px',
            marginBottom: '24px'
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.colors.accent }} />
          {hero.eyebrow}
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.colors.accent }} />
        </div>
        
        <h1 
          className="font-bold text-white"
          style={{ 
            fontSize: 'clamp(36px, 6vw, 64px)', 
            lineHeight: '1.1', 
            letterSpacing: '-1.5px',
            marginBottom: '24px'
          }}
        >
          {hero.title[0]}<br />
          {hero.title[1]}<br />
          <span style={{ color: theme.colors.primary }}>{hero.title[2]}</span>
        </h1>

        <p 
          className="mx-auto leading-[1.7]"
          style={{ 
            color: theme.colors.muted, 
            fontSize: 'clamp(16px, 2vw, 19px)',
            maxWidth: '560px',
            marginBottom: '16px'
          }}
        >
          {hero.subheading}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {hero.badges.map((badge, index) => (
            <div 
              key={index}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-[13px] border"
              style={{ 
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
                color: theme.colors.muted,
                borderRadius: theme.borderRadius.pill 
              }}
            >
              <span className="font-bold" style={{ color: badge.isNegative ? theme.colors.primary : theme.colors.success }}>
                {badge.isNegative ? '✕' : '✓'}
              </span>
              {badge.text}
            </div>
          ))}
        </div>

        <button
          onClick={onCtaClick}
          className="inline-flex items-center gap-2 font-semibold transition-all border-none cursor-pointer"
          style={{ 
            backgroundColor: theme.colors.primary,
            color: theme.colors.textPrimary,
            padding: '16px 32px',
            borderRadius: theme.borderRadius.button,
            fontSize: '16px',
            transition: theme.transitions.default
          }}
        >
          {hero.cta}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <p className="mt-4 text-[13px]" style={{ color: theme.colors.muted }}>
          {hero.note}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
