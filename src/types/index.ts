export interface WaitlistFormData {
  fullName: string;
  instagramHandle: string;
  whatsappNumber: string;
}

export interface ValueProp {
  icon: string;
  title: string;
  body: string;
  iconBg: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface StatCard {
  value: string;
  label: string;
}

export interface SocialProofItem {
  icon: string;
  label: string;
}

export interface Badge {
  text: string;
  isNegative?: boolean;
}
