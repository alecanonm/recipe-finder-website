import { useState } from "react";
import iconDown from "../../../assets/images/icon-chevron-down.svg";
import searchImg from "../../../assets/images/icon-search.svg";
import useCustomParams from "../../../hooks/useCustomParams";

const prepOptions = [0, 5, 10];
const cookOptions = [0, 5, 10, 15, 20];

const CustomFilters = () => {
  const { cook, prep, search, updateParam, setSearchParams, searchParams } =
    useCustomParams();

  const [openDropdown, setOpenDropdown] = useState<"prep" | "cook" | null>(
    null,
  );
  return (
    <section className="flex flex-wrap justify-between xl:gap-4 gap-3 md:px-9 xl:px-18">
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
        <button
          onClick={() =>
            setOpenDropdown((prev) => (prev === "prep" ? null : "prep"))
          }
          className="flex relative cursor-pointer gap-2 justify-center items-center bg-neutral-0 text-neutral-900 font-medium px-4 py-2.5 rounded-[10px] border-neutral-300 border">
          Max Prep Time{" "}
          <img
            src={iconDown}
            alt="down"
          />
          {openDropdown === "prep" && (
            <div className="absolute bg-neutral-0 border-neutral-300 border  translate-y-28.5 rounded-lg p-2 z-10 w-full">
              <ul className="flex flex-col">
                {prepOptions.map((time) => (
                  <li
                    key={time}
                    className="flex gap-2 p-2">
                    <input
                      type="radio"
                      name="prep"
                      checked={prep === time.toString()}
                      onChange={() => updateParam("prep", time.toString())}
                    />

                    <label>{time} minutes</label>
                  </li>
                ))}

                <li
                  className="self-start px-2 py-0.5 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    updateParam("prep", null);
                  }}>
                  Clear
                </li>
              </ul>
            </div>
          )}
        </button>
        <button
          onClick={() =>
            setOpenDropdown((prev) => (prev === "cook" ? null : "cook"))
          }
          className="flex relative cursor-pointer gap-2 justify-center items-center bg-neutral-0 text-neutral-900 font-medium px-4 py-2.5 rounded-[10px] border-neutral-300 border">
          max Cook Time{" "}
          <img
            src={iconDown}
            alt="down"
          />
          {openDropdown === "cook" && (
            <div className="absolute bg-neutral-0 border-neutral-300 border  translate-y-38.5 rounded-lg p-2 z-10 w-full">
              <ul className="flex flex-col">
                {cookOptions.map((time) => (
                  <li
                    key={time}
                    className="flex gap-2 p-2">
                    <input
                      type="radio"
                      name="cook"
                      className="cursor-pointer"
                      checked={cook === time.toString()}
                      onChange={() => updateParam("cook", time.toString())}
                    />

                    <label>{time} minutes</label>
                  </li>
                ))}

                <li
                  className="self-start px-2 py-0.5 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    updateParam("cook", null);
                  }}>
                  Clear
                </li>
              </ul>
            </div>
          )}
        </button>
      </div>
      <div className="w-full md:w-77.5 px-4 py-2.5 border-neutral-300 font-medium border relative flex justify-center items-center bg-neutral-0 gap-2 rounded-[10px]">
        <img
          src={searchImg}
          alt="search"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => {
            const params = new URLSearchParams(searchParams);
            params.set("search", e.target.value);
            setSearchParams(params);
          }}
          placeholder="Search by name or ingredient..."
          className="w-full outline-none cursor-pointer"
        />
      </div>
    </section>
  );
};

export default CustomFilters;
