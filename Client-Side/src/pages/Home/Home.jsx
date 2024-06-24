import BannerContent from '../../Utility/BannerContent';
import OnlyMobileViewAppointmentForm from '../../Utility/OnlyMobileViewAppointmentForm';
import AboutSec from '../../components/AboutSec/AboutSec';
import { Banner } from '../../components/Banner/Banner';
import ServiceSec from '../../components/ServiceSec/ServiceSec';

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
        <div>
          {/* About Section ======== */}
          <AboutSec />

          {/* Out Service section ================ */}
          <ServiceSec />
        </div>
      </div>
    </div>
  );
};

export default Home;
