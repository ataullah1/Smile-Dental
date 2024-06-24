import BannerContent from '../../Utility/BannerContent';
import OnlyMobileViewAppointmentForm from '../../Utility/OnlyMobileViewAppointmentForm';
import { Banner } from '../../components/Banner/Banner';

const Home = () => {
  return (
    <div className="">
      <div className="relative">
        <Banner />
        <BannerContent />
      </div>

      <div className="w-11/12 mx-auto">
        {/* only mobile view appointment form */}
        <OnlyMobileViewAppointmentForm />

        {/* Start main section  ========= */}
        <div className="flex flex-col lg:flex-row gap-5 my-14">
          <div className="w-full lg:w-1/2 min-h-60 bg-red-300"></div>
          <div className="w-full lg:w-1/2 min-h-60 bg-green-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
