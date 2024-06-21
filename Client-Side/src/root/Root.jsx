import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import { useEffect, useState } from 'react';
import goTop from '/totop.webp';

const Root = () => {
  const [scrolled, setScrolled] = useState(false);
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
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen overflow-x-hidden">
      <Nav scrolled={scrolled} />
      <Outlet />
      <Footer />

      {/* GO to Up */}
      <button
        onClick={handleScrollTop}
        className={`${
          scrolled
            ? 'fixed bottom-10 hover:scale-105 duration-300 right-6 cursor-pointer hover:-translate-y-2'
            : 'translate-x-44 duration-500'
        }`}
      >
        <img src={goTop} alt="" className="max-w-12" />
      </button>
    </div>
  );
};

export default Root;
