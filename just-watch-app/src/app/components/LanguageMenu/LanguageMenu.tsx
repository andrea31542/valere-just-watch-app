import { useState } from 'react';
import { languageMenu, Languages } from '@/app/context/LanguageContext';
import { useStore } from '@/app/store/store';

const LanguageMenu = () => {
  const { language, setLanguage } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: Languages) => {
    setLanguage(lang);
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <div className='relative inline-block text-left'>
      <div>
        <button
          type='button'
          className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 '
          onClick={() => setIsOpen(!isOpen)}
        >
          {Object.keys(languageMenu)
            .find(
              (key) =>
                languageMenu[key as keyof typeof languageMenu] === language
            )
            ?.toUpperCase() || 'Language'}
        </button>
      </div>

      {isOpen && (
        <div className='absolute right-0 z-10 mt-2 w-[4rem] rounded-md shadow-lg bg-white ring-1 ring-black'>
          <div className='py-1' role='menu' aria-labelledby='options-menu'>
            {Object.entries(languageMenu).map(([key, lang]) => (
              <button
                key={key}
                className={`block px-4 py-2 text-sm ${
                  language === lang ? 'font-bold' : ''
                }`}
                onClick={() => handleLanguageChange(lang)}
              >
                {key.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageMenu;
