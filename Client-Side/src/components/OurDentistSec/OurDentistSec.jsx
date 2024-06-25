import Marquee from 'react-fast-marquee';
import useLang from '../../Hooks/useLang';

const OurDentistSec = () => {
  const lang = useLang();

  const shadow2 = {
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)', // Taller and boxier look
  };

  return (
    <div>
      <div className="text-center pt-16">
        <h3 className="text-xl font-semibold text-pClr2">
          {lang ? (
            <span className="bang">আমাদের ডেন্টিস্টগণ</span>
          ) : (
            'Our Dentists'
          )}
        </h3>
        <h1 className="text-3xl lg:text-4xl py-3 max-w-[600px] mx-auto font-bold text-slate-800">
          {lang ? (
            <span className="bang text-2xl md:text-3xl">
              আমাদের বিশেষজ্ঞ, বন্ধুত্বপূর্ণ ডেন্টিস্টগণ।
            </span>
          ) : (
            'Our expert, friendly dentists.'
          )}
        </h1>
      </div>
      <Marquee pauseOnClick className="">
        <div
          className="min-h-64 w-96 shadow-md rounded-md mr-5 my-10 pt-5"
          style={shadow2}
        >
          <div
            className="w-60 h-60 text-center mx-auto rounded-full border-4 border-pClr bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://i.ibb.co/8Ps9rvv/Whats-App-Image-2024-02-20-at-2-19-46-PM.jpg')`,
            }}
          />
          <div className="mt-4 text-center bg-pClr bg-opacity-5 p-3">
            <h1 className="text-3xl font-bold text-center">
              {lang ? (
                <span className="bang">ডাঃ অনাঘা মেনেন</span>
              ) : (
                'Dr.Anagha Menen'
              )}
            </h1>
            <p className="">
              {lang ? (
                <span className="bang">
                  বিডিএস (ঢাবি) ডেন্টাল সার্জন স্মাইল ডেন্টাল কেয়ার
                </span>
              ) : (
                'BDS (DU) Dental Surgeon Smile Dental Care'
              )}
            </p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default OurDentistSec;
