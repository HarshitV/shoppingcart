import React, { useState, useEffect } from "react";
import "./Cart.css";

const Cart = (props) => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const myList = [];
    props.productsList.forEach((product) => {
      if (props.cart.includes(product.id.toString())) {
        myList.push(
          <div className="card">
            <div style={{ marginLeft: "8px" }}>{product.name}</div>
          </div>
        );
      }
    });
    setCartList((prev) => [...prev, ...myList]);
  }, [props.cart]);

  return (
    <div className="carts-container">
      <div className="cart-header">
        <div>Cart</div>
        <div>{cartList.length} items</div>
      </div>
      <div className="carts-list">{cartList}</div>
    </div>
  );
};

export default Cart;
