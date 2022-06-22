import React, { useContext, useState } from 'react';
import FoodItem from './FoodItem';
import { ShoppingContext } from "./context/ShoppingContext";
import { Link } from 'react-router-dom';


export default function Home() {
    const { foods, categories } = useContext(ShoppingContext);
    const [foodList,setFoodList] = useState(foods);

    const filterFoods = (category_id) => {
        setFoodList(foodList => foods.filter(food => food.category_id === category_id));
    }

    return (
        <div className="card rounded-0">
            <div className="card-header bg-white d-flex justify-content-center align-items-center">
                <Link to="#!" onClick={() => setFoodList(foodList => foods)} className="mx-4 text-decoration-none text-black">
                    All
                </Link>
                {
                    categories.map(category => (
                        <Link to="#!" onClick={() => filterFoods(category.id)} key={category.id} className="mx-4 text-decoration-none text-black">
                            {
                                category.name
                            }
                        </Link>
                    ))
                }
            </div>
            <div className="card-body">
                <div className="row">
                    {
                        foodList.map(food => (
                            <FoodItem  key={food.id} food={food}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
