import { createBrowserRouter } from "react-router";
import HomePage from "./components/Home/HomePage";
import RecipeFinderLayout from "./components/Layouts/RecipeFinderLayout";
import AboutPage from "./components/About/AboutPage";

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
    ],
  },
]);

export default recipeFinderRouter;
