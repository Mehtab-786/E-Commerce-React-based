import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncCreateProduct } from "../../store/actions/productActions";
import { nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

function CreateProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const CreateProductHandler = (product) => {
    product.id = nanoid();
    dispatch(asyncCreateProduct(product));
    navigate("/product");
    toast('New product added')
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-100 dark:bg-neutral-900">
      <form
        onSubmit={handleSubmit(CreateProductHandler)}
        className="w-full max-w-lg bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-md dark:shadow-gray-700 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100">
          Add New Product
        </h2>

        {/* Title */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 dark:text-gray-300 mb-1">
            Title
          </label>
          <input
            type="text"
            placeholder="Product title..."
            className="px-4 py-2 rounded border-b dark:text-gray-200 outline-none"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="text-red-500 text-xs mt-1">Title is required</span>
          )}
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 dark:text-gray-300 mb-1">
            Category
          </label>
          <input
            type="text"
            placeholder="e.g. electronics"
            className="px-4 py-2 rounded border-b dark:text-gray-200 outline-none"
            {...register("category", { required: true })}
          />
          {errors.category && (
            <span className="text-red-500 text-xs mt-1">
              Category is required
            </span>
          )}
        </div>

        {/* Image */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 dark:text-gray-300 mb-1">
            Image URL
          </label>
          <input
            type="url"
            placeholder="https://example.com/image.jpg"
            className="px-4 py-2 rounded border-b dark:text-gray-200 outline-none"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="text-red-500 text-xs mt-1">
              Image URL is required
            </span>
          )}
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 dark:text-gray-300 mb-1">
            Price ($)
          </label>
          <input
            type="number"
            placeholder="Price"
            className="px-4 py-2 rounded border-b dark:text-gray-200 outline-none"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="text-red-500 text-xs mt-1">Price is required</span>
          )}
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 dark:text-gray-300 mb-1">
            Description
          </label>
          <textarea
            rows={2}
            placeholder="Describe your product..."
            className="px-4 py-2 rounded border-b dark:text-gray-200 outline-none resize-none"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="text-red-500 text-xs mt-1">
              Description is required
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-1 cursor-pointer rounded hover:bg-green-700 transition text-xl font-semibold"
        >
          Create Product
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
