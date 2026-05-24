import iconDown from "../../../assets/images/icon-chevron-down.svg";
import searchImg from "../../../assets/images/icon-search.svg";

const CustomFilters = () => {
  return (
    <section className="flex flex-wrap justify-between xl:gap-4 gap-3 md:px-9 xl:px-18">
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
        <button className="flex relative cursor-pointer gap-2 justify-center items-center bg-neutral-0 text-neutral-900 font-medium px-4 py-2.5 rounded-[10px] border-neutral-300 border">
          Max Prep Time{" "}
          <img
            src={iconDown}
            alt="down"
          />
          <div className="absolute bg-neutral-0 border-neutral-300 border  translate-y-28.5 rounded-lg p-2 z-10 w-full">
            <ul className="flex flex-col">
              <li className="flex gap-2 p-2">
                <input
                  type="radio"
                  name="0-minutes"
                />
                <label htmlFor="">0 minutes</label>
              </li>
              <li className="flex gap-2 p-2">
                <input
                  type="radio"
                  name="0-minutes"
                />
                <label htmlFor="">5 minutes</label>
              </li>
              <li className="flex gap-2 p-2">
                <input
                  type="radio"
                  name="0-minutes"
                />
                <label htmlFor="">10 minutes</label>
              </li>
              <li className="self-start px-2 py-0.5">
                <label>Clear</label>
              </li>
            </ul>
          </div>
        </button>
        <button className="flex relative cursor-pointer gap-2 justify-center items-center bg-neutral-0 text-neutral-900 font-medium px-4 py-2.5 rounded-[10px] border-neutral-300 border">
          max Cook Time{" "}
          <img
            src={iconDown}
            alt="down"
          />
          <div className="absolute bg-neutral-0 border-neutral-300 border  translate-y-38.5 rounded-lg p-2 z-10 w-full">
            <ul className="flex flex-col">
              <li className="flex gap-2 p-2">
                <input
                  type="radio"
                  name="0-minutes"
                />
                <label htmlFor="">0 minutes</label>
              </li>
              <li className="flex gap-2 p-2">
                <input
                  type="radio"
                  name="0-minutes"
                />
                <label htmlFor="">5 minutes</label>
              </li>
              <li className="flex gap-2 p-2">
                <input
                  type="radio"
                  name="0-minutes"
                />
                <label htmlFor="">10 minutes</label>
              </li>
              <li className="flex gap-2 p-2">
                <input
                  type="radio"
                  name="0-minutes"
                />
                <label htmlFor="">15 minutes</label>
              </li>
              <li className="flex gap-2 p-2">
                <input
                  type="radio"
                  name="0-minutes"
                />
                <label htmlFor="">20 minutes</label>
              </li>
              <li className="self-start px-2 py-0.5">
                <label>Clear</label>
              </li>
            </ul>
          </div>
        </button>
      </div>
      <div className="w-full md:w-77.5 px-4 py-2.5 border-neutral-300 font-medium border relative flex justify-center items-center bg-neutral-0 gap-2 rounded-[10px]">
        <img
          src={searchImg}
          alt="search"
        />
        <input
          type="text"
          placeholder="Search by name or ingredient..."
          className="w-full outline-none"
        />
      </div>
    </section>
  );
};

export default CustomFilters;
