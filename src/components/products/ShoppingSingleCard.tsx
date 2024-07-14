import React from "react";
import { TProduct } from "src/types";

const ShoppingSingleCart = (product: TProduct) => {
  return (
    <>
      <div className="w-full  p-2">
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            className="w-full h-48 object-cover"
            src={product.images}
            alt=""
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.title}</div>
            <p className="text-gray-700 text-base">{product.description}</p>
            <p className="text-gray-900 font-bold">${product.price}</p>
          </div>
          <div className="px-6 py-4">
            {/* <button
              className={`${
                inStock
                  ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                  : "bg-gray-400 cursor-not-allowed"
              } text-white font-bold py-2 px-4 rounded transition`}
              onClick={onAddToCart}
              disabled={!inStock}>
              {inStock ? "Add to Cart" : "Out of Stock"}
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingSingleCart;
