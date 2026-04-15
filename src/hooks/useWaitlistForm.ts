import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import type { WaitlistFormData } from '../types';

export const useWaitlistForm = () => {
  const [formData, setFormData] = useState<WaitlistFormData>({
    fullName: '',
    instagramHandle: '',
    whatsappNumber: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate submission
    console.log('Submitting waitlist form:', formData);
    setIsSubmitted(true);
  };

  return {
    formData,
    isSubmitted,
    handleChange,
    handleSubmit,
  };
};
