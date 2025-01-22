import "../../assets/CSS/MealsItem.css"
import {currencyFormatter} from "../../utils/Formatting"
import Button from "../UI_Components/Button"
import { useDispatch } from "react-redux"
import { CartActions } from "../../store/CartSlice"

export default function MealItems({ meal}) {
    const dispatch = useDispatch();

    const addtoCartHandler = () => {
      dispatch(CartActions.addItemToCart({
        id:meal.id,
        name:meal.name,
        price: meal.price,
        description:meal.description
      }))
    }
    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{ currencyFormatter.format(meal.price) }</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <div className="meal-item-actions">
                    <Button onClick={addtoCartHandler}>Add to Cart</Button>
                </div>
            </article>
        </li>

    )
}
