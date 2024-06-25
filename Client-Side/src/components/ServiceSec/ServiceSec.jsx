import { Link } from 'react-router-dom';
import useLang from '../../Hooks/useLang';
import ServiceCard from './ServiceCard';

const ServiceSec = () => {
  const lang = useLang();
  return (
    <div>
      <div className="text-center pb-16">
        <h3 className="text-xl font-semibold text-pClr2">
          {lang ? (
            <span className="bang">আমাদের সেবাসমূহ</span>
          ) : (
            'Our Services'
          )}
        </h3>
        <h1 className="text-3xl lg:text-4xl py-3 max-w-[600px] mx-auto font-bold text-slate-800">
          {lang ? (
            <span className="bang text-2xl md:text-3xl">
              আপনার দাঁতের সকল চিকিৎসা এখন এক জায়গায়।
            </span>
          ) : (
            'All your dental treatments are now in one place'
          )}
        </h1>
      </div>

      <div className="grid gap-5 gap-y-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <div className="w-full text-center pt-14 hover:-translate-y-2 duration-300 ">
        <Link
          to={'/treatments'}
          className="py-2 px-6 rounded-md bg-pClr hover:bg-pClr2 duration-300 font-semibold text-slate-100"
        >
          View All Services
        </Link>
      </div>
    </div>
  );
};

export default ServiceSec;
