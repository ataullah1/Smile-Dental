import useLang from '../../Hooks/useLang';

const AboutSec = () => {
  const lang = useLang();
  return (
    <div className="flex flex-col lg:flex-row gap-12 my-14 py-10 min-h-[700px] items-center">
      <div className="w-full lg:w-1/2">
        <img
          className="w-full max-w-[600px] mx-auto rounded-md"
          src="https://i.ibb.co/P1RmvT5/about-1.jpg"
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2 min-h-60 space-y-4">
        <h3 className="text-xl font-semibold text-pClr2">
          {lang ? <span className="bang">আমাদের সম্পর্কে</span> : ' About Us'}
        </h3>
        <h1 className="text-3xl lg:text-4xl py-3 font-bold text-slate-800">
          {lang ? (
            <span className="bang">
              প্রত্যয়িত ডেন্টিস্ট শ্রেষ্ঠত্বের জন্য প্রতিশ্রুতিবদ্ধ
            </span>
          ) : (
            'Certified Dentists Committed to Excellence'
          )}
        </h1>
        <p className="text-base text-slate-600 pb-5">
          {lang ? (
            <span className="bang">
              আমরা 3 জন প্রত্যয়িত দন্তচিকিৎসকের একটি দল যারা শহরের সেরা দাঁতের
              চিকিৎসার জন্য বিশেষায়িত। 12আমরা 3 জন প্রত্যয়িত দন্তচিকিৎসকের
              একটি দল যারা শহরের সেরা দাঁতের চিকিৎসার জন্য বিশেষায়িত। 12 বছরেরও
              বেশি সময়ের পর্যাপ্ত অভিজ্ঞতার সাথে, আমরা সর্বশেষ প্রযুক্তির সাথে
              সেরা সমাধান দেওয়ার দক্ষতা অর্জন করেছি। আমরা 3 জন প্রত্যয়িত
              দন্তচিকিৎসকের একটি দল যারা শহরের সেরা দাঁতের চিকিৎসার জন্য
              বিশেষায়িত। 12 বছরেরও বেশি সময়ের পর্যাপ্ত অভিজ্ঞতার সাথে, আমরা
              সর্বশেষ প্রযুক্তির সাথে সেরা সমাধান দেওয়ার দক্ষতা অর্জন করেছি।
              অর্জন করেছি।{' '}
            </span>
          ) : (
            `We are a team of 3 certified dentists specialised in offering the best
          dental treatments in town. With adequate experience of over 12 years,
          we have mastered the skills of offering the best solutions with the
          latest technologies. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Veritatis, modi. Reiciendis libero voluptate
          mollitia quo voluptates, earum at amet iste!`
          )}
        </p>
        <button className="py-2 px-8 rounded-md bg-pClr text-white hover:bg-pClr2 duration-200 font-bold text-lg hover:translate-x-2">
          {lang ? <span className="bang">আরও পড়ুন</span> : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default AboutSec;
