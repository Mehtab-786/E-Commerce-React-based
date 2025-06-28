import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../store/actions/userActions";

function Cart() {
  const { users } = useSelector((state) => state?.UserReducer);
  const dispatch = useDispatch();

  const decreaseQuantity = (idx, product) => {
    let copyUser = { ...users, cart: [...users.cart] };

    if (product.quantity >= 2) {
      copyUser.cart[idx] = { ...product, quantity: product.quantity - 1 };
    } else {
      copyUser.cart = copyUser.cart.filter((_, indx) => indx !== idx);
    }

    dispatch(asyncUpdateUser(users.id, copyUser));
  };

  const increaseQuantity = (idx, product) => {
    let copyUser = { ...users, cart: [...users.cart] };
    copyUser.cart[idx] = { ...product, quantity: product.quantity + 1 };
    dispatch(asyncUpdateUser(users.id, copyUser));
  };

  const render = users?.cart.map((product, idx) => (
    <div
      key={idx}
      className="w-full max-w-5xl mx-auto mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md transition-all"
    >
      {/* Product Image */}
      <img
        src={product.product.image}
        alt={product.product.title}
        className="w-24 h-24 object-contain rounded border dark:border-gray-700"
      />

      {/* Product Info */}
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {product.product.title}
        </h2>
        <p className="text-green-600 font-bold mt-1">${product.product.price}</p>
      </div>

      {/* Quantity Control */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => decreaseQuantity(idx, product)}
          className="w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 text-white text-lg flex items-center justify-center"
        >
          -
        </button>
        <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {product.quantity}
        </span>
        <button
          onClick={() => increaseQuantity(idx, product)}
          className="w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-lg flex items-center justify-center"
        >
          +
        </button>
      </div>
    </div>
  ));

  return users ? (
    <div className="min-h-screen px-4 py-10 bg-gray-100 dark:bg-neutral-900">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
        Your Cart
      </h1>
      {users.cart.length > 0 ? render : (
        <p className="text-center text-gray-600 dark:text-gray-300">Your cart is empty.</p>
      )}
    </div>
  ) : (
    <p className="text-center py-10 text-gray-800 dark:text-white">Loading...</p>
  );
}

export default Cart;
