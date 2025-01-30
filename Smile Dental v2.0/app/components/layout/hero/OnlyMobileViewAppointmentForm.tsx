import { getLanguage } from "@/app/lib/getLanguage";
import BannerAppointmentForm from "./BannerAppiontmentFrom";

const OnlyMobileViewAppointmentForm: React.FC = () => {
  const isBn = getLanguage();

  return (
    <div className="min-h-64 my-5 md:hidden w-full border-2 border-slate-200 bg-[#ffffffbd] rounded-md text-slate-800 p-4">
      <h1 className="text-4xl text-center font-bold pb-3">
        {isBn ? (
          <span className="bang text-3xl">অ্যাপয়েন্টমেন্ট নিন</span>
        ) : (
          "Make Appointment"
        )}
      </h1>

      {/* Appointment form======= */}
      <BannerAppointmentForm isBn={isBn} />
    </div>
  );
};

export default OnlyMobileViewAppointmentForm;
