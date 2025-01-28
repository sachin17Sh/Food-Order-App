import { createSlice } from "@reduxjs/toolkit";

const initialProgressState = {
    cartIsVisible: false,  
    checkOutIsVisible: false,
    successIsVisible: false,
    clearCheckOutData: false
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
        },
        showSuccess(state) {
            state.successIsVisible = true;
        },
        hideSuccess(state) {
            state.successIsVisible = false;
        },
        clearCheckOut(state){
            state.clearCheckOutData
        }
    }
});

export const ProgressAction = ProgressSlice.actions;
export default ProgressSlice.reducer;
