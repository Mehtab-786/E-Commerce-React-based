import { useForm } from "react-hook-form";
import notfound from '../assets/not.jpg'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncDeleteProduct,
  asyncLoadProduct,
  asyncUpdateProduct,
} from "../store/actions/productActions";

function ProductDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { products } = useSelector((state) => state.ProductReducer);
  const { users } = useSelector((state) => state.UserReducer);
  const currentProduct = products?.find((item) => item.id === id);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      title: currentProduct?.title,
      description: currentProduct?.description,
      price: currentProduct?.price,
      category: currentProduct?.category,
      image: currentProduct?.image,
    },
  });

  const UpdateProduct = (product) => {
    dispatch(asyncUpdateProduct(id, product));
    dispatch(asyncLoadProduct())
    reset();
  };

  const deleteHandler = () => {
    dispatch(asyncDeleteProduct(id));
    navigate("/product");
  };

  return currentProduct ? (
    <div className="min-h-screen px-4 py-5 flex flex-col lg:flex-row gap-10 bg-gray-100 dark:bg-neutral-900 text-gray-800 dark:text-gray-100">
      {/* Product Display Section */}
      <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={currentProduct?.image}
            alt={currentProduct?.title}
            onError={(e) => e.currentTarget.src = notfound}
            className="w-64 h-64 object-contain rounded-lg border dark:border-gray-700"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center gap-4 md:w-1/2">
          <h1 className="text-2xl font-bold">{currentProduct?.title}</h1>
          <span className="bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs uppercase font-semibold w-fit">
            {currentProduct?.category}
          </span>
          <span className="text-green-600 font-bold text-xl">
            ${currentProduct?.price}
          </span>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {currentProduct?.description}
          </p>
        </div>
      </div>

      {/* Admin Edit Section */}
      {users?.isAdmin && (
        <div className="w-full lg:w-1/2 bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md dark:shadow-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-center">Edit Product</h2>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(UpdateProduct)}
          >
            <input
              type="text"
              placeholder="Title"
              className="px-4 py-2 rounded border-b dark:text-gray-200 outline-none"
              {...register("title")}
            />
            <input
              type="text"
              placeholder="Category"
              className="px-4 py-2 rounded border-b dark:text-gray-200 outline-none"
              {...register("category")}
            />
            <input
              type="url"
              placeholder="Image URL"
              className="px-4 py-2 rounded border-b dark:text-gray-200 outline-none"
              {...register("image")}
            />
            <input
              type="number"
              placeholder="Price"
              className="px-4 py-2 rounded border-b dark:text-gray-200 outline-none"
              {...register("price")}
            />
            <textarea
              placeholder="Description"
              className="px-4 py-2 rounded border-b dark:text-gray-200 outline-none resize-none h-20"
              {...register("description")}
            />
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded"
              >
                Update
              </button>
              <button
                type="button"
                className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded"
                onClick={deleteHandler}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  ) : (
    <p className="text-center text-gray-800 dark:text-white py-10">Loading...</p>
  );
}

export default ProductDetails;
