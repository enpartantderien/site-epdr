
// Fix: Import React to provide the 'React' namespace for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  image: string;
  stats: { label: string; value: string }[];
  description: string;
  longDescription?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  gallery?: string[];
}

export interface EditHistoryItem {
  timestamp: number;
  imageUrl: string;
  prompt: string;
}