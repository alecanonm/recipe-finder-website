import CustomButton from "../../ui/CustomButton";
import type { Recipe } from "../../../interfaces/foodInterfaces";
import { Link } from "react-router";
import DishDetails from "../../ui/DishDetails";

interface Props {
  recipe: Recipe;
}

const FoodCard = ({ recipe }: Props) => {
  return (
    <section className="bg-neutral-0 justify-center p-2 flex flex-col md:max-w-176 xl:max-w-auto xl:h-138.5 gap-4 rounded-[10px] border-neutral-300 border">
      <img
        src={recipe.image.large}
        alt="salad"
        className="rounded-[10px] xl:h-75 xl:w-90 md:h-112.5 md:w-172 "
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2.5 md:max-w-full max-w-86 xl:max-w-86">
          <h4 className="text-[20px]/[1.4] tracking-[-0.4px] font-bold line-clamp-1">
            {recipe.title}
          </h4>
          <p className="leading-[150%] tracking-[-0.3px] font-medium line-clamp-2 h-12">
            {recipe.overview}
          </p>
        </div>
        <DishDetails detail={recipe} />
      </div>
      <Link to={`/recipes/${recipe.slug}`}>
        <CustomButton
          text="View Recipe"
          className="rounded-full mt-auto w-full"
        />
      </Link>
    </section>
  );
};

export default FoodCard;
