import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <header
      className="flex items-center justify-between border-b border-zinc-400 shadow
                        px-7 md:px-8 lg:px-9 xl:px-10
                        py-3 md:py-4 lg:py-5 xl:py-6"
    >
      <nav className="flex items-center">
        <NavLink to="/">
          <img
            className="w-8 md:w-10 lg:w-12 xl:w-14
          mr-7 md:mr-8 lg:mr-9 xl:mr-10"
            src="https://logo-teka.com/wp-content/uploads/2025/07/starbucks-sign-logo.svg"
          ></img>
        </NavLink>
        <div className="flex gap-4 md:gap-5 lg:gap-6 tracking-wide">
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `uppercase font-bold ${
                isActive ? "text-green-700" : "text-black"
              }`
            }
          >
            Menu
          </NavLink>
          <NavLink className={"text-transform: uppercase font-bold"}>
            Rewards
          </NavLink>
          <NavLink className={"text-transform: uppercase font-bold"}>
            Gift cards
          </NavLink>
        </div>
      </nav>
      <CiShoppingCart className="text-5xl text-zinc-500 hover:text-zinc-900 cursor-pointer" />
    </header>
  );
};

export default Header;
