import CustomButton from "../ui/CustomButton";

const Jumbotron = () => {
  return (
    <section className="flex flex-col justify-center lg:items-center">
      <h1 className="text-[51px]/[1.1] lg:text-[72px]/[1.1] tracking-[-2px] text-neutral-900 font-extrabold">
        Healthy meals, zero fuss
      </h1>
      <p className="text-xl/normal w-85.75 md:w-176 lg:w-145 lg:text-center tracking-[-0.4px]">
        Discover eight quick, whole-food recipes that you can cook tonight—no
        processed junk, no guesswork.
      </p>
      <CustomButton text="Start exploring" />
    </section>
  );
};

export default Jumbotron;
