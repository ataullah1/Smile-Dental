import Marquee from "react-fast-marquee";
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

      <Marquee pauseOnClick pauseOnHover className="mb-8">
        <div className="w-[500px] border border-slate-300 rounded-md p-3 hover:bg-[#9adbf332] duration-200 mr-6 py-8">
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
                    backgroundImage: `url('https://i.ibb.co/86pFYSp/fdf.jpg')`,
                  }}
                />
                <div
                  className="w-1/2 bg-cover bg-center rounded-md"
                  style={{
                    backgroundImage: `url('https://i.ibb.co/c86MYd8/ddd.jpg')`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[500px] border border-slate-300 rounded-md p-3 hover:bg-[#9adbf332] duration-200 mr-6 py-8">
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
                    backgroundImage: `url('https://i.ibb.co/86pFYSp/fdf.jpg')`,
                  }}
                />
                <div
                  className="w-1/2 bg-cover bg-center rounded-md"
                  style={{
                    backgroundImage: `url('https://i.ibb.co/c86MYd8/ddd.jpg')`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[500px] border border-slate-300 rounded-md p-3 hover:bg-[#9adbf332] duration-200 mr-6 py-8">
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
                    backgroundImage: `url('https://i.ibb.co/86pFYSp/fdf.jpg')`,
                  }}
                />
                <div
                  className="w-1/2 bg-cover bg-center rounded-md"
                  style={{
                    backgroundImage: `url('https://i.ibb.co/c86MYd8/ddd.jpg')`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[500px] border border-slate-300 rounded-md p-3 hover:bg-[#9adbf332] duration-200 mr-6 py-8">
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
                    backgroundImage: `url('https://i.ibb.co/86pFYSp/fdf.jpg')`,
                  }}
                />
                <div
                  className="w-1/2 bg-cover bg-center rounded-md"
                  style={{
                    backgroundImage: `url('https://i.ibb.co/c86MYd8/ddd.jpg')`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[500px] border border-slate-300 rounded-md p-3 hover:bg-[#9adbf332] duration-200 mr-6 py-8">
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
                    backgroundImage: `url('https://i.ibb.co/86pFYSp/fdf.jpg')`,
                  }}
                />
                <div
                  className="w-1/2 bg-cover bg-center rounded-md"
                  style={{
                    backgroundImage: `url('https://i.ibb.co/c86MYd8/ddd.jpg')`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Marquee>

      <Marquee pauseOnClick direction="right">
        <div className="w-[500px] border border-slate-300 rounded-md p-3 hover:bg-[#9adbf332] duration-200 mr-6">
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
                />
                <div
                  className="w-1/2 bg-cover bg-center rounded-md"
                  style={{
                    backgroundImage: `https://img.freepik.com/free-photo/dentist-making-professional-teeth-cleaning-withb-cotton-female-young-patient-dental-office_496169-907.jpg?t=st=1720979444~exp=1720983044~hmac=aa275950e12e5090f4a4849f243f2bc592baffb606f84829a398d1fa0dba01ac&w=900')`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[500px] border border-slate-300 rounded-md p-3 hover:bg-[#9adbf332] duration-200 mr-6">
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
                />
                <div
                  className="w-1/2 bg-cover bg-center rounded-md"
                  style={{
                    backgroundImage: `https://img.freepik.com/free-photo/dentist-making-professional-teeth-cleaning-withb-cotton-female-young-patient-dental-office_496169-907.jpg?t=st=1720979444~exp=1720983044~hmac=aa275950e12e5090f4a4849f243f2bc592baffb606f84829a398d1fa0dba01ac&w=900')`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[500px] border border-slate-300 rounded-md p-3 hover:bg-[#9adbf332] duration-200 mr-6">
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
                />
                <div
                  className="w-1/2 bg-cover bg-center rounded-md"
                  style={{
                    backgroundImage: `https://img.freepik.com/free-photo/dentist-making-professional-teeth-cleaning-withb-cotton-female-young-patient-dental-office_496169-907.jpg?t=st=1720979444~exp=1720983044~hmac=aa275950e12e5090f4a4849f243f2bc592baffb606f84829a398d1fa0dba01ac&w=900')`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[500px] border border-slate-300 rounded-md p-3 hover:bg-[#9adbf332] duration-200 mr-6">
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
                />
                <div
                  className="w-1/2 bg-cover bg-center rounded-md"
                  style={{
                    backgroundImage: `https://img.freepik.com/free-photo/dentist-making-professional-teeth-cleaning-withb-cotton-female-young-patient-dental-office_496169-907.jpg?t=st=1720979444~exp=1720983044~hmac=aa275950e12e5090f4a4849f243f2bc592baffb606f84829a398d1fa0dba01ac&w=900')`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default ReviewSec;
