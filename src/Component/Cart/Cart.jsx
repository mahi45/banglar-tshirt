import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;

  if (cart.length === 0) {
    message = <p>Please add some products</p>;
  }
  return (
    <div>
      <h2
        className={
          cart.length == 2 ? "seagreen" : cart.length == 3 ? "orange" : "cyan"
        }
      >
        Order Summary: {cart.length}
      </h2>
      {cart.length === 0 ? (
        <span>Please Buy some products</span>
      ) : (
        "Here is your product"
      )}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
      {cart.length == 2 && "You got bonus for two"}
    </div>
  );
};

export default Cart;
