import { Outlet } from "react-router-dom";
import Header from "../ui/shared/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
