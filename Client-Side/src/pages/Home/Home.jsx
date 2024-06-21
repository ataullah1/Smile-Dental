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
        <div className="">

        </div>
      </div>
      
    </div>
  );
};

export default Home;
