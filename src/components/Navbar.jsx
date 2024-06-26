import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-screen items-center bg-slate-900 justify-center flex">
      <div className="flex flex-row justify-between mx-10 items-center text-white h-[4rem] align-middle w-[1080px] bg-slate-900">
        <NavLink to="/">
          <div className="flex flex-row items-center justify-center">
            <img src="shopify-logo-svgrepo-com.svg" className="h-[3rem] w-[5rem]" alt="Logo" />
            <p className="text-white font-extrabold">Shoptify</p>
          </div>
        </NavLink>
        <div className="flex flex-row justify-evenly w-[10rem] text-[1.5rem]">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart" className="p-1">
            <FaShoppingCart />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;