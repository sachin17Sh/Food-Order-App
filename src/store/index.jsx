import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import progressReducer from "./ProgressSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        progress: progressReducer
    },
});

export default store;
