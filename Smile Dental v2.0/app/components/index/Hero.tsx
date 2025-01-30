import BannerContent from "../layout/hero/BannerContent";
import { Banner } from "../layout/hero/HeroBanner";

function Hero() {
  return (
    <div className="relative w-full">
      <Banner />
      <BannerContent />
    </div>
  );
}
export default Hero;
