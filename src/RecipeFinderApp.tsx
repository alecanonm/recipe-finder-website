import { RouterProvider } from "react-router";
import recipeFinderRouter from "./app.router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const RecipeFinderApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={recipeFinderRouter} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default RecipeFinderApp;
