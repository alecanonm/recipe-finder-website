import { titlesAndDescriptions } from "../../utils/titles-and-descriptions";
import CookSmarter from "../Home/CookSmarter/CookSmarter";
import OurMission from "./OurMission/OurMission";
import CustomAboutSection from "./CustomAboutSection/CustomAboutSection";
import BeyondThePlate from "./BeyondThePlate/BeyondThePlate";

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-20 xl:gap-24">
      <OurMission />
      <hr className="text-neutral-300" />
      <CustomAboutSection
        title="Why we exist
"
        items={titlesAndDescriptions.whyExist}
      />
      <hr className="text-neutral-300" />
      <CustomAboutSection
        title="Our food philosophy"
        items={titlesAndDescriptions.foodPhilosophy}
      />
      <hr className="text-neutral-300" />
      <BeyondThePlate />
      <CookSmarter />
    </div>
  );
};

export default AboutPage;
