import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function NavBar() {
  let { users } = useSelector((state) => state.UserReducer);
  return (
    <div className="w-full bg-gray-400 dark:bg-neutral-800 dark:text-gray-200 py-3 flex justify-center items-center gap-x-10">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/product">Products</NavLink>

      {users ? (
        <>
          {users && users.isAdmin && (
            <NavLink to="/create-product">Create Product</NavLink>
          )}
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
        </>
        // <NavLink to="/register">Register</NavLink>
      )}
    </div>
  );
}

export default NavBar;
