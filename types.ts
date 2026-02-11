
// Fix: Added React import to resolve missing namespace error for ReactNode
import React from 'react';

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

export interface PainPoint {
  title: string;
  description: string;
  icon: React.ReactNode;
}