'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { getItem } from '../api/localStorage';

export type Languages = 'en-EN' | 'hr-HR' | 'es-ES';

export const languageMenu = {
  en: 'en-EN',
  hr: 'hr-HR',
  es: 'es-ES',
} satisfies Record<string, Languages>;

type LanguageContextType = {
  language: Languages;
  switchLanguage: (language: Languages) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Languages>(
    (getItem('language') as Languages) || 'hr-HR'
  );

  const switchLanguage = (language: Languages) => {
    setLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
