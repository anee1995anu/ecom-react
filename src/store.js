import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./pages/redux/productSlice";

const store= configureStore({
    reducer:{
products:productSlice,
    }
});

export default store;