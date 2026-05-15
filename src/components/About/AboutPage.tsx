import CookSmarter from "../Home/CookSmarter/CookSmarter";
import OurMission from "./OurMission/OurMission";
import WhyExist from "./WhyExist/WhyExist";

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-20 xl:gap-24">
      <OurMission />
      <hr className="text-neutral-300" />
      <WhyExist />
      <CookSmarter />
    </div>
  );
};

export default AboutPage;
