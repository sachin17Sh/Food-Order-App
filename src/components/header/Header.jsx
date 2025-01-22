import "../../assets/CSS/Header.css";
import logo from "../../assets/logo.jpg";
import Button from "../UI_Components/Button";
import { useSelector, useDispatch } from "react-redux";
import {ProgressAction} from "../../store/ProgressSlice"

export default function Header() {
    const cartQuantity = useSelector((state) => state.cart.quantity);
    const dispatch = useDispatch()
    function handleCartShow() {
        dispatch(ProgressAction.showCart());
    }
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="Logo" />
                <h1>Order Food</h1>
            </div>
            <div>
                <Button textOnly onClick={handleCartShow}>My Cart ({cartQuantity})</Button>
            </div>
        </header>
    );
}














































