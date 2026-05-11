import carrotIcon from "../assets/images/icon-whole-food-recipes.svg";
import minimunIcon from "../assets/images/icon-minimum-fuss.svg";
import searchIcon from "../assets/images/icon-search-in-seconds.svg";

interface getItem {
  imageUrl: string;
  title: string;
  text: string;
}

export const getSection: getItem[] = [
  {
    imageUrl: carrotIcon,
    title: "Whole-food recipes",
    text: "Each dish uses everyday, unprocessed ingredients.",
  },
  {
    imageUrl: minimunIcon,
    title: "Minimum fuss",
    text: "All recipes are designed to make eating healthy quick and easy.",
  },
  {
    imageUrl: searchIcon,
    title: "Search in seconds",
    text: "Filter by name or ingredient and jump straight to the recipe you need.",
  },
];
