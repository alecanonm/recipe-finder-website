import type { Recipe } from "../../interfaces/foodInterfaces";
import { foodDetails } from "../../utils/food-details";

interface Props {
  detail: Recipe;
  className?: string;
}

const DishDetails = ({ detail, className }: Props) => {
  return (
    <ul
      className={`flex flex-wrap gap-x-4 justify-start items-center gap-y-2 md:max-w-full xl:max-w-86 max-w-86 ${className}`}>
      <li className="flex gap-1.5">
        <img
          src={foodDetails[0].image}
          alt="icon"
        />
        <p className="leading-[150%] tracking-[-0.3px]">
          {foodDetails[0].detail} {detail.servings}
        </p>
      </li>
      <li className="flex gap-1.5">
        <img
          src={foodDetails[1].image}
          alt="icon"
        />
        <p className="leading-[150%] tracking-[-0.3px]">
          {foodDetails[1].detail} {detail.prepMinutes} mins
        </p>
      </li>
      <li className="flex gap-1.5">
        <img
          src={foodDetails[2].image}
          alt="icon"
        />
        <p className="leading-[150%] tracking-[-0.3px]">
          {foodDetails[2].detail} {detail.cookMinutes} min
        </p>
      </li>
    </ul>
  );
};

export default DishDetails;
