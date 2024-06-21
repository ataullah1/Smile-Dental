import { useContext, useState } from 'react';
import { CgClose, CgMenuRightAlt } from 'react-icons/cg';
import { Link, NavLink } from 'react-router-dom';
import { LanguageContext } from '../../provider/LanguageContext';
import { MdGTranslate } from 'react-icons/md';
import useLang from '../../Hooks/useLang';
import { FaChevronDown } from 'react-icons/fa';
import { PropTypes } from 'prop-types';

const Nav = ({ scrolled }) => {
  const [menu, setMenu] = useState(false);
  const { toggleLanguage } = useContext(LanguageContext);
  const lang = useLang();
  // console.log(userDta);

  // console.log(scrolled);
  return (
    // <div className="fixed left-0 top-0 z-50 w-full" >
    <div
      className={`w-full fixed top-0 left-0 z-[900] duration-300 bg-[#ffffff]
      ${scrolled ? 'shadow-xl shadow-[#4a484845] py-2' : 'py-3'}`}
    >
      <div className=" flex justify-between items-center w-11/12 mx-auto">
        <button className="text-3xl font-bold w-28 sm:w-36 h-12 rounded-lg border-2 text-slate-600 border-slate-700">
          Logo
        </button>
        <div className="hidden lg:flex lg:gap-2 xl:gap-4 items-center navigation text-slate-900 text-lg">
          <NavLink className="py-2 px-2 hover:text-pClr" to={'/'}>
            {lang ? <span className="bang">হোম</span> : 'Home'}
          </NavLink>

          <div className="group relative cursor-pointer py-2 px-2">
            <button className="flex items-center gap-2 hover:text-pClr">
              {lang ? <span className="bang">শাখা সমূহ</span> : 'Branches'}
              <span className="hover:pt-2 hover:text-pClr duration-150 text-slate-600">
                <FaChevronDown />
              </span>
            </button>
            <div className="invisible absolute top-9 pt-5 pb-2 left-1/2 -translate-x-1/2 z-[900] flex w-52 flex-col bg-[#F5F4F3] rounded-b-md group-hover:visible text-center dropdownMenu">
              <NavLink className="py-2 px-2 hover:text-pClr" to={'/jatrabari'}>
                {lang ? (
                  <span className="bang">ঢাকা যাত্রাবাড়ী শাখা</span>
                ) : (
                  'Dhaka Jatrabari Branch'
                )}
              </NavLink>
              <NavLink className="py-2 px-2 hover:text-pClr" to={'/mirpur'}>
                {lang ? (
                  <span className="bang">ঢাকা মিরপুর শাখা</span>
                ) : (
                  'Dhaka Mirpur Branch'
                )}
              </NavLink>
              <NavLink className="py-2 px-2 hover:text-pClr" to={'/barishal'}>
                {lang ? (
                  <span className="bang">বরিশাল চৌমাথা শাখা</span>
                ) : (
                  'Barishal Branch'
                )}
              </NavLink>
              <NavLink className="py-2 px-2 hover:text-pClr" to={'/dawatola'}>
                {lang ? (
                  <span className="bang">বামনা-ডৌয়াতলা শাখা</span>
                ) : (
                  'Dawatola Branch'
                )}
              </NavLink>
            </div>
          </div>

          <NavLink className="py-2 px-2 hover:text-pClr" to={'/treatments'}>
            {lang ? <span className="bang">চিকিৎসা</span> : 'Treatments'}
          </NavLink>

          <div className="group relative cursor-pointer py-2 px-2">
            <button className="flex items-center gap-2 hover:text-pClr">
              {lang ? <span className="bang">অন্যান্য</span> : 'Others'}
              <span className="hover:pt-2 hover:text-pClr duration-150 text-slate-600">
                <FaChevronDown />
              </span>
            </button>
            <div className="invisible absolute top-9 pt-5 pb-2 left-1/2 -translate-x-1/2 z-[900] flex w-44 flex-col bg-[#F5F4F3] rounded-b-md group-hover:visible text-center dropdownMenu">
              <NavLink className="py-2 px-2 hover:text-pClr" to={'/blogs'}>
                {lang ? (
                  <span className="bang">প্রবন্ধ পড়ুন</span>
                ) : (
                  'Read Blogs'
                )}
              </NavLink>
              <NavLink className="py-2 px-2 hover:text-pClr" to={'/dentists'}>
                {lang ? (
                  <span className="bang">আমাদের ডেন্টিসগণ</span>
                ) : (
                  'Our Dentists'
                )}
              </NavLink>
              <NavLink
                className="py-2 px-2 hover:text-pClr"
                to={'/appointment'}
              >
                {lang ? (
                  <span className="bang">অ্যাপয়েন্টমেন্ট</span>
                ) : (
                  'Appointment'
                )}
              </NavLink>
              <NavLink className="py-2 px-2 hover:text-pClr" to={'/carrer'}>
                {lang ? <span className="bang">আমাদের চাকরি</span> : 'Our Jobs'}
              </NavLink>
            </div>
          </div>

          <NavLink className="py-2 px-2 hover:text-pClr" to={'/about'}>
            {lang ? <span className="bang">আমাদের সম্পর্কে</span> : 'About Us'}
          </NavLink>
          <NavLink className="py-2 px-2 hover:text-pClr" to={'/contact'}>
            {lang ? <span className="bang">যোগাযোগ</span> : 'Contact'}
          </NavLink>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 relative">
          {/* Language Toggle btn */}
          <button
            onClick={toggleLanguage}
            className="py-1.5 px-1 sm:w-20 font-bold text-center justify-center border border-slate-300 text-slate-800 rounded flex items-center gap-2 mr-1"
          >
            <span className="sm:text-2xl">
              <MdGTranslate />
            </span>
            {lang ? 'EN' : <span className="bang">বাং</span>}
          </button>
          {/* appoinment btn */}
          <Link
            to={'/login'}
            className="py-2 px-4 xl:px-6 bg-pClr2 text-white rounded-md font-bold"
          >
            {lang ? <span className="bang">লগইন</span> : 'Log in'}
          </Link>

          {/* Menu Btn */}
          <button
            onClick={() => setMenu(!menu)}
            className="text-4xl lg:hidden duration-300"
          >
            {menu ? <CgClose /> : <CgMenuRightAlt />}
          </button>

          {menu && (
            <div className="absolute top-12 w-48 rounded-md p-5 right-0 bg-[#F5F4F3] lg:hidden flex flex-col items-center navigation text-slate-900 text-lg">
              <span
                onClick={() => setMenu(!menu)}
                className="rounded-full absolute top-2 left-2 border p-1 border-slate-700 text-xl"
              >
                <CgClose />
              </span>

              <NavLink
                onClick={() => setMenu(!menu)}
                className="py-2 px-2 hover:text-pClr"
                to={'/'}
              >
                {lang ? <span className="bang">হোম</span> : 'Home'}
              </NavLink>

              <div className="group relative cursor-pointer py-2 px-2">
                <button className="flex items-center gap-2 hover:text-pClr">
                  {lang ? <span className="bang">শাখা সমূহ</span> : 'Branches'}
                  <span className="hover:pt-2 hover:text-pClr duration-150 text-slate-600">
                    <FaChevronDown />
                  </span>
                </button>
                <div className="invisible absolute top-9 right-32 pt-5 pb-2 z-[900] flex w-48 flex-col bg-[#F5F4F3] rounded-md  border border-slate-700 group-hover:visible text-center dropdownMenu">
                  <NavLink
                    onClick={() => setMenu(!menu)}
                    className="py-2 px-2 hover:text-pClr"
                    to={'/jatrabari'}
                  >
                    {lang ? (
                      <span className="bang">ঢাকা যাত্রাবাড়ী শাখা</span>
                    ) : (
                      'Dhaka Jatrabari Branch'
                    )}
                  </NavLink>
                  <NavLink
                    onClick={() => setMenu(!menu)}
                    className="py-2 px-2 hover:text-pClr"
                    to={'/mirpur'}
                  >
                    {lang ? (
                      <span className="bang">ঢাকা মিরপুর শাখা</span>
                    ) : (
                      'Dhaka Mirpur Branch'
                    )}
                  </NavLink>
                  <NavLink
                    onClick={() => setMenu(!menu)}
                    className="py-2 px-2 hover:text-pClr"
                    to={'/barishal'}
                  >
                    {lang ? (
                      <span className="bang">বরিশাল চৌমাথা শাখা</span>
                    ) : (
                      'Barishal Branch'
                    )}
                  </NavLink>
                  <NavLink
                    onClick={() => setMenu(!menu)}
                    className="py-2 px-2 hover:text-pClr"
                    to={'/dawatola'}
                  >
                    {lang ? (
                      <span className="bang">বামনা-ডৌয়াতলা শাখা</span>
                    ) : (
                      'Dawatola Branch'
                    )}
                  </NavLink>
                </div>
              </div>

              <NavLink
                onClick={() => setMenu(!menu)}
                className="py-2 px-2 hover:text-pClr"
                to={'/treatments'}
              >
                {lang ? <span className="bang">চিকিৎসা</span> : 'Treatments'}
              </NavLink>

              <div className="group relative cursor-pointer py-2 px-2">
                <button className="flex items-center gap-2 hover:text-pClr">
                  {lang ? <span className="bang">অন্যান্য</span> : 'Others'}
                  <span className="hover:pt-2 hover:text-pClr duration-150 text-slate-600">
                    <FaChevronDown />
                  </span>
                </button>
                <div className="invisible absolute top-9 pt-5 border border-slate-700 pb-2 right-32 z-[900] flex w-48 flex-col bg-[#F5F4F3] rounded-md group-hover:visible text-center dropdownMenu">
                  <NavLink
                    onClick={() => setMenu(!menu)}
                    className="py-2 px-2 hover:text-pClr"
                    to={'/blogs'}
                  >
                    {lang ? (
                      <span className="bang">প্রবন্ধ পড়ুন</span>
                    ) : (
                      'Read Blogs'
                    )}
                  </NavLink>
                  <NavLink
                    onClick={() => setMenu(!menu)}
                    className="py-2 px-2 hover:text-pClr"
                    to={'/dentists'}
                  >
                    {lang ? (
                      <span className="bang">আমাদের ডেন্টিসগণ</span>
                    ) : (
                      'Our Dentists'
                    )}
                  </NavLink>
                  <NavLink
                    onClick={() => setMenu(!menu)}
                    className="py-2 px-2 hover:text-pClr"
                    to={'/appointment'}
                  >
                    {lang ? (
                      <span className="bang">অ্যাপয়েন্টমেন্ট</span>
                    ) : (
                      'Appointment'
                    )}
                  </NavLink>
                  <NavLink
                    onClick={() => setMenu(!menu)}
                    className="py-2 px-2 hover:text-pClr"
                    to={'/dentists'}
                  >
                    {lang ? (
                      <span className="bang">আমাদের চাকরি</span>
                    ) : (
                      'carrer'
                    )}
                  </NavLink>
                </div>
              </div>

              <NavLink
                onClick={() => setMenu(!menu)}
                className="py-2 px-2 hover:text-pClr"
                to={'/about'}
              >
                {lang ? (
                  <span className="bang">আমাদের সম্পর্কে</span>
                ) : (
                  'About Us'
                )}
              </NavLink>
              <NavLink
                onClick={() => setMenu(!menu)}
                className="py-2 px-2 hover:text-pClr"
                to={'/contact'}
              >
                {lang ? <span className="bang">যোগাযোগ</span> : 'Contact'}
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
Nav.propTypes = {
  scrolled: PropTypes.bool,
};
