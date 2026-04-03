import { Outlet } from "react-router";

const RecipeFinderLayout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RecipeFinderLayout;
