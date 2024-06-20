import useLang from '../../Hooks/useLang';
import BannerAppiontmentFrom from '../../Utility/BannerAppiontmentFrom';
import { Banner } from '../../components/Banner/Banner';

const Home = () => {
  const lang = useLang();
  return (
    <div className="">
      <div className="relative">
        <Banner />

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-11/12 mx-auto h-full flex items-center gap-5">
          <div className="h-64 w-1/2 border-slate-200 rounded-md">
            <h1 className="text-6xl text-slate-100 font-bold">
              {lang
                ? <span className='text-5xl'>আমরা দিচ্ছি বাংলাদেশের সেরা ডেন্টাল সেবা।</span>
                : 'We provide the best dental services in Bangladesh.'}
            </h1>
          </div>
          <div className="min-h-64 w-1/2 max-w-[450px] ml-auto border-2 border-slate-200 bg-[#ffffffbd] rounded-md text-slate-800 p-4">
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
      </div>
    </div>
  );
};

export default Home;
