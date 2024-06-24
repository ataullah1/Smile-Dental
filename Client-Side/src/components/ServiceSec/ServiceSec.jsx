import useLang from '../../Hooks/useLang';

const ServiceSec = () => {
  const lang = useLang();
  return (
    <div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-pClr2">
          {lang ? (
            <span className="bang">আমাদের সেবাসমূহ</span>
          ) : (
            'Our Services'
          )}
        </h3>
        <h1 className="text-3xl lg:text-4xl py-3 max-w-[600px] mx-auto font-bold text-slate-800">
          {lang ? (
            <span className="bang text-3xl">
              আপনার সমস্ত দাঁতের চিকিৎসা এখন এক জায়গায়
            </span>
          ) : (
            'All your dental treatments are now in one place'
          )}
        </h1>
      </div>

      
    </div>
  );
};

export default ServiceSec;
