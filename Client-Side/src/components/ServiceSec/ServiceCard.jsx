import useLang from '../../Hooks/useLang';

const ServiceCard = () => {
  const lang = useLang();
  return (
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
              প্রয়োজন? আপনি সেরা কসমেটিক পরিষেবার জন্য আমাদের উপর নির্ভর করতে
              পারেন।
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
  );
};

export default ServiceCard;
