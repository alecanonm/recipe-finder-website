import logoImage from "../../assets/images/logo.svg";
import { navUrls } from "../../utils/navigation-urls";
import CustomButton from "../ui/CustomButton";
import BurguerMenu from "./BurguerMenu";

const CustomHeader = () => {
  return (
    <header className="relative border-b border-neutral-300 flex p-4 md:px-8 md:pt-8 md:pb-5 xl:px-15 xl:py-5 justify-between items-center text-neutral-900">
      <img
        className="cursor-pointer"
        src={logoImage}
        alt="Healthy Recipe"
      />
      <nav className="hidden xl:flex">
        <ul className="flex gap-10 font-semibold text-lg/normal tracking-[-0.3px]">
          {navUrls.map((page) => (
            <li
              className="relative group cursor-pointer"
              key={page.page}>
              {page.page}
              <span className="absolute rounded-sm left-0 -bottom-1 h-1 w-0 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>
      </nav>
      <CustomButton
        className="hidden xl:block"
        text="Browse recipe"
      />
      <BurguerMenu />
    </header>
  );
};

export default CustomHeader;
