import { NavigationMenuDemo } from "./nav";
import Logo from "./Logo";
import Navbtn from "./navbtn";
const Header = () => {
  return (
    <div className=" fixed z-10 top-0 left-0 w-full bg-black/50 backdrop-blur-2xl  py-3 ">
      <div className="max-w-6xl flex justify-between mx-auto items-center">
        <Logo className={""} />
        <NavigationMenuDemo />
        <Navbtn />
      </div>
    </div>
  );
};

export default Header;
