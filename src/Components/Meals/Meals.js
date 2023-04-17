import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvialableMeals from "./AvailableMeals";
const Meals = () => {
return (
    <Fragment>
        <MealsSummary/>
        <AvialableMeals/>
    </Fragment>
)
}

export default Meals;