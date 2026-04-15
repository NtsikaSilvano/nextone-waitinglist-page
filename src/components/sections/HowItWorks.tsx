import type { FC } from 'react';
import { theme } from '../../styles/theme';
import { howItWorks } from '../../constants/content';
import type { Step } from '../../types';

const HowItWorks: FC = () => {
  return (
    <section 
      className="mx-auto"
      style={{ padding: '0 24px 96px', maxWidth: '760px' }}
    >
      <div 
        className="text-center font-semibold uppercase mb-4"
        style={{ color: theme.colors.accent, fontSize: '12px', letterSpacing: '2.5px' }}
      >
        {howItWorks.label}
      </div>
      <h2 
        className="text-center font-bold tracking-[-1px] text-white"
        style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: '1.2', marginBottom: '48px' }}
      >
        {howItWorks.title[0]}<br />{howItWorks.title[1]}
      </h2>

      <div className="flex flex-col gap-0">
        {howItWorks.steps.map((step: Step, index: number) => (
          <div 
            key={index}
            className="flex gap-6 py-[32px] border-b"
            style={{ 
              borderColor: theme.colors.border,
              borderBottomWidth: index === howItWorks.steps.length - 1 ? 0 : '1px'
             }}
          >
            <div 
              className="w-10 h-10 min-w-[40px] flex items-center justify-center font-bold"
              style={{ 
                backgroundColor: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: '12px',
                fontSize: '14px',
                color: theme.colors.primary
              }}
            >
              {step.number}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-[15px] leading-[1.7]" style={{ color: theme.colors.muted }}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
