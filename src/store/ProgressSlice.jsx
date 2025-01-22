import { createSlice } from "@reduxjs/toolkit";

const initialProgressState = {
    cartIsVisible: false,  
    checkOutIsVisible: false
};

const ProgressSlice = createSlice({
    name: 'progress',
    initialState: initialProgressState,
    reducers: {
        showCart(state) {
            state.cartIsVisible = true;
        },
        hideCart(state) {
            state.cartIsVisible = false;
        },
        showCheckOut(state){
            state.checkOutIsVisible = true;
        },
        hideCheckOut(state){
            state.checkOutIsVisible = false;
        }
    }
});

export const ProgressAction = ProgressSlice.actions;
export default ProgressSlice.reducer;
