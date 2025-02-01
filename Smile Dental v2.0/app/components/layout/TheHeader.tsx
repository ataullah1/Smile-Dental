"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ChevronDown, UserCircle } from "lucide-react";
import { MdGTranslate } from "react-icons/md";
import { CgClose, CgMenuRightAlt } from "react-icons/cg";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { languageEvents } from "@/app/lib/languageEvents";

const TheHeader = () => {
  const { status } = useSession();
  const [menu, setMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isBn, setIsBn] = useState(false);
  const pathName = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    setIsBn(document.cookie.includes("IS_LANG=bn"));

    return languageEvents.subscribe(() => {
      setIsBn(document.cookie.includes("IS_LANG=bn"));
    });
  }, []);

  useEffect(() => {
    const handleScrolled = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolledUp(currentScrollPos < lastScrollPos);
      setLastScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, [lastScrollPos]);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleLanguage = useCallback(() => {
    const newIsBn = !isBn;
    setIsBn(newIsBn);
    setCookie("IS_LANG", newIsBn ? "bn" : "en");
    languageEvents.emit();
    router.refresh();
  }, [isBn, router]);

  const menuItems = [
    { label: isBn ? "হোম" : "Home", href: "/" },
    {
      label: isBn ? "শাখা সমূহ" : "Branches",
      subMenu: [
        {
          label: isBn ? "ঢাকা যাত্রাবাড়ী শাখা" : "Dhaka Jatrabari Branch",
          href: "/jatrabari",
        },
        {
          label: isBn ? "ঢাকা মিরপুর শাখা" : "Dhaka Mirpur Branch",
          href: "/mirpur",
        },
        {
          label: isBn ? "বরিশাল চৌমাথা শাখা" : "Barishal Branch",
          href: "/barishal",
        },
        {
          label: isBn ? "বামনা-ডৌয়াতলা শাখা" : "Dawatala Branch",
          href: "/Dawatala",
        },
      ],
    },
    { label: isBn ? "চিকিৎসা" : "Treatments", href: "/treatments" },
    {
      label: isBn ? "অন্যান্য" : "Others",
      subMenu: [
        { label: isBn ? "প্রবন্ধ পড়ুন" : "Read Blogs", href: "/blogs" },
        {
          label: isBn ? "আমাদের ডেন্টিসগণ" : "Our Dentists",
          href: "/dentists",
        },
        {
          label: isBn ? "অ্যাপয়েন্টমেন্ট" : "Appointment",
          href: "/appointment",
        },
        { label: isBn ? "আমাদের চাকরি" : "Our Jobs", href: "/career" },
      ],
    },
    { label: isBn ? "আমাদের সম্পর্কে" : "About Us", href: "/about" },
    { label: isBn ? "যোগাযোগ" : "Contact", href: "/contact" },
  ];

  return (
    <div
      className={`w-full fixed top-0 left-0 z-[900] duration-300 bg-[#ffffff] py-3 ${
        isScrolledUp ? "translate-y-0" : "-translate-y-full"
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
            {isBn ? "EN" : <span className="bang">বাং</span>}
          </button>

          <Link
            href={"/booking"}
            className="py-2 px-4 xl:px-6 duration-200 bg-pClr hover:bg-pClr2 text-white rounded-md font-semibold hidden lg:block"
          >
            {isBn ? (
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

          {status === "authenticated" && (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                aria-label="Open admin dropdown"
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <UserCircle className="w-8 h-8" />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50"
                  >
                    <Link
                      href="/admin/bookings"
                      aria-label="Admin bookings dashboard page link"
                      onClick={() => setIsDropdownOpen(false)}
                      className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t ${
                        pathName.startsWith("/admin")
                          ? "font-bold text-blue-600"
                          : ""
                      }`}
                    >
                      Admin Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        signOut();
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-blue-600 rounded-b bg-gray-200 hover:bg-gray-300 hover:text-blue-800"
                    >
                      Sign Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Mobile Navigation */}
          <AnimatePresence>
            {menu && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-12 w-fit min-w-60 rounded-md p-5 right-0 bg-[#F5F4F3] lg:hidden flex flex-col items-center navigation text-slate-900 text-lg"
              >
                {menuItems.map((item, index) => (
                  <div key={index} className="group relative py-2 px-2">
                    {item.subMenu ? (
                      <>
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
                                    setMenu(false);
                                    setActiveDropdown(null);
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
                <Link
                  href={"/booking"}
                  className="py-2 px-4 xl:px-6 duration-200 bg-pClr hover:bg-pClr2 text-white rounded-md font-semibold"
                >
                  {isBn ? (
                    <span className="bang">অ্যাপয়েন্টমেন্ট</span>
                  ) : (
                    "Appointment"
                  )}
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TheHeader;
