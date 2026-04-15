import type { FC } from 'react';
import { theme } from '../../styles/theme';
import { waitlistForm } from '../../constants/content';
import { useWaitlistForm } from '../../hooks/useWaitlistForm';

const WaitlistForm: FC = () => {
  const { formData, isSubmitted, handleChange, handleSubmit } = useWaitlistForm();

  return (
    <section id="waitlist" className="mx-auto" style={{ padding: '0 24px 96px', maxWidth: '520px' }}>
      <div 
        className="border"
        style={{ 
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
          borderRadius: theme.borderRadius.formCard,
          padding: '48px 40px'
        }}
      >
        {isSubmitted ? (
          <div className="text-center py-5">
            <div 
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ backgroundColor: 'rgba(0, 200, 83, 0.12)', color: theme.colors.success }}
            >
              <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
                <path d="M5 14L11 20L23 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-[22px] font-bold text-white mb-2.5">
              {waitlistForm.success.title}
            </h3>
            <p className="text-[15px] leading-[1.6]" style={{ color: theme.colors.muted }}>
              {waitlistForm.success.message}
            </p>
          </div>
        ) : (
          <>
            <div 
              className="font-semibold uppercase mb-3"
              style={{ color: theme.colors.accent, fontSize: '12px', letterSpacing: '2.5px' }}
            >
              {waitlistForm.eyebrow}
            </div>
            <h2 
              className="font-bold tracking-tight text-white mb-2.5"
              style={{ fontSize: '28px' }}
            >
              {waitlistForm.title}
            </h2>
            <p className="text-[15px] leading-[1.6] mb-8" style={{ color: theme.colors.muted }}>
              {waitlistForm.subtext}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label 
                  htmlFor="fullName"
                  className="font-medium tracking-tight"
                  style={{ fontSize: '13px', color: theme.colors.muted }}
                >
                  {waitlistForm.fields.fullName.label}
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={waitlistForm.fields.fullName.placeholder}
                  className="w-full text-white outline-none transition-colors"
                  style={{ 
                    backgroundColor: theme.colors.background,
                    border: `1px solid ${theme.colors.border}`,
                    borderRadius: '10px',
                    padding: '14px 16px',
                    fontSize: '15px'
                  }}
                  onFocus={(e) => e.target.style.borderColor = theme.colors.accent}
                  onBlur={(e) => e.target.style.borderColor = theme.colors.border}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label 
                  htmlFor="instagramHandle"
                  className="font-medium tracking-tight"
                  style={{ fontSize: '13px', color: theme.colors.muted }}
                >
                  {waitlistForm.fields.instagramHandle.label}
                </label>
                <input
                  id="instagramHandle"
                  type="text"
                  name="instagramHandle"
                  required
                  value={formData.instagramHandle}
                  onChange={handleChange}
                  placeholder={waitlistForm.fields.instagramHandle.placeholder}
                  className="w-full text-white outline-none transition-colors"
                  style={{ 
                    backgroundColor: theme.colors.background,
                    border: `1px solid ${theme.colors.border}`,
                    borderRadius: '10px',
                    padding: '14px 16px',
                    fontSize: '15px'
                  }}
                  onFocus={(e) => e.target.style.borderColor = theme.colors.accent}
                  onBlur={(e) => e.target.style.borderColor = theme.colors.border}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label 
                  htmlFor="whatsappNumber"
                  className="font-medium tracking-tight"
                  style={{ fontSize: '13px', color: theme.colors.muted }}
                >
                  {waitlistForm.fields.whatsappNumber.label}
                </label>
                <input
                  id="whatsappNumber"
                  type="tel"
                  name="whatsappNumber"
                  required
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  placeholder={waitlistForm.fields.whatsappNumber.placeholder}
                  className="w-full text-white outline-none transition-colors"
                  style={{ 
                    backgroundColor: theme.colors.background,
                    border: `1px solid ${theme.colors.border}`,
                    borderRadius: '10px',
                    padding: '14px 16px',
                    fontSize: '15px'
                  }}
                  onFocus={(e) => e.target.style.borderColor = theme.colors.accent}
                  onBlur={(e) => e.target.style.borderColor = theme.colors.border}
                />
              </div>

              <button
                id="submit-waitlist"
                type="submit"
                className="w-full flex items-center justify-center gap-2 font-semibold transition-all border-none cursor-pointer mt-2"
                style={{ 
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.textPrimary,
                  padding: '16px',
                  borderRadius: theme.borderRadius.button,
                  fontSize: '16px',
                  transition: theme.transitions.default
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.colors.primaryHover}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.colors.primary}
              >
                {waitlistForm.cta}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </>
        )}
        {!isSubmitted && (
          <p className="mt-4 text-center leading-[1.6]" style={{ fontSize: '13px', color: theme.colors.muted }}>
            {waitlistForm.footerNote}
          </p>
        )}
      </div>
    </section>
  );
};

export default WaitlistForm;
