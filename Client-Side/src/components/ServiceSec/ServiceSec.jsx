import useLang from '../../Hooks/useLang';

const ServiceSec = () => {
  const lang = useLang();
  return (
    <div>
      <div className="text-center pb-16">
        <h3 className="md:text-xl font-semibold text-pClr2">
          {lang ? (
            <span className="bang">আমাদের সেবাসমূহ</span>
          ) : (
            'Our Services'
          )}
        </h3>
        <h1 className="text-3xl lg:text-4xl py-3 max-w-[600px] mx-auto font-bold text-slate-800">
          {lang ? (
            <span className="bang text-2xl md:text-3xl">
              আপনার সমস্ত দাঁতের চিকিৎসা এখন এক জায়গায়।
            </span>
          ) : (
            'All your dental treatments are now in one place'
          )}
        </h1>
      </div>

      <div className="grid gap-5 gap-y-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="w-full max-w-[500px] mx-auto rounded-md min-h-10 shadow-md shadow-slate-300 hover:-translate-y-2 duration-300">
          <div className="overflow-hidden">
            <div
              className="w-full h-56 bg-slate-300 bg-center bg-cover bg-no-repeat rounded-t-md hover:scale-110 duration-1000"
              style={{
                backgroundImage: `url('https://i.ibb.co/q0CMxLR/crowns-dental.jpg')`,
              }}
            />
          </div>
          <div className="p-3 space-y-3">
            <h1 className="text-2xl font-bold">
              {lang ? (
                <span className="text-xl">গহ্বরের জন্য ডেন্টাল ফিলিং</span>
              ) : (
                'Dental Filling for Cavities'
              )}
            </h1>
            <p className="text-slate-500 pb-2">
              {lang ? (
                <span className="md:text-sm">
                  দাঁত ব্লিচিং, এনামেল বন্ধন এবং আরও অনেক কিছুর জন্য সাহায্যের
                  প্রয়োজন? আপনি সেরা কসমেটিক পরিষেবার জন্য আমাদের উপর নির্ভর
                  করতে পারেন।
                </span>
              ) : (
                'Need help with teeth bleaching, enamel bonding and more? You can count on us for the best cosmetic services.'
              )}
            </p>
            <button className="bg-pClr hover:bg-pClr2 text-white font-semibold text-center w-full rounded-md py-2 duration-150 active:scale-95">
              {lang ? (
                <span className="md:text-sm">আরো বিস্তারিত</span>
              ) : (
                'More Details'
              )}
            </button>
          </div>
        </div>
        <div className="w-full max-w-[500px] mx-auto rounded-md min-h-10 shadow-md shadow-slate-300 hover:-translate-y-2 duration-300">
          <div className="overflow-hidden">
            <div
              className="w-full h-56 bg-slate-300 bg-center bg-cover bg-no-repeat rounded-t-md hover:scale-110 duration-1000"
              style={{
                backgroundImage: `url('https://i.ibb.co/q0CMxLR/crowns-dental.jpg')`,
              }}
            />
          </div>
          <div className="p-3 space-y-3">
            <h1 className="text-2xl font-bold">
              {lang ? (
                <span className="text-xl">গহ্বরের জন্য ডেন্টাল ফিলিং</span>
              ) : (
                'Dental Filling for Cavities'
              )}
            </h1>
            <p className="text-slate-500 pb-2">
              {lang ? (
                <span className="md:text-sm">
                  দাঁত ব্লিচিং, এনামেল বন্ধন এবং আরও অনেক কিছুর জন্য সাহায্যের
                  প্রয়োজন? আপনি সেরা কসমেটিক পরিষেবার জন্য আমাদের উপর নির্ভর
                  করতে পারেন।
                </span>
              ) : (
                'Need help with teeth bleaching, enamel bonding and more? You can count on us for the best cosmetic services.'
              )}
            </p>
            <button className="bg-pClr hover:bg-pClr2 text-white font-semibold text-center w-full rounded-md py-2 duration-150 active:scale-95">
              {lang ? (
                <span className="md:text-sm">আরো বিস্তারিত</span>
              ) : (
                'More Details'
              )}
            </button>
          </div>
        </div>
        <div className="w-full max-w-[500px] mx-auto rounded-md min-h-10 shadow-md shadow-slate-300 hover:-translate-y-2 duration-300">
          <div className="overflow-hidden">
            <div
              className="w-full h-56 bg-slate-300 bg-center bg-cover bg-no-repeat rounded-t-md hover:scale-110 duration-1000"
              style={{
                backgroundImage: `url('https://i.ibb.co/q0CMxLR/crowns-dental.jpg')`,
              }}
            />
          </div>
          <div className="p-3 space-y-3">
            <h1 className="text-2xl font-bold">
              {lang ? (
                <span className="text-xl">গহ্বরের জন্য ডেন্টাল ফিলিং</span>
              ) : (
                'Dental Filling for Cavities'
              )}
            </h1>
            <p className="text-slate-500 pb-2">
              {lang ? (
                <span className="md:text-sm">
                  দাঁত ব্লিচিং, এনামেল বন্ধন এবং আরও অনেক কিছুর জন্য সাহায্যের
                  প্রয়োজন? আপনি সেরা কসমেটিক পরিষেবার জন্য আমাদের উপর নির্ভর
                  করতে পারেন।
                </span>
              ) : (
                'Need help with teeth bleaching, enamel bonding and more? You can count on us for the best cosmetic services.'
              )}
            </p>
            <button className="bg-pClr hover:bg-pClr2 text-white font-semibold text-center w-full rounded-md py-2 duration-150 active:scale-95">
              {lang ? (
                <span className="md:text-sm">আরো বিস্তারিত</span>
              ) : (
                'More Details'
              )}
            </button>
          </div>
        </div>
        <div className="w-full max-w-[500px] mx-auto rounded-md min-h-10 shadow-md shadow-slate-300 hover:-translate-y-2 duration-300">
          <div className="overflow-hidden">
            <div
              className="w-full h-56 bg-slate-300 bg-center bg-cover bg-no-repeat rounded-t-md hover:scale-110 duration-1000"
              style={{
                backgroundImage: `url('https://i.ibb.co/q0CMxLR/crowns-dental.jpg')`,
              }}
            />
          </div>
          <div className="p-3 space-y-3">
            <h1 className="text-2xl font-bold">
              {lang ? (
                <span className="text-xl">গহ্বরের জন্য ডেন্টাল ফিলিং</span>
              ) : (
                'Dental Filling for Cavities'
              )}
            </h1>
            <p className="text-slate-500 pb-2">
              {lang ? (
                <span className="md:text-sm">
                  দাঁত ব্লিচিং, এনামেল বন্ধন এবং আরও অনেক কিছুর জন্য সাহায্যের
                  প্রয়োজন? আপনি সেরা কসমেটিক পরিষেবার জন্য আমাদের উপর নির্ভর
                  করতে পারেন।
                </span>
              ) : (
                'Need help with teeth bleaching, enamel bonding and more? You can count on us for the best cosmetic services.'
              )}
            </p>
            <button className="bg-pClr hover:bg-pClr2 text-white font-semibold text-center w-full rounded-md py-2 duration-150 active:scale-95">
              {lang ? (
                <span className="md:text-sm">আরো বিস্তারিত</span>
              ) : (
                'More Details'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSec;
