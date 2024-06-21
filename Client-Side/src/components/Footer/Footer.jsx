import { Link } from 'react-router-dom';
import useLang from '../../Hooks/useLang';
import { BsArrowRight } from 'react-icons/bs';

const Footer = () => {
  const lang = useLang();
  return (
    <footer className="text-white">
      <div className="w-full bg-[#091E3E] py-16">
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h1 className="text-3xl font-bold bang text-slate-50 pb-6">
              {lang ? <span className="bang">সরাসরি লিঙ্ক</span> : 'Quick Link'}
            </h1>
            <div className="flex flex-col gap-2">
              <Link
                to={'/'}
                className="flex items-center gap-2 hover:text-pClr hover:translate-x-2  duration-300"
              >
                <span className="text-xl text-pClr">
                  <BsArrowRight />
                </span>
                {lang ? 'হোম' : 'Home'}
              </Link>
              <Link
                to={'/treatments'}
                className="flex items-center gap-2 hover:text-pClr hover:translate-x-2  duration-300"
              >
                <span className="text-xl text-pClr">
                  <BsArrowRight />
                </span>
                {lang ? 'চিকিৎসা' : 'Treatments'}
              </Link>
              <Link
                to={'/about'}
                className="flex items-center gap-2 hover:text-pClr hover:translate-x-2  duration-300"
              >
                <span className="text-xl text-pClr">
                  <BsArrowRight />
                </span>
                {lang ? 'আমাদের সম্পর্কে' : 'About Us'}
              </Link>
              <Link
                to={'/contact'}
                className="flex items-center gap-2 hover:text-pClr hover:translate-x-2  duration-300"
              >
                <span className="text-xl text-pClr">
                  <BsArrowRight />
                </span>
                {lang ? 'যোগাযোগ' : 'Contact'}
              </Link>
              <Link
                to={'/blogs'}
                className="flex items-center gap-2 hover:text-pClr hover:translate-x-2  duration-300"
              >
                <span className="text-xl text-pClr">
                  <BsArrowRight />
                </span>
                {lang ? 'প্রবন্ধ পড়ুন' : 'Read Blogs'}
              </Link>
            </div>
          </div>
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
            {lang ? (
              <span className="bang">
                কপিরাইট © ২০২৪ - সমস্ত অধিকার সংরক্ষিত
              </span>
            ) : (
              '  Copyright © 2024 - All right reserved by'
            )}
            <a
              target="_blank"
              href="https://www.facebook.com/bd.smiledental"
              className="italic font-semibold tracking-wide underline"
            >
              {lang ? (
                <span className="bang">স্মাইল ডেন্টাল কেয়ার</span>
              ) : (
                'Smile Dental Care'
              )}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
