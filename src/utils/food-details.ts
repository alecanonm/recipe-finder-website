import iconTime from "../assets/images/icon-cook-time.svg";
import iconPrepTime from "../assets/images/icon-prep-time.svg";
import iconServing from "../assets/images/icon-servings.svg";

interface foodDetails {
  image: string;
  detail: string;
}

export const foodDetails: foodDetails[] = [
  {
    image: iconServing,
    detail: "Serving:",
  },
  {
    image: iconPrepTime,
    detail: "Prep:",
  },
  {
    image: iconTime,
    detail: "Cook:",
  },
];
