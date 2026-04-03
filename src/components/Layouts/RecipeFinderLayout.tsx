import { Outlet } from "react-router";
import CustomHeader from "../CustomHeader/CustomHeader";

const RecipeFinderLayout = () => {
  return (
    <div className="font-nunito">
      <CustomHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RecipeFinderLayout;
