import { FiPhoneCall } from 'react-icons/fi';
import useLang from '../Hooks/useLang';
import BannerAppiontmentFrom from './BannerAppiontmentFrom';

const BannerContent = () => {
  const lang = useLang();
  return (
    <div className="pt-10 md:pt-0 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-11/12 mx-auto h-full flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
      <div className="min-h-64 w-full md:w-1/2 border-slate-200 rounded-md px-5 md:pl-8 flex items-center justify-center md:justify-start pt-4">
        <div className="space-y-3 lg:space-y-6">
          <h1 className="text-4xl md:text-4xl lg:text-6xl text-slate-50 font-bold">
            {lang ? (
              <span className="text-3xl md:text-3xl lg:text-5xl bang">
                আপনার <span className="text-pClr">সুখী হাসি</span> ফিরিয়ে আনতে,
                আমরা আছি আপনার পাশে।
              </span>
            ) : (
              <span className="md:leading-tight">
                To bring back your
                <span className="text-pClr"> happy smile</span>, we are by your
                side.
              </span>
            )}
          </h1>
          <p className="text-slate-200">
            {lang ? (
              <span className="">
                গত অর্ধ-যুগ ধরে আমরাই দিয়ে আসছি বাংলাদেশের সেরা ডেন্টাল সেবা।
              </span>
            ) : (
              'We have been providing the best dental services in Bangladesh for the past half-century.'
            )}
          </p>
          <a
            href="tel:+8801401-532018"
            className="text-xl font-bold text-slate-100 bg-[#1e293bc6] px-6 py-2 rounded-full flex items-center gap-3 mt-5 max-w-64 justify-center mx-auto md:mx-0"
          >
            <span className="text-2xl">
              <FiPhoneCall />
            </span>
            {lang ? <span>০১৪০১-৫৩২০১৮</span> : '01401-532018'}
          </a>
        </div>
      </div>
      <div className="min-h-64 hidden md:block w-full md:w-1/2 max-w-[450px] ml-auto border-2 border-slate-200 bg-[#ffffffbd] rounded-md text-slate-800 p-4">
        <h1 className="text-4xl text-center font-bold pb-3">
          {lang ? (
            <span className="bang text-3xl">অ্যাপয়েন্টমেন্ট নিন</span>
          ) : (
            '  Make Appointment'
          )}
        </h1>

        {/* Appointment form======= */}
        <BannerAppiontmentFrom />
      </div>
    </div>
  );
};

export default BannerContent;
