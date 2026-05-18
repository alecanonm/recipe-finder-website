import { recipesData } from "../../data/mockRecipesData";
import FoodCard from "./FoodCard/FoodCard";

const RecipesPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-neutral-900 text-[40px]/[1.2] md:text-[52px]/[1.2] xl:text-[48px]/[1.2] tracking-[-2px] font-extrabold">
          Explore our simple, healthy recipes
        </h1>
        <p className="text-[20px] leading-[140%] tracking-[-0.5px] max-w-176 xl:max-w-180 md:text-center">
          Discover eight quick, whole-food dishes that fit real-life schedules
          and taste amazing. Use the search bar to find a recipe by name or
          ingredient, or simply scroll the list and let something delicious
          catch your eye.
        </p>
        <section className="flex flex-wrap  justify-center items-center gap-8">
          {recipesData.map((recipe) => (
            <FoodCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default RecipesPage;
