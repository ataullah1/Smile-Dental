import useLang from '../../Hooks/useLang';

const ReviewSec = () => {
  const lang = useLang();
  return (
    <div className="pt-14 pb-5">
      <div className="text-center pb-16 md:mb-8 relative">
        <img
          className="absolute top-1/2 -translate-y-36 md:-translate-y-28 left-1/2 -translate-x-1/2 w-44 md:w-40"
          src="https://i.ibb.co/XxKfhRs/title-img1.png"
          alt=""
        />
        <h3 className="text-xl font-semibold text-pClr2">
          {lang ? (
            <span className="bang">রোগীদের রিভিউ</span>
          ) : (
            'Patient Reviews'
          )}
        </h3>
        <h1 className="text-3xl lg:text-4xl py-3 max-w-[600px] mx-auto font-bold text-slate-800">
          {lang ? (
            <span className="bang text-2xl md:text-3xl">
              রোগীরা আমাদের সম্পর্কে যা বলে।
            </span>
          ) : (
            'What patients say about us.'
          )}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full lg:w-8/12"></div>
        <div className="w-full lg:w-4/12">
          <form action="">
            <input type="text" placeholder="your name" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewSec;
