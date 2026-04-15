import type { FC } from 'react';
import { theme } from '../../styles/theme';
import { navigation } from '../../constants/content';

interface NavbarProps {
  onCtaClick: () => void;
}

const Navbar: FC<NavbarProps> = ({ onCtaClick }) => {
  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-[100] px-[24px] flex items-center justify-between"
      style={{ 
        height: theme.spacing.navHeight,
        background: 'rgba(18, 18, 18, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${theme.colors.border}`
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

      <button
        onClick={onCtaClick}
        className="bg-transparent font-semibold cursor-pointer transition-all border"
        style={{ 
          color: theme.colors.primary,
          borderColor: theme.colors.primary,
          padding: '8px 18px',
          borderRadius: theme.borderRadius.button,
          fontSize: '14px',
          transition: theme.transitions.default
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = theme.colors.primary;
          e.currentTarget.style.color = theme.colors.textPrimary;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = theme.colors.primary;
        }}
      >
        {navigation.cta}
      </button>
    </nav>
  );
};

export default Navbar;
