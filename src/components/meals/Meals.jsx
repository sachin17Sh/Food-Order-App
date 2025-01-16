import { useEffect, useState } from "react"
import "../../assets/CSS/Meals.css"
import MealItems from "./MealItems";
export default function Meals() {
    const [loadedMeals, setloadedMeals] = useState([]);
    useEffect(() => {
        async function fetchMeals() {
            try {
                const response = await fetch('http://localhost:3000/meals');
                if (!response.ok) {
                    console.log("Unable to fetch Data");
                    return;
                }
                const meals = await response.json();
                setloadedMeals(meals);
            } catch (error) {
                console.log("Failed to fetch Data");
            }   
        }
        fetchMeals();
    }, [])

    return (
        <ul id="meals">
        {loadedMeals.map((meal)=>(
            <MealItems key={meal.id} meal={meal}/>
        ))}
        </ul>
    )
}
