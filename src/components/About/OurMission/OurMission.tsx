import missionImg from "../../../assets/images/image-about-our-mission-large.webp";
import smallImgMission from "../../../assets/images/image-about-our-mission-small.webp";

const OurMission = () => {
  return (
    <section className="flex flex-col xl:flex-row gap-10 md:gap-16 justify-center items-center">
      <div className="flex flex-col items-start gap-6 xl:w-135">
        <p className="bg-orange-500 font-bold text-neutral-900 px-1.5 py-0.5 rounded-md">
          Our mission
        </p>
        <h1 className="text-[40px]/[1.2] md:text-[48px]/[1.2] xl:text-[52px]/[1.1] tracking-[-2px] font-extrabold">
          Help more people cook nourishing meals, more often.{" "}
        </h1>
        <div className="flex flex-col gap-4  text-xl leading-7 tracking-[-0.5]">
          <p>
            Healthy Recipe Finder was created to prove that healthy eating can
            be convenient, affordable, and genuinely delicious.
          </p>
          <p>
            We showcase quick, whole-food dishes that anyone can master—no fancy
            equipment, no ultra-processed shortcuts—just honest ingredients and
            straightforward steps.
          </p>
        </div>
      </div>
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet={smallImgMission}
        />
        <img
          className="rounded-2xl"
          width={618}
          height={600}
          src={missionImg}
          alt="spinach"
        />
      </picture>
    </section>
  );
};

export default OurMission;
