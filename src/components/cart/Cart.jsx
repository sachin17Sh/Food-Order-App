import { useSelector, useDispatch } from "react-redux";
import Modal from "../UI_Components/Modal";
import { currencyFormatter } from "../../utils/Formatting";
import Button from "../UI_Components/Button";
import { ProgressAction } from "../../store/ProgressSlice";
import "../../assets/CSS/Cart.css"
import Cartitem from "./Cartitem";
import { CartActions } from "../../store/CartSlice";

export default function Cart() {
   const dispatch = useDispatch();
   const cartIsVisible = useSelector((state) => state.progress.cartIsVisible);
    const cartItems = useSelector((state) => state.cart.items || []);
    const cartTotal = cartItems.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);
    function handleCloseCart(){
        dispatch(ProgressAction.hideCart())
    }
    function handleIncrease(itemid){
        dispatch(CartActions.addItemToCart({ id: itemid }));
    }

    function handleDecrease(itemid){
        dispatch(CartActions.removeItemFromCart(itemid));
    }
    function handleCheckout(){
        dispatch(ProgressAction.showCheckOut())
    }
    console.log("Cart Items:", cartItems);
    return (
        
        <Modal className="cart" open={cartIsVisible}>
            <h2>Your Cart</h2>
            <ul>
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <Cartitem key={item.id}
                         name={item.name} 
                         quantity={item.quantity} 
                         price={item.price} 
                         onIncrease={() => handleIncrease(item.id)} 
                         onDecrease={() => handleDecrease(item.id)} 
                         />
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </ul>
           
            <p className="cart-total">Total: {currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                {cartItems.length>0 && (<Button onClick={handleCheckout}>Go to Check Out</Button>) }
            </p>
        </Modal>
    );
}
