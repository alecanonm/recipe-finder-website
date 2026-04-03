import logoImage from "../../assets/images/logo.svg";
import hamburgerMenuIcon from "../../assets/images/icon-hamburger-menu.svg";

interface navUrl {
  page: string;
  to: string;
}

const CustomHeader = () => {
  const navUrls: navUrl[] = [
    {
      page: "Home",
      to: "/",
    },
    {
      page: "About",
      to: "/about",
    },
    {
      page: "Recipes",
      to: "/recipes",
    },
  ];

  return (
    <header className="flex p-4 md:px-8 md:pt-8 md:pb-5 xl:px-15 xl:py-5 justify-between items-center text-neutral-900">
      <img
        className="cursor-pointer"
        src={logoImage}
        alt="Healthy Recipe"
      />
      <nav className="flex">
        <ul className="hidden xl:flex gap-10 font-semibold text-lg/normal tracking-[-0.3px]">
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
      <button className="hidden xl:block cursor-pointer bg-neutral-900 px-4 py-3 text-neutral-0 rounded-[10px]">
        Browse recipes
      </button>
      <button className="xl:hidden cursor-pointer bg-neutral-300 w-10 h-10 flex items-center justify-center rounded-sm">
        <img
          src={hamburgerMenuIcon}
          alt="Hamburger menu"
        />
      </button>
    </header>
  );
};

export default CustomHeader;
