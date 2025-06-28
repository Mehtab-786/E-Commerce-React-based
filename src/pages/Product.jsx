import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadProduct } from "../store/actions/productActions";
import ProductTemplate from "../components/ProductTemplate";

function Product() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.ProductReducer);

  useEffect(() => {
    dispatch(asyncLoadProduct());
  }, []);

  return products ? (
    <div className="w-full px-4 py-10 flex flex-wrap justify-center gap-6 bg-gray-50 dark:bg-neutral-900">
      {products.map((item) => (
        <ProductTemplate item={item} key={item.id}/>
      ))}
    </div>
  ) : (
    <p className="text-center mt-10 dark:text-white">Loading...</p>
  );
}

export default Product;
