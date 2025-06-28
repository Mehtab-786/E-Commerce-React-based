import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncDeleteUser, asyncLogoutUser, asyncUpdateUser } from "../store/actions/userActions";

function UserProfile() {
  const { users } = useSelector((state) => state?.UserReducer);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: users?.email,
      username: users?.username,
      password: users?.password,
    },
  });

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const updateUser = (data) => {
    dispatch(asyncUpdateUser(users.id, data))
  };
  const deleteHandler = () => {
    dispatch(asyncDeleteUser(users.id))
    navigate('/login')
  }
  const logoutHandler = () => {
    dispatch(asyncLogoutUser())
    navigate('/')
  }

  return users ? (
    <div className="min-h-screen flex items-center justify-center  py-10">
      <div className="rounded-2xl shadow-2xl p-10 w-full max-w-3xl flex flex-col md:flex-row gap-10">
        {/* Profile Section */}
        <div className="flex flex-col  items-center justify-center md:w-1/3 border-r border-neutral-700 pr-0 md:pr-8 mb-8 md:mb-0">
          <div className="w-28 h-28 rounded-full flex items-center justify-center text-5xl font-bold mb-4 shadow">
            {users.username?.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-2xl font-semibold mb-1 text-center ">
            {users.username}
          </h1>
          <p className="text-center mb-2">{users.email}</p>

          <button
            onClick={logoutHandler}
            type="button"
            className="bg-red-600  px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition w-full mt-2"
          >
            Logout
          </button>
        </div>
                {/* Form Section */}
        <form
          className="flex-1 flex flex-col justify-center items-center"
          onSubmit={handleSubmit(updateUser)}
        >
          <h2 className="text-xl font-semibold mb-6">Update Profile</h2>
          <input
            type="text"
            placeholder="Username"
            className="border-b border-neutral-600 bg-transparent outline-none w-72 p-3 mb-6 placeholder-gray-400 transition focus:border-blue-500"
            {...register("username")}
          />
          <input
            type="email"
            placeholder="Email"
            className="border-b border-neutral-600 bg-transparent outline-none w-72 p-3 mb-6 placeholder-gray-400 transition focus:border-blue-500"
            {...register("email")}
          />
          <input
            type="password"
            placeholder="****"
            className="border-b border-neutral-600 bg-transparent outline-none w-72 p-3 mb-8 placeholder-gray-400 transition focus:border-blue-500"
            {...register("password")}
          />
          <button  className="outline-none bg-green-700 hover:bg-green-800 w-full px-4 py-2 rounded-xl font-semibold text-lg  transition mb-2">
            Update User
          </button>
          <button   
          onClick={deleteHandler}
          type="button" className="outline-none bg-red-700 hover:bg-red-800 w-full px-4 py-2 rounded-xl font-semibold text-lg transition mb-2">
            Delete User
          </button>
        </form>
      </div>
    </div>
  ) : (
    "Loading..."
  );
}

export default UserProfile;
