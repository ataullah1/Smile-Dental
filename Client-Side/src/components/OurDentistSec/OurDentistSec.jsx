import Marquee from 'react-fast-marquee';
import useLang from '../../Hooks/useLang';
import { Link } from 'react-router-dom';

const OurDentistSec = () => {
  const lang = useLang();

  const shadow2 = {
    boxShadow: '0 20px 20px rgba(0, 0, 0, 0.15)', // Taller and boxier look
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
      <Marquee pauseOnClick>
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
            <h1 className="text-3xl font-bold text-center pb-2">
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

        <div
          className="min-h-64 w-96 shadow-md rounded-md mr-5 my-10 pt-5"
          style={shadow2}
        >
          <div
            className="w-60 h-60 text-center mx-auto rounded-full border-4 border-pClr bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://img.freepik.com/free-photo/smiling-confidently-pointing-own-broad-smile_1194-413959.jpg?t=st=1719306378~exp=1719309978~hmac=1623cdf444d7c304a248f2c5dcff6e93a5ace02ec773306675ce294875281a22&w=996')`,
            }}
          />
          <div className="mt-4 text-center bg-pClr bg-opacity-5 p-3">
            <h1 className="text-3xl font-bold text-center pb-2">
              {lang ? (
                <span className="bang">ডাঃ ইসমাইল হোসেন মামুন</span>
              ) : (
                'Dr. Ismail Hosen Mamun'
              )}
            </h1>
            <p className="">
              {lang ? (
                <span className="bang">
                  DMTD (SMF, ঢাকা) ব্যাচেলর অফ ডেন্টিস্ট্রি (চট্টগ্রাম মেডিকেল
                  বিশ্ববিদ্যালয়) - ডিটি. কেন্দ্রীয় পুলিশ হাসপাতাল, ঢাকা
                </span>
              ) : (
                'DMTD (SMF, Dhaka ) Bachelor of Dentistry (Chattogram Medical University) -  DT. Central Police Hospital , Dhaka'
              )}
            </p>
          </div>
        </div>

        <div
          className="min-h-64 w-96 shadow-md rounded-md mr-5 my-10 pt-5"
          style={shadow2}
        >
          <div
            className="w-60 h-60 text-center mx-auto rounded-full border-4 border-pClr bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://img.freepik.com/free-photo/front-view-male-nurse-hospital_23-2150796750.jpg?t=st=1719306453~exp=1719310053~hmac=e68ee76808fe841238106ce228891ec5eda59309d543df8d5bc22b2ab3a08b08&w=740')`,
            }}
          />
          <div className="mt-4 text-center bg-pClr bg-opacity-5 p-3">
            <h1 className="text-3xl font-bold text-center pb-2">
              {lang ? (
                <span className="bang">ডাঃ নিশাত তাসনিম বর্ষা</span>
              ) : (
                'Dr. Nishat Tasnim Barsha'
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
      <div className="w-full text-center py-6  duration-200 hover:-translate-y-2">
        <Link
          to={'/dentists'}
          className="py-2 px-6 bg-pClr hover:bg-pClr2 rounded-md font-semibold text-slate-100 duration-200"
        >
          View All Dentists
        </Link>
      </div>
    </div>
  );
};

export default OurDentistSec;
