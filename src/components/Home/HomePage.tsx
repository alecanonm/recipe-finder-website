import BuiltSection from "./BuiltSection/BuiltSection";
import CookSmarter from "./CookSmarter/CookSmarter";
import GetSection from "./GetSection/GetSection";
import Jumbotron from "./Jumbotron/Jumbotron";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-20  xl:gap-24">
      <Jumbotron />
      <GetSection />
      <hr className="text-neutral-300" />
      <BuiltSection />
      <CookSmarter />
      <hr />
    </div>
  );
};

export default HomePage;
