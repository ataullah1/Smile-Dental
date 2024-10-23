import { FiPhoneCall } from "react-icons/fi";
import useLang from "../../Hooks/useLang";
import MiddleBannerForm from "../../Utility/MiddleBannerForm";

const MiddleBanner = () => {
  const lang = useLang();
  return (
    <div
      className="relative py-12 w-full bg-cover bg-no-repeat bg-center mb-12 overflow-hidden bg-fixed"
      style={{
        backgroundImage: `url('https://i.ibb.co/SQjYDFK/dentall.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-pClr opacity-85" />

      {/* Content */}
      <div className="relative w-11/12 mx-auto text-slate-100 text-center flex items-center justify-between flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-[70%]">
          <h1 className="text-2xl border-b-2 border-slate-100 inline-block text-center font-bold mb-8">
            {lang ? (
              <span className="bang">যোগাযোগের নম্বর</span>
            ) : (
              "Contact Numbers"
            )}
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-y-10">
            <div className="bg-[#ffffff3f] border-2 border-slate-100 rounded-md p-3">
              <p className="text-xl font-bold">
                {lang ? (
                  <span className="bang">মিরপুর শাখা</span>
                ) : (
                  "Mirpur Branch"
                )}
              </p>
      className="relative py-12 w-full bg-cover bg-no-repeat bg-center mb-12 overflow-hidden bg-fixed"
      style={{
        backgroundImage: `url('https://i.ibb.co/SQjYDFK/dentall.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-pClr opacity-85" />

      {/* Content */}
      <div className="relative w-11/12 mx-auto text-slate-100 text-center flex items-center justify-between flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-[70%]">
          <h1 className="text-2xl border-b-2 border-slate-100 inline-block text-center font-bold mb-8">
            {lang ? (
              <span className="bang">যোগাযোগের নম্বর</span>
            ) : (
              "Contact Numbers"
            )}
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-y-10">
            <div className="bg-[#ffffff3f] border-2 border-slate-100 rounded-md p-3">
              <p className="text-xl font-bold">
                {lang ? (
                  <span className="bang">মিরপুর শাখা</span>
                ) : (
                  "Mirpur Branch"
                )}
              </p>
              <a
                href="tel:+8801401-532018"
                className="text-2xl font-bold text-slate-100 flex items-center gap-3 mt-2 justify-center mx-auto md:mx-0"
              >
                <span className="">
                  <FiPhoneCall />
                </span>
                {lang ? <span>০১৪০১-৫৩২০১৮</span> : "01401-532018"}
              </a>
            </div>
            <div className="bg-[#ffffff3f] border-2 border-slate-100 rounded-md p-3">
              <p className="text-xl font-bold">
                {lang ? (
                  <span className="bang">যাত্রাবাড়ী শাখা</span>
                ) : (
                  "Jatrabari Branch"
                )}
              </p>
              <a
                href="tel:+8801401-532018"
                className="text-2xl font-bold text-slate-100 flex items-center gap-3 mt-2 justify-center mx-auto md:mx-0"
              >
                <span className="">
                  <FiPhoneCall />
                </span>
                {lang ? <span>০১৪০১-৫৩২০১৮</span> : "01401-532018"}
              </a>
            </div>
            <div className="bg-[#ffffff3f] border-2 border-slate-100 rounded-md p-3">
              <p className="text-xl font-bold">
                {lang ? (
                  <span className="bang">বরিশাল শাখা</span>
                ) : (
                  "Barisal Branch"
                )}
              </p>
              <a
                href="tel:+8801715-192648"
                className="text-2xl font-bold text-slate-100 flex items-center gap-3 mt-2 justify-center mx-auto md:mx-0"
              >
                <span className="">
                  <FiPhoneCall />
                </span>
                {lang ? <span>০১৭১৫-১৯২৬৪৮</span> : "01715-192648"}
              </a>
            </div>
            <div className="bg-[#ffffff3f] border-2 border-slate-100 rounded-md p-3">
              <p className="text-xl font-bold">
                {lang ? (
                  <span className="bang">ডৌয়াতলা শাখা</span>
                ) : (
                  "Dawatala Branch"
                )}
              </p>
              <a
                href="tel:+8801833-847252"
                className="text-2xl font-bold text-slate-100 flex items-center gap-3 mt-2 justify-center mx-auto md:mx-0"
              >
                <span className="">
                  <FiPhoneCall />
                </span>
                {lang ? <span>০১৮৩৩-৮৪৭২৫২</span> : "01833-847252"}
              </a>
            </div>
            <div className="bg-[#ffffff3f] border-2 border-slate-100 rounded-md p-3 md:col-span-2">
              <p className="text-xl font-bold">
                {lang ? <span className="bang">হটলাইন</span> : "Hotline"}:
              </p>
              <a
                href="tel:+8801401-532018"
                className="text-2xl font-bold text-slate-100 flex items-center gap-3 mt-2 justify-center mx-auto md:mx-0"
              >
                <span className="">
                  <FiPhoneCall />
                </span>
                {lang ? <span>০১৪০১-৫৩২০১৮</span> : "01401-532018"}
              </a>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full md:hidden bg-slate-100 rounded-full" />
        <div className="w-full lg:w-[30%] border-2 border-slate-100 rounded-md p-3 lg:p-0 lg:border-none">
          <MiddleBannerForm />
        </div>
      </div>
    </div>
  );
};

export default MiddleBanner;
