import type { ValueProp, Step, StatCard, SocialProofItem, Badge } from '../types';

export const navigation = {
  logo: 'N1',
  wordmark: 'NEXTONE',
  cta: 'Get Early Access',
};

export const hero = {
  eyebrow: 'Built for SA Creatives',
  title: [
    'Your followers already',
    'love your work.',
    "It's time they paid for it."
  ],
  subheading: 'NextOne is the platform SA creatives have been waiting for — sell your digital products, get paid in Rands, own your audience.',
  badges: [
    { text: 'No PayPal', isNegative: true },
    { text: 'No Gumroad', isNegative: true },
    { text: 'No middlemen', isNegative: true },
    { text: 'Just you and your buyers', isNegative: false },
  ] as Badge[],
  cta: 'I want early access',
  note: 'Free early access · Lifetime reduced fees · No spam',
};

export const socialProof: SocialProofItem[] = [
  { icon: 'sa', label: 'Built in South Africa' },
  { icon: 'rand', label: 'Payments in Rands' },
  { icon: 'whatsapp', label: 'WhatsApp delivery' },
  { icon: 'clock', label: 'Set up in 5 minutes' },
];

export const valueProps = {
  label: 'What NextOne does',
  title: ['Stop posting for exposure.', 'Start posting for income.'],
  items: [
    {
      icon: 'card',
      iconBg: 'rgba(255,59,48,0.12)',
      title: 'Sell in Rands. No PayPal required.',
      body: 'Upload your templates, presets, eBooks or illustrations and set your own price. Your buyers pay in Rands, directly to you — no currency conversion, no blocked accounts.',
    },
    {
      icon: 'whatsapp-colored',
      iconBg: 'rgba(0,224,255,0.10)',
      title: 'Delivery straight to WhatsApp.',
      body: 'The moment someone buys your work, they get their download link on WhatsApp. No Google Drive links. No chasing EFTs. No awkward DMs. Just instant delivery.',
    },
    {
      icon: 'users',
      iconBg: 'rgba(0,200,83,0.10)',
      title: 'Your audience belongs to you.',
      body: 'Know exactly who your buyers are, what they love, and how to reach them. Your fans. Your data. Your business. Always. No algorithm decides your reach.',
    },
  ] as ValueProp[],
};

export const insight = {
  quote: "I've been sending people to my Behance for two years and never earned a cent from it. I didn't even know I could.",
  attribution: '— SA Graphic Designer, Johannesburg',
  stats: [
    { value: 'R0', label: 'earned from Behance views by most SA creatives' },
    { value: '3+', label: 'platforms needed just to sell one digital product in SA' },
    { value: '1', label: 'link is all you need on NextOne to start earning today' },
  ] as StatCard[],
};

export const howItWorks = {
  label: 'How it works',
  title: ['From sign up to first sale', 'in one evening.'],
  steps: [
    {
      number: '01',
      title: 'Create your NextOne page',
      description: 'Sign up and set up your creator profile in under 5 minutes. Our AI writes your bio for you — just answer 3 quick questions. You get a clean link: nextone.co.za/yourname',
    },
    {
      number: '02',
      title: 'Upload your first product',
      description: 'Templates, presets, eBooks, illustrations, photography packs — if it is a file, you can sell it. Set your price in Rands. We help you price it right.',
    },
    {
      number: '03',
      title: 'Share your link',
      description: 'Put your NextOne link in your Instagram bio, TikTok, WhatsApp status. Everywhere you already have an audience — now they can actually pay you.',
    },
    {
      number: '04',
      title: 'Wake up to a WhatsApp notification',
      description: "'You just made R150 on NextOne.' Your buyer gets their file instantly on WhatsApp. You get paid directly. That is it.",
    },
  ] as Step[],
};

export const waitlistForm = {
  eyebrow: 'Early Access',
  title: 'Be among the first.',
  subtext: 'SA creatives on the waitlist get free early access and a lifetime reduced platform fee. We will WhatsApp you personally when we are ready for you.',
  fields: {
    fullName: { label: 'Your name', placeholder: 'Lerato Dlamini' },
    instagramHandle: { label: 'Instagram handle', placeholder: '@yourhandle' },
    whatsappNumber: { label: 'WhatsApp number', placeholder: '+27 82 000 0000' },
  },
  cta: 'I want early access',
  success: {
    title: 'You are on the list.',
    message: 'We will WhatsApp you personally when NextOne is ready for you. Tell a creative friend — the more of us, the stronger we are.',
  },
  footerNote: 'No spam. No nonsense. Just NextOne.',
};

export const footer = {
  tagline: 'Built in South Africa 🇿🇦 · For SA creatives. By SA creatives.',
};
