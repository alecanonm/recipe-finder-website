import { createBrowserRouter } from "react-router";
import HomePage from "./components/Home/HomePage";
import RecipeFinderLayout from "./components/Layouts/RecipeFinderLayout";
import AboutPage from "./components/About/AboutPage";
import RecipesPage from "./components/Recipes/RecipesPage";

const recipeFinderRouter = createBrowserRouter([
  {
    path: "/",
    element: <RecipeFinderLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/recipes",
        element: <RecipesPage />,
      },
    ],
  },
]);

export default recipeFinderRouter;
