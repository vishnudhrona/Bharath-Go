import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Reducers/productSlice";

const store = configureStore({
    reducer : {
        productData : productSlice
    }
})

export default store