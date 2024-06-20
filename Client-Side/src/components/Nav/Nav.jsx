import { useContext, useEffect, useState } from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../../provider/LanguageContext';
import { MdGTranslate } from 'react-icons/md';
import useLang from '../../Hooks/useLang';
import { FaAngleDown } from 'react-icons/fa';

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toggleLanguage } = useContext(LanguageContext);
  const lang = useLang();
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
      className={`w-full fixed top-0 left-0 z-[900] duration-300
      ${
        scrolled
          ? 'shadow-xl shadow-[#ffffff70] opacity-90 bg-[#ffffffef] py-2'
          : 'py-3 bg-[#ffffffef]'
      }`}
    >
      <div className=" flex justify-between items-center w-11/12 mx-auto">
        <button className="text-3xl font-bold w-36 h-12 rounded-lg border-2 text-slate-600 border-slate-700">
          Logo
        </button>
        <div className="hidden md:flex gap-5 items-center navigation text-slate-900 text-lg">
          <NavLink className="py-2 px-2 hover:text-pClr" to={'/'}>
            {lang ? <span className="bang">হোম</span> : 'Home'}
          </NavLink>
          <NavLink className="py-2 px-2 hover:text-pClr" to={'/branches'}>
            {lang ? <span className="bang">শাখা সমূহ</span> : 'Branches'}
          </NavLink>
          <NavLink className="py-2 px-2 hover:text-pClr" to={'/treatments'}>
            {lang ? <span className="bang">চিকিৎসা</span> : 'Treatments'}
          </NavLink>
          <button className="py-2 px-2 hover:text-pClr flex items-center gap-2">
            {lang ? <span className="bang">অন্যান্য</span> : 'Others'}
            <span className="text-xl text-slate-600">
              <FaAngleDown />
            </span>
          </button>
        </div>
        <div className="flex items-center gap-4 relative">
          {/* Language Toggle btn */}
          <button
            onClick={toggleLanguage}
            className="py-2 w-20 font-bold text-center justify-center border border-slate-300 text-slate-800 rounded flex items-center gap-2"
          >
            <span className="text-2xl">
              <MdGTranslate />
            </span>
            {lang ? <span className="bang">বাং</span> : 'EN'}
          </button>
          {/* appoinment btn */}
          <button className="py-2 px-6 bg-[#02a4ba] text-white rounded-md font-bold">
            {lang ? (
              <span className="bang">অ্যাপয়েন্টমেন্ট</span>
            ) : (
              'Appointment'
            )}
          </button>

          {/* Menu Btn */}
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
