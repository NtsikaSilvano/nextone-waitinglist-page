import type { FC } from 'react';
import { theme } from '../../styles/theme';
import { navigation } from '../../constants/content';

const Footer: FC = () => {
  return (
    <footer 
      className="mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
      style={{ 
        padding: '32px 24px', 
        maxWidth: '1080px',
        borderTop: `1px solid ${theme.colors.border}`
      }}
    >
      <div className="flex items-center gap-[10px]">
        <div 
          className="w-[36px] h-[36px] flex items-center justify-center font-bold"
          style={{ 
            backgroundColor: theme.colors.primary, 
            borderRadius: theme.borderRadius.input,
            fontSize: '15px',
            color: theme.colors.textPrimary,
            letterSpacing: '-0.5px'
          }}
        >
          {navigation.logo}
        </div>
        <span 
          className="font-bold uppercase tracking-[2px]"
          style={{ fontSize: '17px', color: theme.colors.textPrimary }}
        >
          {navigation.wordmark}
        </span>
      </div>

      <div className="flex items-center gap-[6px] text-[13px]" style={{ color: theme.colors.muted }}>
        <span>Built in South Africa</span>
        <span className="text-[16px]">🇿🇦</span>
        <span>· For SA creatives. By SA creatives.</span>
      </div>
    </footer>
  );
};

export default Footer;
