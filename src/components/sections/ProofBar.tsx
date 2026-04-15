import type { FC } from 'react';
import { theme } from '../../styles/theme';
import { socialProof } from '../../constants/content';
import type { SocialProofItem } from '../../types';

const ProofIcon: FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case 'sa':
      return (
        <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px]">
          <path d="M9 1l2.09 4.26L16 6.27l-3.5 3.41.83 4.82L9 12.25l-4.33 2.25.83-4.82L2 6.27l4.91-.71L9 1z" fill={theme.colors.primary}/>
        </svg>
      );
    case 'rand':
      return (
        <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px]">
          <rect x="2" y="4" width="14" height="10" rx="2" stroke={theme.colors.accent} strokeWidth="1.5"/>
          <path d="M5 8h8M5 11h5" stroke={theme.colors.accent} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'whatsapp':
      return (
        <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px]">
          <path d="M9 2C5.13 2 2 5.13 2 9s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm-1 10L5 9l1.41-1.41L8 10.17l4.59-4.58L14 7l-6 5z" fill={theme.colors.success}/>
        </svg>
      );
    case 'clock':
      return (
        <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px]">
          <circle cx="9" cy="9" r="7" stroke={theme.colors.muted} strokeWidth="1.5"/>
          <path d="M9 5v4l3 3" stroke={theme.colors.muted} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    default:
      return null;
  }
};

const ProofBar: FC = () => {
  return (
    <div 
      className="flex items-center justify-center gap-10 flex-wrap py-[20px] px-[24px]"
      style={{ 
        backgroundColor: theme.colors.surface,
        borderTop: `1px solid ${theme.colors.border}`,
        borderBottom: `1px solid ${theme.colors.border}`,
      }}
    >
      {socialProof.map((item: SocialProofItem, index) => (
        <div key={index} className="flex items-center gap-[10px] text-sm" style={{ color: theme.colors.muted }}>
          <div className="flex items-center justify-center w-[20px] h-[20px]">
            <ProofIcon icon={item.icon} />
          </div>
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default ProofBar;
