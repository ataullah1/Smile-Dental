import { useContext } from 'react';
import { LanguageContext } from '../../provider/LanguageContext';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  return (
    <footer className="text-white">
      <div className="w-full bg-[#091E3E] py-16">
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div></div>
        </div>
      </div>

      <div className="bg-[#051225] py-4">
        <div className="w-11/12 mx-auto flex items-center justify-between gap-5 flex-col md:flex-row">
          <p className="">
            Developed by{' '}
            <a
              target="_blank"
              href="https://md-ataullah.web.app/"
              className="underline italic font-semibold tracking-wide"
            >
              Md Ataullah
            </a>
          </p>
          <p className="">
            {language === 'en' ? (
              '  Copyright © 2024 - All right reserved by'
            ) : (
              <span className="bang">
                কপিরাইট © 2024 - সমস্ত অধিকার সংরক্ষিত
              </span>
            )}{' '}
            <a
              target="_blank"
              href="https://www.facebook.com/bd.smiledental"
              className="italic font-semibold tracking-wide underline"
            >
              {language === 'en' ? (
                'Smile Dental Care'
              ) : (
                <span className="bang">স্মাইল ডেন্টাল কেয়ার</span>
              )}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
