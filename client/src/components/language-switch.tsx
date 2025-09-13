import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface LanguageSwitchProps {
  variant?: 'header' | 'footer';
}

export default function LanguageSwitch({ variant = 'header' }: LanguageSwitchProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: t('language.english'), flag: '🇺🇸' },
    { code: 'es', name: t('language.spanish'), flag: '🇪🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (langCode: 'en' | 'es') => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  const baseClasses = variant === 'header' 
    ? 'text-white/90 hover:text-white border-white/20 hover:border-white/40'
    : 'text-gray-400 hover:text-white border-gray-600 hover:border-gray-400';

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`
          flex items-center space-x-2 px-3 py-2 rounded-lg border transition-all duration-200
          ${baseClasses}
        `}
        data-testid="button-language-switch"
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="text-sm font-medium">{currentLanguage?.code.toUpperCase()}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-lg min-w-[120px] z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => selectLanguage(lang.code as 'en' | 'es')}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors duration-200
                  ${language === lang.code 
                    ? 'bg-primary/20 text-primary' 
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }
                  ${languages.indexOf(lang) === 0 ? 'rounded-t-lg' : ''}
                  ${languages.indexOf(lang) === languages.length - 1 ? 'rounded-b-lg' : ''}
                `}
                data-testid={`button-select-${lang.code}`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
                {language === lang.code && (
                  <svg className="w-4 h-4 ml-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}