import instagramIcon from "../assets/images/icon-instagram.svg";
import tiktokIcon from "../assets/images/icon-tiktok.svg";
import butterFlyIcon from "../assets/images/icon-bluesky.svg";

interface navUrl {
  page: string;
  to: string;
}

interface socialUrl {
  socialIcon: string;
  to: string;
}

export const navUrls: navUrl[] = [
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

export const socialsUrls: socialUrl[] = [
  {
    socialIcon: instagramIcon,
    to: "https://www.linkedin.com/in/alecanonm/",
  },
  {
    socialIcon: tiktokIcon,
    to: "https://www.linkedin.com/in/alecanonm/",
  },
  {
    socialIcon: butterFlyIcon,
    to: "https://www.linkedin.com/in/alecanonm/",
  },
];
