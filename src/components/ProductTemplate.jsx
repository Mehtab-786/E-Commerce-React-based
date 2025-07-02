import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncUpdateUser } from "../store/actions/userActions";
import { toast } from "react-toastify";
import notfound from '../assets/not.jpg'

function ProductTemplate({ item }) {
  const { users } = useSelector((state) => state?.UserReducer);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    let copyUser = { ...users, cart: [...users.cart] };
    const idx = copyUser.cart.findIndex(
      (cartItem) => cartItem?.product?.id === product?.id
    );

    if (idx === -1) {
      copyUser.cart.push({ product, quantity: 1 });
    } else {
      copyUser.cart[idx] = {product, quantity : copyUser.cart[idx].quantity + 1 };
    }

    dispatch(asyncUpdateUser(users.id, copyUser));
    toast.success("Added to cart");
  };

  return (
    <div className="w-full sm:w-[300px] rounded-xl shadow-md dark:shadow-gray-800 bg-white dark:bg-neutral-800 p-5 flex flex-col justify-between transition-all hover:shadow-lg dark:hover:shadow-md">
      {/* Product Image */}
      <img
        src={ item?.image}
        onError={(e) => e.currentTarget.src = notfound}
        alt={item.title}
        className="w-full h-48 object-contain mb-4"
      />

      {/* Title */}
      <h2 className="text-lg font-semibold mb-2 text-center text-gray-800 dark:text-gray-100">
        {item.title.length > 40 ? item.title.slice(0, 40) + "..." : item.title}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 text-center">
        {item.description.slice(0, 60)}...
      </p>

      {/* Category */}
      <span className="text-xs uppercase text-blue-500 font-medium tracking-wide text-center block mb-2">
        {item.category}
      </span>

      {/* Price and Button */}
      <div className="flex items-center justify-between mt-auto">
        <p className="text-green-600 font-bold text-base">${item.price}</p>

        <button
          onClick={() => {
            users ? addToCart(item) : toast.warning("Login to add items to cart");
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add to cart
        </button>
      </div>

      {/* More Info */}
      <Link
        to={`/product/${item.id}`}
        className="text-center text-sm text-blue-600 dark:text-blue-400 hover:underline mt-4"
      >
        More Info
      </Link>
    </div>
  );
}

export default ProductTemplate;
