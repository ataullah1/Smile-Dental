import useLang from "../../Hooks/useLang";

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
            "Patient Reviews"
          )}
        </h3>
        <h1 className="text-3xl lg:text-4xl py-3 max-w-[600px] mx-auto font-bold text-slate-800">
          {lang ? (
            <span className="bang text-2xl md:text-3xl">
              রোগীরা আমাদের সম্পর্কে যা বলে।
            </span>
          ) : (
            "What patients say about us."
          )}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="w-full border border-slate-300 rounded-md p-3">
          <div className="flex items-start gap-3">
            {/* Reviewer Photo */}
            <div
              className="h-12 w-24 bg-red-500 rounded-full bg-cover bg-center border-2 border-slate-500"
              style={{
                backgroundImage: `url('https://img.freepik.com/free-photo/close-up-confident-adult-woman-posing_23-2148461438.jpg?ga=GA1.1.943412425.1712498034&semt=ais_user')`,
              }}
            ></div>
            <div className="flex flex-col items-start justify-center">
              {/* Reviewer Name */}
              <h1 className="font-bold text-lg border-b border-slate-800 mb-3">
                Md Ataullah
              </h1>

              {/* Review Text */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                atque quibusdam quasi. Eos iusto fugiat error dolor
                reprehenderit distinctio magni!
              </p>
              {/* Review Photo */}
              <div className="flex flex-row gap-3 h-40 w-full rounded-lg mt-5">
                <div
                  className="w-1/2 bg-cover bg-center rounded-md"
                  style={{
                    backgroundImage: `url('https://img.freepik.com/free-photo/assistant-dentist-patient-clinic_1153-6590.jpg?ga=GA1.1.943412425.1712498034&semt=ais_user')`,
                  }}
                ></div>
                <div
                  className="w-1/2 bg-cover bg-center rounded-md"
                  style={{
                    backgroundImage: `https://img.freepik.com/free-photo/dentist-with-smile_144627-886.jpg?t=st=1720978199~exp=1720981799~hmac=978930cd048d5dbec918d1d6c3507efab7a38e3302405bd8c3e6de3e24351da6&w=900')`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSec;
