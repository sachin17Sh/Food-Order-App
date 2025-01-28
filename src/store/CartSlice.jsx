import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    items: [],
quantity: 0,

};

const CartSlice  = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers:{
        addItemToCart(state, actions){
            const newItem = actions.payload;
            const exitingItem= state.items.find((item)=> item.id === newItem.id);
            state.quantity++;
            if (!exitingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    price:newItem.price,
                    description:newItem.description,
                    quantity: 1,
                })
            } else {
                exitingItem.quantity++; 
             
            }
        },
        removeItemFromCart(state, action){
            const id = action.payload;
            const exitingItem = state.items.find((item)=> item.id === id)
            if (exitingItem) {
                state.quantity--;
            }
            if (exitingItem.quantity === 1) {
                state.item = state.items.filter((item)=> item.id !== id)
            } else{
                exitingItem.quantity--;
            }
        },
        clearCart(state){
            state.items = [],
            state.quantity= 0
        }
    
        
    }
});

export const CartActions = CartSlice.actions
export default CartSlice.reducer