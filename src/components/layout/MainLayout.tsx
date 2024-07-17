import { Outlet } from "react-router-dom";
import Header from "../ui/shared/Header";
import Footer from "../ui/shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
