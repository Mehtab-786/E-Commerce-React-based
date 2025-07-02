import axios from "../utils/AxiosConfig";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadLazyProduct } from "../store/reducers/ProductSlice";

function useInfiniteProduct() {
  const { products } = useSelector((state) => state?.ProductReducer);
  const [hasMore, sethasMore] = useState(true);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const { data } = await axios(
        `/products/?_start=${products.length}&_limit=5`
      );
      if (data == 0) {
        sethasMore(false);
      } else {
        sethasMore(true);
        dispatch(loadLazyProduct(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  },[]);

  return { fetchData, hasMore, products };
}

export default useInfiniteProduct;
