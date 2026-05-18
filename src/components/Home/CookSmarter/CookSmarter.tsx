import CustomButton from "../../ui/CustomButton";
import forkImage from "../../../assets/images/pattern-fork.svg";
import knifeImage from "../../../assets/images/pattern-knife.svg";

const CookSmarter = () => {
  return (
    <section className="relative overflow-hidden flex flex-col gap-10 justify-center items-center bg-neutral-200 min-h-98 rounded-2xl">
      <img
        src={forkImage}
        alt="fork"
        className="hidden lg:block absolute xl:-left-20 lg:-bottom-15 lg:-left-15 xl:-bottom-5 w-52 xl:w-auto"
      />
      <div className="flex flex-col gap-3">
        <h2 className="text-neutral-900 text-[40px]/[1.2] text-center md:text-[48px]/[1.2] xl:text-[48px]/[1.2] tracking-[-2px] font-extrabold z-10">
          Ready to cook smarter?
        </h2>
        <p className="text-xl/normal text-center tracking-[-0.4]">
          Hit the button, pick a recipe, and get dinner on the table—fast.
        </p>
      </div>
      <CustomButton text="Browse recipes" />
      <img
        src={knifeImage}
        alt="knife"
        className="hidden lg:block absolute xl:-right-20 lg:-top-15 lg:-right-15 xl:-bottom-5 w-52 xl:w-auto"
      />
    </section>
  );
};

export default CookSmarter;
