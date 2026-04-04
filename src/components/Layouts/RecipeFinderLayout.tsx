import { Outlet } from "react-router";
import CustomHeader from "../CustomHeader/CustomHeader";

const RecipeFinderLayout = () => {
  return (
    <div className="font-nunito">
      <CustomHeader />
      <main className="px-4 pt-12 lg:px-20 text-neutral-600 flex flex-col justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default RecipeFinderLayout;
