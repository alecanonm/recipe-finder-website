import homeImageLarge from "../../../assets/images/image-home-real-life-large.webp";
import homeImageSmall from "../../../assets/images/image-home-real-life-small.webp";

const BuiltSection = () => {
  return (
    <section className="flex flex-col xl:flex-row justify-center items-center gap-12">
      <div className="flex flex-col md:max-w-176 xl:max-w-127.25 gap-5">
        <h2 className="text-[40px]/[1.2] md:text-[48px]/[1.2] xl:text-[48px]/[1.2] tracking-[-2px] font-extrabold">
          Built for real life
        </h2>
        <p className="text-xl/normal tracking-[-0.4]">
          Cooking shouldn’t be complicated. These recipes come in under{" "}
          <span className="relative inline-block font-bold">
            30 minutes
            <span className="absolute left-0 top-1/2 w-full -z-1 h-4 lg:h-3 bg-orange-500 opacity-90 rounded"></span>
          </span>{" "}
          of active time, fit busy schedules, and taste good enough to repeat.
        </p>
        <p className="text-xl/normal tracking-[-0.4]">
          Whether you’re new to the kitchen or just need fresh ideas, we’ve got
          you covered.
        </p>
      </div>
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet={homeImageSmall}
        />
        <img
          className="rounded-2xl"
          width={635}
          height={450}
          src={homeImageLarge}
          alt="spinach"
        />
      </picture>
    </section>
  );
};

export default BuiltSection;
