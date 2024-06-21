import useLang from '../Hooks/useLang';
import BannerAppiontmentFrom from './BannerAppiontmentFrom';

const OnlyMobileViewAppointmentForm = () => {
  const lang = useLang();
  return (
    <div className="min-h-64 my-5 md:hidden w-full border-2 border-slate-200 bg-[#ffffffbd] rounded-md text-slate-800 p-4">
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
  );
};

export default OnlyMobileViewAppointmentForm;
