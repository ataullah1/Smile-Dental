import { useContext } from 'react';
import { LanguageContext } from '../provider/LanguageContext';

const useLang = () => {
  const { language } = useContext(LanguageContext);
  if (language === 'en') {
    return false;
  }
  return true;
};

export default useLang;
