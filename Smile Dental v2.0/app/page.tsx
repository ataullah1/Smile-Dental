import Testemonials from "./components/index/Testemonials";
import Hero from "./components/index/Hero";
import Team from "./components/index/Team";
import HeroBenefits from "./components/index/HeroBenefits";
import Services from "./components/index/Services";
import BookVisit from "./components/layout/BookVisit";
import OnlyMobileViewAppointmentForm from "./components/layout/hero/OnlyMobileViewAppointmentForm";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between ">
        <Hero />
        <div className="w-11/12 mx-auto">
          {/* only mobile view appointment form */}
          <OnlyMobileViewAppointmentForm />
        </div>
        <HeroBenefits />
        <Team />
        <Services />
        <Testemonials />
        <BookVisit />
      </main>
    </>
  );
}
