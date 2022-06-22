import React, { useContext } from 'react';
import { ShoppingContext } from "./context/ShoppingContext";


export default function FoodItem ({food}) {
    const { addToCart } = useContext(ShoppingContext);

    return (
        <div className="col-md-4 mb-2">
            <div className="card" style={{width: '18rem'}}>
                <img src={food.food_image} height="200" className="card-img-top" alt={food.food_name} />
                <div className="card-body">
                    <h5 className="card-title">{food.food_name}</h5>
                    <p className="card-text">{food.food_price}$</p>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#food-${food.id}`} aria-expanded="true" aria-controls="collapseOne">
                                    <i className="bi bi-eye"></i>
                                </button>
                            </h2>
                            <div id={`food-${food.id}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="lead">
                                        {food.food_desc}
                                    </div>
                                    <button 
                                        onClick={() => addToCart(food)}
                                        className="btn btn-danger mt-2">
                                        <i className="bi bi-cart"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
