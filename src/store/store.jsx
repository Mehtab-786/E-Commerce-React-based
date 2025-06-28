import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/UserSlice";
import productSlice from "./reducers/ProductSlice";
import  themeSlice  from "./reducers/ThemeSlice";

export default configureStore({
  reducer: {
    UserReducer: userSlice,
    ProductReducer: productSlice,
    ThemeReducer: themeSlice
  },
});
