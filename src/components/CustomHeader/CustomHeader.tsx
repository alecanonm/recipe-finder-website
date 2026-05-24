import { Link, useLocation, useNavigate } from "react-router";
import logoImage from "../../assets/images/logo.svg";
import { navUrls } from "../../utils/navigation-urls";
import CustomButton from "../ui/CustomButton";
import BurguerMenu from "./BurguerMenu";

const CustomHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="relative border-b border-neutral-300 flex p-4 md:px-8 md:pt-8 md:pb-5 xl:px-15 xl:py-5 justify-between items-center text-neutral-900">
      <Link to={"/"}>
        <img
          className="cursor-pointer"
          src={logoImage}
          alt="Healthy Recipe"
        />
      </Link>
      <nav className="hidden xl:flex">
        <ul className="flex gap-10 font-semibold text-lg/normal tracking-[-0.3px]">
          {navUrls.map((page) => {
            const isActive = location.pathname === page.to;
            return (
              <Link
                key={page.page}
                to={page.to}>
                <li className="relative group cursor-pointer">
                  {page.page}
                  <span
                    className={`absolute rounded-sm left-0 -bottom-1 h-1 w-0 bg-orange-500 group-hover:w-full transition-all duration-300  ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}></span>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
      <CustomButton
        className="hidden xl:block"
        text="Browse recipe"
        onClick={() => navigate("/recipes")}
      />
      <BurguerMenu />
    </header>
  );
};

export default CustomHeader;
