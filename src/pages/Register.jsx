import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { asyncRegisterUser } from "../store/actions/userActions";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

function Register() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerUser = (data) => {
    data.id = nanoid();
    data.isAdmin = false;
    data.cart = [];

    dispatch(asyncRegisterUser(data));
    toast("Successfully Registered 🎉🎉");

    navigate("/login");
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-300 dark:bg-neutral-900">
      <form
        onSubmit={handleSubmit(registerUser)}
        className="w-full max-w-md sm:w-[80%] md:w-[60%] lg:w-[40%] bg-gray-200 dark:bg-neutral-800 p-8 rounded-lg shadow-md dark:shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 text-center">
          Create an Account
        </h2>

        {/* Username */}

        <div className="flex flex-col">
          <div className="flex items-center ">
            <FiUser className="text-gray-400 " />
            <input
              type="text"
              placeholder="Username"
              className="px-4 py-2 rounded flex-1 border-b outline-none focus:ring-2 ring-blue-400"
              {...register("username", {
                required: true,
                minLength: 3,
                maxLength: 20,
              })}
            />
          </div>
          {errors.username?.type === "required" && (
            <span className="text-red-500 text-xs mt-1">
              Username is required
            </span>
          )}
          {errors.username?.type === "minLength" && (
            <span className="text-red-500 text-xs mt-1">
              Minimum 3 characters
            </span>
          )}
          {errors.username?.type === "maxLength" && (
            <span className="text-red-500 text-xs mt-1">
              Maximum 20 characters
            </span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <div className="flex items-center ">
          <FiMail className="text-gray-400 " />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded flex-1 border-b outline-none focus:ring-2 ring-blue-400"
            {...register("email", { required: true })}
          />
          </div>
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">Email is required</span>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <div className="flex items-center ">
          <FiLock className="text-gray-400 " />
          <input
            type="password"
            placeholder="Password"
           className="px-4 py-2 rounded flex-1 border-b outline-none focus:ring-2 ring-blue-400"
            {...register("password", {
              required: true,
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Min 8 chars, uppercase, lowercase, number, and special character",
              },
            })}
          />
          </div>
          {errors.password?.type === "required" && (
            <span className="text-red-500 text-xs mt-1">
              Password is required
            </span>
          )}
          {errors.password?.type === "pattern" && (
            <span className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-1 cursor-pointer rounded hover:bg-green-700 transition text-xl font-semibold"
        >
          Register
        </button>

        {/* Login redirect */}
        <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 dark:text-blue-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;
