import "../../assets/CSS/MealsItem.css"
import {currencyFormatter} from "../../utils/Formatting"
import Button from "../button/Button"
export default function MealItems({ meal }) {
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
                    <Button>Add to Cart</Button>
                </div>
            </article>
        </li>

    )
}
