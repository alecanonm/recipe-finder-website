import { Outlet } from "react-router";
import CustomHeader from "../CustomHeader/CustomHeader";
import CustomFooter from "../CustomFooter/CustomFooter";

const RecipeFinderLayout = () => {
  return (
    <div className="font-nunito">
      <CustomHeader />
      <main className="px-4 relative pt-12 lg:px-20 text-neutral-600 flex flex-col justify-center items-center">
        <Outlet />
      </main>
      <CustomFooter />
    </div>
  );
};

export default RecipeFinderLayout;
