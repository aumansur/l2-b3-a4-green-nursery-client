import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "../../SearchIcon";
import ShoppingCart from "../../ShoppingCart";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    {
      name: <SearchIcon />,
      path: "",
    },
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "Management",
      path: "/management",
    },
    {
      name: <ShoppingCart />,
      path: "",
    },
  ];

  return (
    <>
      <nav className="flex w-1/3 flex-wrap justify-end">
        <div className="w-full hidden md:flex justify-end gap-6 text-base font-semibold">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-400 transition"
                  : ""
              }>
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleNav}>
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
        {isOpen && (
          <div className="flex basis-full flex-col items-center">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={toggleNav}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-green-400 transition"
                    : ""
                }>
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
