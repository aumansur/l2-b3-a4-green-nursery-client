import { useAppDispatch } from "@/redux/hooks";
import { TProduct } from "@/types";
import { NavLink } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { addToCart } from "@/redux/features/cart/cartSlice";

const ProductCard = ({ product }: { product: TProduct }) => {
  const dispatch = useAppDispatch();
  const inStock = product.quantity > 0;

  const onAddToCart = () => {
    if (inStock) {
      console.log("Adding product to cart:", product); // Log product for debugging purposes
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="w-full  p-2">
      <div className="max-w-sm h-[500px] flex rounded-lg flex-col justify-around transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          className="w-full rounded-t-lg h-48 overflow-hidden object-cover"
          src={product.images}
          alt={product.title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.title}</div>
          <p className="text-gray-700 text-base">{product.description}</p>
          <p className="text-gray-700 text-base">${product.price}</p>

          <div className="flex justify-between">
            <Rating
              style={{ maxWidth: 120 }}
              value={parseInt(product.rating.toString())}
              readOnly
            />
          </div>
        </div>
        <div className="px-6 py-4 flex justify-between items-center">
          <NavLink to={`/product/${product._id}`}>
            <button className="my-primary-btn-outline transition ">
              Details
            </button>
          </NavLink>
          <div>
            <button
              onClick={onAddToCart}
              disabled={!inStock}
              className={`${
                inStock
                  ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                  : "bg-gray-400 cursor-not-allowed"
              } text-white font-bold py-2 px-4 rounded transition`}>
              {inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
