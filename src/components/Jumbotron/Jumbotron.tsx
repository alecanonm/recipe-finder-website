import CustomButton from "../ui/CustomButton";

const Jumbotron = () => {
  return (
    <section className="flex flex-col justify-center lg:items-center">
      <div className="flex flex-col gap-8 lg:gap-10">
        <div className="flex flex-col lg:items-center gap-3">
          <h1 className="text-[51px]/[1.1] lg:text-[72px]/[1.1] tracking-[-2px] text-neutral-900 font-extrabold">
            <span className="relative inline-block">
              Healthy{" "}
              <span className="absolute left-0 top-1/2 w-full -z-1 h-7 lg:h-9.5 bg-orange-500 opacity-70 rounded"></span>
            </span>{" "}
            meals, zero fuss
          </h1>
          <p className="text-xl/normal w-85.75 md:w-176 lg:w-145 lg:text-center tracking-[-0.4px]">
            Discover eight quick, whole-food recipes that you can cook
            tonight—no processed junk, no guesswork.
          </p>
        </div>
        <CustomButton
          text="Start exploring"
          className="self-start lg:self-center"
        />
      </div>
    </section>
  );
};

export default Jumbotron;
