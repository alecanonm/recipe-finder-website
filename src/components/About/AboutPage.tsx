import OurMission from "./OurMission/OurMission";

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-20 xl:gap-24">
      <OurMission />
      <hr className="text-neutral-300" />
    </div>
  );
};

export default AboutPage;
