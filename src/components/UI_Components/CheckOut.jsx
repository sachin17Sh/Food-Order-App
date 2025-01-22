import Modal from "./Modal.jsx"
import { currencyFormatter } from "../../utils/Formatting.js";
import Input from "./Input.jsx";
import Button from "./Button.jsx"
import { useDispatch, useSelector } from "react-redux";
import "../../assets/CSS/CheckOut.css"
import { ProgressAction } from "../../store/ProgressSlice.jsx";

export default function CheckOut() {
    const dispatch = useDispatch();
    const checkOutIsVisible = useSelector((state)=> state.progress.checkOutIsVisible)
    const cartItems = useSelector((state) => state.cart.items || []);
    const cartTotal = cartItems.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);
    
    function handleHideCheckOut(){
        dispatch(ProgressAction.hideCheckOut())
    }

    return (
        <Modal open={checkOutIsVisible}>
            <h2>CheckOut</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
            <Input type="text" id="full-name" label="Full Name" />
            <Input type="email" id="email" label="Email Address" />
            <Input type="text" id="street" label="Street" />
            <div className="control-row">
                <Input type="text" id="post-code" label="Post Code" />
                <Input type="text" id="city" label="City" />
            </div>
            <p className="modal-actions">
                <Button type="button" textOnly onClick={handleHideCheckOut} >Close </Button>
                <Button> Submit Order</Button>
            </p>
        </Modal>
    )
}
