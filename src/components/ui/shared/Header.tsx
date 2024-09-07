import Nav from "./Nav";
import logoImage from "../../../assets/aa.png";
import { NavLink } from "react-router-dom";
import Container from "@/components/Container";

const Header = () => {
  return (
    <Container
      className={`sticky bg-green-500 bg-opacity-10 top-0 z-[20] flex-wrap mx-auto flex w-full items-center justify-between py-4 `}>
      <NavLink to="/">
        <img className="h-16 " src={logoImage} alt="Logo" />
      </NavLink>
      <Nav />
    </Container>
  );
};
export default Header;
