import Modal from "./Modal.jsx";
import { currencyFormatter } from "../../utils/Formatting.js";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/CSS/CheckOut.css";
import { ProgressAction } from "../../store/ProgressSlice.jsx";
import { CartActions } from "../../store/CartSlice.jsx";


export default function CheckOut() {
    const dispatch = useDispatch();
    const checkOutIsVisible = useSelector((state) => state.progress.checkOutIsVisible);
    const successIsvisible = useSelector((state)=> state.progress.successIsVisible)
    const cartItems = useSelector((state) => state.cart.items || []);
    const cartTotal = cartItems.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);
  

    function handleHideCheckOut() {
        dispatch(ProgressAction.hideCheckOut());
    }
    function handleCloseSuccess() {
        dispatch(ProgressAction.hideSuccess());
        dispatch(ProgressAction.hideCheckOut());
        dispatch(ProgressAction.hideCart());
        dispatch(CartActions.clearCart());
        dispatch(ProgressAction.clearCheckOut());
    }
    

    async function checkOutAction(fd) { //applied form action in place of form submisssion when trigering action 
        //you will get the formdata object as input 
        const customerData = Object.fromEntries(fd.entries()); // create object in key-value pair
        try {
            const response = await fetch('http://localhost:3000/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    order: {
                        items: cartItems,
                        customer: customerData
                    }
                })
            });
        
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            const data = await response.json();
        
            if (data.success) {
                    dispatch(ProgressAction.showSuccess());
            } else {
                console.log("Some error occurred");
            }
            
        } catch (error) {
            console.error("Error placing order:", error);
        }
    
    }

    return (
        <Modal open={checkOutIsVisible}>
            <form action={checkOutAction}>
                <h2>CheckOut</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
                <Input type="text" id="name" label="Full Name" />
                <Input type="email" id="email" label="E-Mail Address" />
                <Input type="text" id="street" label="Street" />
                <div className="control-row">
                    <Input type="text" id="postal-code" label="Post Code" />
                    <Input type="text" id="city" label="City" />
                </div>
                <p className="modal-actions">
                    <Button type="button" textOnly onClick={handleHideCheckOut}>Close</Button>
                    <Button type="submit">Submit Order</Button>
                </p>
            </form>
            <Modal open={successIsvisible}>
                <h2>Success...</h2>
                <p>Your order has been successfully placed! 🎉 </p>
                <p>We're getting everything ready for you. Sit back, relax, and enjoy the deliciousness coming your way soon! 🍽️</p>
                <p className="modal-actions">
                    <Button onClick={handleCloseSuccess}>Okay</Button>
                </p>
            </Modal>
        </Modal>
    );
}
