// components/Navbar.js

import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { toast } from "sonner";

const Navcart = () => {
  const { products } = useAppSelector((state) => state.cart);

  console.log(products.length);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (products.length > 0) {
        e.preventDefault();
        toast.info(
          "You have items in your cart. Are you sure you want to leave"
        );
        e.returnValue =
          "You have items in your cart. Are you sure you want to leave?"; // Standard for most browsers
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [products, toast]);
  return (
    <div className="   flex justify-between items-center items-center">
      <Link to="/cart" className="relative">
        <FiShoppingCart size={24} />
        {products.length > 0 && (
          <span className="absolute -top-3 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
            {products.length}
          </span>
        )}
      </Link>
    </div>
  );
};

export default Navcart;
