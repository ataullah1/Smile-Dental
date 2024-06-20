import { useContext, useEffect, useState } from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../../provider/LanguageContext';
import { MdGTranslate } from 'react-icons/md';

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext);
  // console.log(userDta);

  useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScrolled);
    return () => {
      window.removeEventListener('scroll', handleScrolled);
    };
  }, []);
  // console.log(scrolled);
  return (
    // <div className="fixed left-0 top-0 z-50 w-full" >
    <div
      className={
        scrolled
          ? 'w-full fixed top-0 left-0 z-50 py-3 pb-4 bg-[#0b162537] shadow-xl shadow-[#343a4268] duration-300'
          : 'w-full fixed top-0 left-0 z-50 pt-5 sm:pt-8 pb-4 duration-300 border-b border-b-slate-200 bg-[#ffffffef]'
      }
    >
      <div className=" flex justify-between items-center w-11/12 mx-auto">
        <button className="text-3xl font-bold w-36 h-14 rounded-lg border-2 text-slate-600 border-slate-700">
          Logo
        </button>
        <div className="hidden md:flex gap-5 items-center navigation">
          <NavLink
            className="py-2 px-5 rounded-md shadow-md shadow-slate-200 text-slate-500 font-medium hover:shadow-lg hover:shadow-slate-200 hover:scale-110 duration-300"
            to={'/'}
          >
            {language === 'en' ? (
              'Home'
            ) : (
              <span className="font-bang">হোম</span>
            )}
          </NavLink>
        </div>
        <div className="flex items-center gap-4 relative">
          <button
            onClick={toggleLanguage}
            className="py-2 w-36 text-center justify-center bg-blue-500 text-white rounded flex items-center gap-2"
          >
            <span className="text-2xl">
              <MdGTranslate />
            </span>
            {language === 'en' ? (
              'Bangla'
            ) : (
              <span className="font-bang">ইংলিশ</span>
            )}
          </button>
          <button className="py-2 px-6 bg-pClr rounded-md font-bold">
            Appointment
          </button>

          <button onClick={() => setMenu(!menu)} className="text-4xl md:hidden">
            <CgMenuRightAlt />
          </button>
          {menu && (
            <div className="absolute top-12 w-44 rounded-md p-5 right-0 bg-slate-600 md:hidden flex flex-col gap-5 items-center navigation">
              <NavLink
                onClick={() => setMenu(!menu)}
                className="py-2 w-full text-center rounded-md shadow-md shadow-slate-200 text-white font-medium hover:shadow-lg hover:shadow-slate-200 hover:scale-110 duration-300"
                to={'/'}
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setMenu(!menu)}
                className="py-2 w-full text-center rounded-md shadow-md shadow-slate-200 text-white font-medium  hover:shadow-lg hover:shadow-slate-200 hover:scale-110 duration-300"
                font-medium
                to={'/today-menu'}
              >
                Today Menu
              </NavLink>
              <NavLink
                onClick={() => setMenu(!menu)}
                className="py-2 w-full text-center rounded-md shadow-md shadow-slate-200 text-white font-medium  hover:shadow-lg hover:shadow-slate-200 hover:scale-110 duration-300"
                font-medium
                to={'/my-orders'}
              >
                My Order
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
