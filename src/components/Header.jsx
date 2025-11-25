import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center 
      px-5 md:px-6 lg:px-7 xl:px-8
      py-3 md:py-4 lg:py-5 xl:py-6">
        <img
          className="w-10 md:w-12 lg:w-14 xl:w-16"
          src="https://logo-teka.com/wp-content/uploads/2025/07/starbucks-sign-logo.svg"
        ></img>

        <NavLink className={"text-transform: uppercase font-bold"}>
          Menu
        </NavLink>
        <NavLink className={"text-transform: uppercase font-bold"}>
          Rewards
        </NavLink>
        <NavLink className={"text-transform: uppercase font-bold"}>
          Gift cards
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
