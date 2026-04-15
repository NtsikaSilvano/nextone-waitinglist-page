import type { FC } from 'react';
import { theme } from '../../styles/theme';
import { valueProps } from '../../constants/content';
import type { ValueProp } from '../../types';

const PropIcon: FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case 'card':
      return (
        <svg viewBox="0 0 22 22" fill="none" className="w-[22px] h-[22px]">
          <path d="M11 2L13.5 7.5L19.5 8.27L15.25 12.14L16.5 18L11 15.27L5.5 18L6.75 12.14L2.5 8.27L8.5 7.5L11 2Z" stroke={theme.colors.primary} strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      );
    case 'whatsapp-colored':
      return (
        <svg viewBox="0 0 22 22" fill="none" className="w-[22px] h-[22px]">
          <path d="M18 2H4a2 2 0 00-2 2v12a2 2 0 002 2h4l3 3 3-3h4a2 2 0 002-2V4a2 2 0 00-2-2z" stroke={theme.colors.accent} strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      );
    case 'users':
      return (
        <svg viewBox="0 0 22 22" fill="none" className="w-[22px] h-[22px]">
          <circle cx="11" cy="8" r="3" stroke={theme.colors.success} strokeWidth="1.5"/>
          <path d="M5 19c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke={theme.colors.success} strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M17 5L18.5 6.5L22 3" stroke={theme.colors.success} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
};

const ValueProps: FC = () => {
  return (
    <section 
      className="mx-auto" 
      style={{ padding: theme.spacing.sectionPadding, maxWidth: '1080px' }}
    >
      <div 
        className="text-center font-semibold uppercase mb-4"
        style={{ color: theme.colors.accent, fontSize: '12px', letterSpacing: '2.5px' }}
      >
        {valueProps.label}
      </div>
      <h2 
        className="text-center font-bold tracking-[-1px] text-white"
        style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: '1.2', marginBottom: '56px' }}
      >
        {valueProps.title[0]}<br />{valueProps.title[1]}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {valueProps.items.map((prop: ValueProp, index: number) => (
          <div 
            key={index} 
            className="transition-colors"
            style={{ 
              backgroundColor: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: theme.borderRadius.card,
              padding: '32px 28px',
              transition: theme.transitions.default
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = theme.colors.surfaceTwo}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = theme.colors.border}
          >
            <div 
              className="w-11 h-11 flex items-center justify-center mb-5"
              style={{ 
                backgroundColor: prop.iconBg,
                borderRadius: '12px'
              }}
            >
              <PropIcon icon={prop.icon} />
            </div>
            <h3 className="text-lg font-semibold mb-2.5 text-white">
              {prop.title}
            </h3>
            <p className="text-[15px] leading-[1.7]" style={{ color: theme.colors.muted }}>
              {prop.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueProps;
