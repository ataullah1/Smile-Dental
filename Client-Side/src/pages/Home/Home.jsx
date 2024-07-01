import BannerContent from '../../Utility/BannerContent';
import OnlyMobileViewAppointmentForm from '../../Utility/OnlyMobileViewAppointmentForm';
import AboutSec from '../../components/AboutSec/AboutSec';
import { Banner } from '../../components/Banner/Banner';
import BlogSec from '../../components/BlogSec/BlogSec';
import MiddleBanner from '../../components/MiddleBanner/MiddleBanner';
import SecondMiddleBanner from '../../components/MiddleBanner/SecondMiddleBanner';
import OurDentistSec from '../../components/OurDentistSec/OurDentistSec';
import ReviewSec from '../../components/ReviewSec/ReviewSec';
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

      {/* First Middle Banner */}
      <div className="w-full bg-pClr">
        <MiddleBanner />
      </div>

      {/* Our Team */}
      <OurDentistSec />

      {/* Second Middle Banner */}

      <SecondMiddleBanner />

      <div className="w-11/12 mx-auto">
        <BlogSec />
        <ReviewSec />
      </div>
    </div>
  );
};

export default Home;
