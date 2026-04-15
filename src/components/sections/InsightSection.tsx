import type { FC } from 'react';
import { theme } from '../../styles/theme';
import { insight } from '../../constants/content';
import type { StatCard } from '../../types';

const InsightSection: FC = () => {
  return (
    <section 
      className="mx-auto text-center"
      style={{ padding: '0 24px 96px', maxWidth: '760px' }}
    >
      <div 
        className="p-[40px] text-left mb-12 border border-l-4"
        style={{ 
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
          borderLeftColor: theme.colors.primary,
          borderRadius: theme.borderRadius.card,
        }}
      >
        <p 
          className="font-medium leading-[1.6] text-white mb-4 italic"
          style={{ fontSize: 'clamp(18px, 2.5vw, 24px)' }}
        >
          "{insight.quote}"
        </p>
        <div className="text-sm" style={{ color: theme.colors.muted }}>
          — <strong className="font-medium" style={{ color: theme.colors.accent }}>SA Graphic Designer</strong>, Johannesburg
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {insight.stats.map((stat: StatCard, index: number) => (
          <div 
            key={index}
            className="border p-[24px 16px] text-center"
            style={{ 
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.border,
              borderRadius: '12px',
              padding: '24px 16px'
            }}
          >
            <div 
              className="font-bold tracking-[-1px] mb-1.5"
              style={{ fontSize: '32px', color: theme.colors.primary }}
            >
              {stat.value}
            </div>
            <div className="text-[13px] leading-[1.4]" style={{ color: theme.colors.muted }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsightSection;
