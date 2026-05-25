import { Link, useParams } from "react-router";
import { recipesData } from "../../data/mockRecipesData";
import DishDetails from "../ui/DishDetails";
import bulletPointImg from "../../assets/images/icon-bullet-point.svg";
import FoodCard from "../Recipes/FoodCard/FoodCard";

const RecipePage = () => {
  const { slug } = useParams();
  const recipe = recipesData.find((item) => item.slug === slug);
  const randomRecipes = recipesData
    .filter((recipe) => recipe.slug != slug)
    .slice(0, 3);

  if (!recipe) {
    return <h1>Recipe Not found</h1>;
  }

  return (
    <article className="flex flex-col gap-16">
      <div className="flex flex-wrap gap-10">
        <picture className="flex flex-col gap-4">
          <p>
            <Link to={"/recipes"}>Recipes</Link> /{" "}
            <span className="text-[17px]/[1.5] tracking-[-0.3] font-semibold">
              {recipe?.title}
            </span>
          </p>
          <img
            src={recipe?.image.large}
            alt={slug}
            className="lg:w-145 lg:h-145 rounded-[16.11px]"
          />
        </picture>
        <section className="max-w-143 flex flex-col gap-5">
          <h2 className="text-neutral-900 text-[48px]/[1.2] tracking-[-2px] font-extrabold">
            {recipe?.title}
          </h2>
          <p className="font-medium tracking-[-0.4] text-[20px]/[1.4]">
            {recipe?.overview}
          </p>
          <DishDetails
            detail={recipe}
            className="xl:max-w-full font-bold"
          />
          <div className="flex flex-col gap-4">
            <h3 className="text-[24px]/[1.3] tracking-[-1px] font-bold">
              Ingredients:
            </h3>
            <ul className="flex flex-col gap-2">
              {recipe.ingredients.map((ingredient) => (
                <li
                  className="flex gap-2"
                  key={ingredient}>
                  <img
                    src={bulletPointImg}
                    alt="bullet"
                    width={24}
                    height={24}
                  />
                  <p className="font-medium tracking-[-0.4] text-[20px]/[1.4]">
                    {ingredient}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[24px]/[1.3] tracking-[-1px] font-bold">
              Instructions:
            </h3>
            <ul className="flex flex-col gap-2">
              {recipe.instructions.map((instruction) => (
                <li
                  className="flex gap-2"
                  key={instruction}>
                  <img
                    src={bulletPointImg}
                    alt="bullet"
                    width={24}
                    height={24}
                  />
                  <p className="font-medium tracking-[-0.4] text-[20px]/[1.4]">
                    {instruction}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <hr className="text-neutral-300" />
      <section className="flex flex-col gap-6">
        <h3 className="text-[32px]/[1.3] font-bold">More recipes</h3>
        <div className="flex flex-wrap gap-8">
          {randomRecipes.map((recipe) => (
            <FoodCard recipe={recipe} />
          ))}
        </div>
      </section>
    </article>
  );
};

export default RecipePage;
