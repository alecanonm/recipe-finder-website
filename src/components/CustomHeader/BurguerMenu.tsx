import { useState } from "react";
import hamburgerMenuIcon from "../../assets/images/icon-hamburger-menu.svg";
import { navUrls } from "../../utils/navigation-urls";
import CustomButton from "../ui/CustomButton";

const BurguerMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setShowMenu((prev) => !prev)}
        className="xl:hidden cursor-pointer  bg-neutral-300 w-10 h-10 flex items-center justify-center rounded-sm">
        <img
          src={hamburgerMenuIcon}
          alt="Hamburger menu"
        />
      </button>
      {showMenu && (
        <div className="z-50 block xl:hidden absolute top-17 right-3 md:top-21 md:right-7 border border-neutral-300 p-2 rounded-lg min-w-[92%] bg-neutral-0 shadow-neutral-300 shadow-xl">
          <nav>
            <ul className="flex flex-col font-semibold text-lg/normal tracking-[-0.3px]">
              {navUrls.map((page) => (
                <li
                  className="relative px-2 py-3 group cursor-pointer"
                  key={page.page}>
                  {page.page}
                </li>
              ))}
            </ul>
          </nav>
          <CustomButton
            className="w-full"
            text="Browse recipe"
          />
        </div>
      )}
    </>
  );
};

export default BurguerMenu;
