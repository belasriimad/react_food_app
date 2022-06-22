import React, { useContext } from "react";
import { ShoppingContext } from "./context/ShoppingContext";

export default function Cart() {
  const { cartItems, incrementQ, decrementQ, removeFromCart } =
    useContext(ShoppingContext);

  return (
    <div className="row my-4">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Subtotal</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>
                      <img
                        src={item.food_image}
                        alt={item.food_name}
                        className="img-fluid rounded"
                        width={60}
                        height={60}
                      />
                    </td>
                    <td>{item.food_name}</td>
                    <td>
                      <i
                        className="bi bi-caret-up"
                        style={{ cursor: "pointer" }}
                        onClick={() => incrementQ(item)}
                      ></i>
                      <span className="mx-2">{item.quantity}</span>
                      <i
                        className="bi bi-caret-down"
                        style={{ cursor: "pointer" }}
                        onClick={() => decrementQ(item)}
                      ></i>
                    </td>
                    <td>${item.food_price}</td>
                    <td>${item.food_price * item.quantity}</td>
                    <td>
                      <i
                        className="bi bi-cart-x text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => removeFromCart(item)}
                      ></i>
                    </td>
                  </tr>
                ))}
                <tr>
                  <th colSpan={3} className="text-center">
                    Total
                  </th>
                  <th colSpan={3} className="text-center">
                    <span className="badge bg-danger rounded-pill">
                      $
                      {cartItems.reduce(
                        (acc, item) => (acc += item.food_price * item.quantity),
                        0
                      )}
                    </span>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
