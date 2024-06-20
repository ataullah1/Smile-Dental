import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Load language from local storage or default to Bengali ('bn')
    return localStorage.getItem('language') || 'bn';
  });

  // Save language preference to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'bn' ? 'en' : 'bn'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };

LanguageProvider.propTypes = {
  children: PropTypes.node,
};
