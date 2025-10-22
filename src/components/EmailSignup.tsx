'use client';

import React, { useState } from 'react';
import { Button } from './Button';

interface EmailSignupProps {
  placeholder?: string;
  buttonText?: string;
  onSuccess?: () => void;
}

export const EmailSignup: React.FC<EmailSignupProps> = ({
  placeholder = "Enter your email address",
  buttonText = "Sign up",
  onSuccess
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/email-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        onSuccess?.();
      } else {
        throw new Error(data.error || 'Failed to sign up');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Failed to sign up. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-jidi-mint rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-jidi-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-jidi-charcoal mb-2">
          Thank you for signing up!
        </h3>
        <p className="text-gray-600 text-sm">
          We&apos;ll notify you when the JIDI AI Summit is announced.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-jidi-aqua focus:border-transparent focus-ring"
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading || !email}
          className="sm:w-auto"
        >
          {isLoading ? 'Signing up...' : buttonText}
        </Button>
      </div>
    </form>
  );
};
