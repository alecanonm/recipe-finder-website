import { createBrowserRouter } from "react-router";
import HomePage from "./components/Home/HomePage";
import RecipeFinderLayout from "./components/Layouts/RecipeFinderLayout";

const recipeFinderRouter = createBrowserRouter([
  {
    path: "/",
    element: <RecipeFinderLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default recipeFinderRouter;
