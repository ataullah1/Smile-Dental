"use client";

import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../provider/LanguageContext";
import useLang from "../hooks/useLang";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { MdGTranslate } from "react-icons/md";
import { CgClose, CgMenuRightAlt } from "react-icons/cg";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const pathName = usePathname();

  useEffect(() => {
    const handleScrolled = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const languageContext = useContext(LanguageContext);
  if (!languageContext) {
    throw new Error("LanguageContext is undefined");
  }
  const { toggleLanguage } = languageContext;
  const lang = useLang();

  const menuItems = [
    { label: lang ? "হোম" : "Home", href: "/" },
    {
      label: lang ? "শাখা সমূহ" : "Branches",
      subMenu: [
        {
          label: lang ? "ঢাকা যাত্রাবাড়ী শাখা" : "Dhaka Jatrabari Branch",
          href: "/jatrabari",
        },
        {
          label: lang ? "ঢাকা মিরপুর শাখা" : "Dhaka Mirpur Branch",
          href: "/mirpur",
        },
        {
          label: lang ? "বরিশাল চৌমাথা শাখা" : "Barishal Branch",
          href: "/barishal",
        },
        {
          label: lang ? "বামনা-ডৌয়াতলা শাখা" : "Dawatala Branch",
          href: "/Dawatala",
        },
      ],
    },
    { label: lang ? "চিকিৎসা" : "Treatments", href: "/treatments" },
    {
      label: lang ? "অন্যান্য" : "Others",
      subMenu: [
        { label: lang ? "প্রবন্ধ পড়ুন" : "Read Blogs", href: "/blogs" },
        {
          label: lang ? "আমাদের ডেন্টিসগণ" : "Our Dentists",
          href: "/dentists",
        },
        {
          label: lang ? "অ্যাপয়েন্টমেন্ট" : "Appointment",
          href: "/appointment",
        },
        { label: lang ? "আমাদের চাকরি" : "Our Jobs", href: "/career" },
      ],
    },
    { label: lang ? "আমাদের সম্পর্কে" : "About Us", href: "/about" },
    { label: lang ? "যোগাযোগ" : "Contact", href: "/contact" },
  ];

  return (
    <div
      className={`w-full fixed top-0 left-0 z-[900] duration-300 bg-[#ffffff] ${
        scrolled ? "shadow-xl shadow-[#4a484845] py-2" : "py-3"
      }`}
    >
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <Link href={"/"}>
          <button
            onClick={handleScrollTop}
            className="text-3xl font-bold w-28 sm:w-36 h-12 rounded-lg border-2 text-slate-600 border-slate-700"
          >
            Logo
          </button>
        </Link>
        {/* Desktop Navigation */}
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center navigation text-slate-900 text-lg">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative py-2 px-2 "
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.subMenu ? (
                <>
                  {/* Button with Active Highlight */}
                  <button
                    className={`flex items-center gap-2 ${
                      item.subMenu.some((sub) => sub.href === pathName)
                        ? "text-pClr"
                        : ""
                    } hover:text-pClr`}
                  >
                    {item.label}
                    <span className="hover:pt-2 hover:text-pClr duration-150 text-slate-600">
                      <ChevronDown />
                    </span>
                  </button>

                  {/* Dropdown with Smooth Animation */}
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-10 pt-5 pb-2 left-1/2 translate-x-1/2 z-[900] flex w-52 flex-col bg-[#F5F4F3] rounded-b-md text-center dropdownMenu shadow-md"
                      >
                        {item.subMenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            className={`py-2 px-2 hover:text-pClr ${
                              pathName === subItem.href ? "text-pClr" : ""
                            }`}
                            href={subItem.href}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                // Regular Menu Item
                <Link
                  className={`py-2 px-2 hover:text-pClr ${
                    pathName === item.href ? "text-pClr" : ""
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4 relative">
          <button
            onClick={toggleLanguage}
            className="py-1.5 px-1 sm:w-20 font-bold text-center justify-center border border-slate-300 text-slate-800 rounded flex items-center gap-2 mr-1"
          >
            <span className="sm:text-2xl">
              <MdGTranslate />
            </span>
            {lang ? "EN" : <span className="bang">বাং</span>}
          </button>
          <Link
            href={"/booking"}
            className="py-2 px-4 xl:px-6 duration-200 bg-pClr hover:bg-pClr2 text-white rounded-md font-semibold"
          >
            {lang ? (
              <span className="bang">অ্যাপয়েন্টমেন্ট</span>
            ) : (
              "Appointment"
            )}
          </Link>
          {/* Menu Button for Mobile */}
          <button
            onClick={() => setMenu(!menu)}
            className="text-4xl lg:hidden duration-300 text-gray-900"
          >
            {menu ? <CgClose /> : <CgMenuRightAlt />}
          </button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {menu && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-12 w-fit rounded-md p-5 right-0 bg-[#F5F4F3] lg:hidden flex flex-col items-center navigation text-slate-900 text-lg"
              >
                {menuItems.map((item, index) => (
                  <div key={index} className="group relative py-2 px-2">
                    {item.subMenu ? (
                      <>
                        {/* Button to Toggle Dropdown */}
                        <button
                          className="flex items-center gap-2 hover:text-pClr"
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === index ? null : index
                            )
                          }
                        >
                          {item.label}
                          <ChevronDown />
                        </button>

                        {/* Dropdown Menu */}
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute top-9 right-32 pt-5 pb-2 z-[900] flex w-48 flex-col bg-[#F5F4F3] rounded-md border border-slate-700 text-center dropdownMenu"
                            >
                              {item.subMenu.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  onClick={() => {
                                    setMenu(false); // Close mobile menu
                                    setActiveDropdown(null); // Close all dropdowns
                                  }}
                                  className={`py-2 px-2 hover:text-pClr ${
                                    pathName === subItem.href ? "text-pClr" : ""
                                  }`}
                                  href={subItem.href}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      // Regular Menu Item
                      <Link
                        onClick={() => setMenu(false)}
                        className={`py-2 px-2 hover:text-pClr ${
                          pathName === item.href ? "text-pClr" : ""
                        }`}
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Nav;
