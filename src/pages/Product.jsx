import { lazy, Suspense } from "react";
import Infinity from "react-infinite-scroll-component";
import useInfiniteProduct from "../utils/useInfiniteProduct";
const ProductTemplate = lazy(() => import("../components/ProductTemplate"));

function Product() {
  const { fetchData, hasMore, products } = useInfiniteProduct();

  return (
    <Infinity
      next={fetchData}
      hasMore={hasMore}
      dataLength={products?.length}
      loader={
        <div className="w-full flex justify-center py-6">
          <span className="text-blue-500 text-lg animate-pulse">
            Loading more products...
          </span>
        </div>
      }
      endMessage={
        <div className="w-full text-center py-10 text-green-600 font-semibold text-xl">
          🎉 Yay! You've reached the end of the list.
        </div>
      }
    >
      <div className="w-full px-4 py-10 flex flex-wrap justify-center gap-6 bg-gray-50 dark:bg-neutral-900">
        {products?.map((item, idx) => (
          <Suspense
            key={idx}
            fallback={
              <div className="w-64 h-80 flex items-center justify-center bg-white dark:bg-neutral-800 rounded-lg shadow-md animate-pulse">
                <span className="text-blue-400 font-semibold">Loading...</span>
              </div>
            }
          >
            <ProductTemplate item={item} />
          </Suspense>
        ))}
      </div>
    </Infinity>
  );
}

export default Product;
