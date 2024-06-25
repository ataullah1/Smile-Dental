import BannerContent from '../../Utility/BannerContent';
import OnlyMobileViewAppointmentForm from '../../Utility/OnlyMobileViewAppointmentForm';
import AboutSec from '../../components/AboutSec/AboutSec';
import { Banner } from '../../components/Banner/Banner';
import MiddleBanner from '../../components/MiddleBanner/MiddleBanner';
import OurDentistSec from '../../components/OurDentistSec/OurDentistSec';
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
        <div className="pb-24">
          {/* About Section ======== */}
          <AboutSec />

          {/* Out Service section ================ */}
          <ServiceSec />
        </div>
      </div>

      {/* Middle Banner */}
      <div className="w-full bg-pClr">
        <MiddleBanner />
      </div>

      {/* Our Team */}
      <OurDentistSec />

      <div className="w-11/12 mx-auto"></div>
    </div>
  );
};

export default Home;
