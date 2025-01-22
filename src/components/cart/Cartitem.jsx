import { currencyFormatter } from "../../utils/Formatting"
import "../../assets/CSS/CartItem.css"
export default function Cartitem({name, quantity, price, onIncrease, onDecrease}) {
  return (
    <li className="cart-item">
      <p>{name} -  {quantity}  x {currencyFormatter.format(price)}</p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  )
}
