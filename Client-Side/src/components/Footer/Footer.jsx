import { Link } from "react-router-dom";
import useLang from "../../Hooks/useLang";
import { BsArrowRight } from "react-icons/bs";
import { GoGitBranch } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  const lang = useLang();
  return (
    <footer className="text-white">
      <div
        style={{
          background: "linear-gradient(to bottom, #ffffff 50%, #091E3E 50%)",
        }}
      >
        <div className="w-11/12 mx-auto py-8 px-6 bg-pClr text-center rounded-md">
          <h1 className="text-2xl md:text-4xl font-bold flex flex-col md:flex-row items-center gap-2 justify-center">
            {lang ? (
              <span className="bang">আজই আমাদের সাথে যোগাযোগ করুন</span>
            ) : (
              "Get in touch with us today"
            )}
            <span className="pr-3 rotate-90 md:rotate-0">
              <FaArrowRightLong />
            </span>
            <a href="tel:+8801401-532018">
              {lang ? "০১৪০১-৫৩২০১৮" : "01401-532018"}
            </a>
          </h1>
        </div>
      </div>

      <div className="w-full bg-[#091E3E] py-16">
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-1">
          <div>
            <h1 className="text-3xl font-bold bang text-slate-50 pb-2 md:pb-6">
              {lang ? <span className="bang">সরাসরি লিঙ্ক</span> : "Quick Link"}
            </h1>
            <div className="flex flex-col gap-2">
              <Link
                to={"/"}
                className="flex items-center gap-2 hover:text-pClr hover:translate-x-2  duration-300"
              >
                <span className="text-xl text-pClr">
                  <BsArrowRight />
                </span>
                {lang ? "হোম" : "Home"}
              </Link>
              <Link
                to={"/treatments"}
                className="flex items-center gap-2 hover:text-pClr hover:translate-x-2  duration-300"
              >
                <span className="text-xl text-pClr">
                  <BsArrowRight />
                </span>
                {lang ? "চিকিৎসা" : "Treatments"}
              </Link>
              <Link
                to={"/about"}
                className="flex items-center gap-2 hover:text-pClr hover:translate-x-2  duration-300"
              >
                <span className="text-xl text-pClr">
                  <BsArrowRight />
                </span>
                {lang ? "আমাদের সম্পর্কে" : "About Us"}
              </Link>
              <Link>fsadfsadf</Link>
              <Link
                to={"/contact"}
                className="flex items-center gap-2 hover:text-pClr hover:translate-x-2  duration-300"
              >
                <span className="text-xl text-pClr">
                  <BsArrowRight />
                </span>
                {lang ? "যোগাযোগ" : "Contact"}
              </Link>
              <Link
                to={"/blogs"}
                className="flex items-center gap-2 hover:text-pClr hover:translate-x-2  duration-300"
              >
                <span className="text-xl text-pClr">
                  <BsArrowRight />
                </span>
                {lang ? "প্রবন্ধ পড়ুন" : "Read Blogs"}
              </Link>
            </div>
          </div>
          {/* ----------------j */}
          <div>
            <h1 className="text-3xl font-bold bang text-slate-50 pb-2 md:pb-6">
              {lang ? <span className="bang">সকল শাখা</span> : "Branches"}
            </h1>
            <div className="flex flex-col gap-2">
              <Link
                to={"/treatments"}
                className="flex items-center gap-2 hover:text-pClr hover:translate-x-2  duration-300"
              >
                <span className="text-xl text-pClr">
                  <GoGitBranch />
                </span>
                {lang ? "যাত্রাবাড়ী শাখা" : "Jatrabari Branch"}
              </Link>
              <Link
                to={"/"}
                className="flex items-center gap-2 hover:text-pClr hover:translate-x-2  duration-300"
              >
                <span className="text-xl text-pClr">
                  <GoGitBranch />
                </span>
                {lang ? "মিরপুর শাখা" : "Mirpur Branch"}
              </Link>
              <Link
                to={"/about"}
                className="flex items-center gap-2 hover:text-pClr hover:translate-x-2  duration-300"
              >
                <span className="text-xl text-pClr">
                  <GoGitBranch />
                </span>
                {lang ? "বরিশাল শাখা" : "Barisal Branch"}
              </Link>
              <Link
                to={"/contact"}
                className="flex items-center gap-2 hover:text-pClr hover:translate-x-2  duration-300"
              >
                <span className="text-xl text-pClr">
                  <GoGitBranch />
                </span>
                {lang ? "ডৌয়াতলা শাখা" : "Dawatala Branch"}
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold bang text-slate-50 pb-2 md:pb-6">
              {lang ? (
                <span className="bang">যোগাযোগের ঠিকানা</span>
              ) : (
                "Contact Address"
              )}
            </h1>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2 hover:text-pClr hover:translate-x-2  duration-300">
                <span className="text-xl text-pClr">
                  <IoLocationSharp />
                </span>
                {lang
                  ? "যাত্রাবাড়ী, সায়েদাবাদ / ০১৪০১-৫৩২০১৮"
                  : "Jatrabari, Sayedabad / 01401-532018 "}
              </p>
              <p className="flex items-center gap-2 hover:text-pClr hover:translate-x-2  duration-300">
                <span className="text-xl text-pClr">
                  <IoLocationSharp />
                </span>
                {lang
                  ? "মিরপুর-১২ / ০১৪০১-৫৩২০১৮"
                  : "Mirpur-12 / 01401-532018 "}
              </p>
              <p className="flex items-center gap-2 hover:text-pClr hover:translate-x-2  duration-300">
                <span className="text-xl text-pClr">
                  <IoLocationSharp />
                </span>
                {lang
                  ? "বরিশাল সিএন্ডবি রোড / ০১৭১৫-১৯২৬৪৮"
                  : "Barishal C&B Road / 01715-192648"}
              </p>
              <p className="flex items-center gap-2 hover:text-pClr hover:translate-x-2  duration-300">
                <span className="text-xl text-pClr">
                  <IoLocationSharp />
                </span>
                {lang
                  ? "ডৌয়াতলা বাজার / ০১৮৩৩-৮৪৭২৫২"
                  : "Dawatala Bazar / 01833-847252"}
              </p>
            </div>
          </div>
          <div className="text-center">
            <h1 className="border-2 rounded-md p-2 w-48 text-center text-4xl font-bold mx-auto">
              Logo img
            </h1>

            <h1 className="text-3xl font-bold bang text-slate-50 pt-7 pb-4">
              {lang ? (
                <span className="bang text-2xl">অনুসরণ করুন</span>
              ) : (
                "Follow us"
              )}
            </h1>

            <div className="flex items-center gap-3 text-slate-50 text-xl justify-center">
              <a
                target="_blank"
                href="https://www.facebook.com/bd.smiledental"
                className="p-2 bg-pClr hover:bg-pClr2 rounded hover:scale-125 duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/@smiledentalbd/"
                className="p-2 bg-pClr hover:bg-pClr2 rounded hover:scale-125 duration-300"
              >
                <FaYoutube />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/smile-dental-bd?trk=public_post_feed-actor-name"
                className="p-2 bg-pClr hover:bg-pClr2 rounded hover:scale-125 duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                target="_blank"
                href="#"
                className="p-2 bg-pClr hover:bg-pClr2 rounded hover:scale-125 duration-300"
              >
                <FaInstagram />
              </a>
              <a
                target="_blank"
                href="#"
                className="p-2 bg-pClr hover:bg-pClr2 rounded hover:scale-125 duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#051225] py-4">
        <div className="w-11/12 mx-auto flex items-center justify-between gap-5 flex-col md:flex-row">
          <p className="">
            Developed by{" "}
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
              "  Copyright © 2024 - All right reserved by "
            )}
            <a
              target="_blank"
              href="https://www.facebook.com/bd.smiledental"
              className="italic font-semibold tracking-wide underline"
            >
              {lang ? (
                <span className="bang">স্মাইল ডেন্টাল কেয়ার</span>
              ) : (
                "Smile Dental Care"
              )}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
