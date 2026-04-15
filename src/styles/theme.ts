export const theme = {
  colors: {
    primary: '#FF3B30',
    primaryHover: '#E0332A',
    background: '#121212',
    surface: '#1E1E1E',
    surfaceTwo: '#2A2A2A',
    textPrimary: '#FFFFFF',
    textSecondary: '#B3B3B3',
    accent: '#00E0FF',
    success: '#00C853',
    border: '#2A2A2A',
    muted: '#B3B3B3',
  },
  borderRadius: {
    input: '8px',
    button: '12px',
    card: '16px',
    formCard: '24px',
    pill: '100px',
  },
  spacing: {
    sectionPadding: '96px 24px',
    heroPadding: '120px 24px 80px',
    navHeight: '64px',
  },
  fonts: {
    primary: "'Space Grotesk', sans-serif",
  },
  transitions: {
    default: 'all 0.2s ease',
  }
} as const;
