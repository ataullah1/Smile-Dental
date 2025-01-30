import BookVisit from "../components/layout/BookVisit";
import about from "@/public/about.webp";
import OurTeamAbout from "../components/about/OurTeamAbout";
import OurMission from "../components/about/OurMission";
import { Metadata } from "next";
import HeroHeaders from "../components/layout/HeroHeaders";

export const metadata: Metadata = {
  title: "About",
};

function About() {
  return (
    <>
      <HeroHeaders />
      <OurMission />
      <OurTeamAbout />
      <BookVisit />
    </>
  );
}
export default About;
