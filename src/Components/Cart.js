import React, { useState, useEffect } from "react";
import "./Cart.css";

const Cart = (props) => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const myList = [];
    let localCart = JSON.parse(localStorage.getItem("cartItems"));
    let initialCart = localCart ? localCart : [];
    initialCart.forEach(id => {
      for(let i=0;i<props.productsList.length;i++) {
        if(id === props.productsList[i].id.toString())
          myList.push(
            <div className="card">
              <div style={{ marginLeft: "8px" }}>{props.productsList[i].name}</div>
            </div>
          );
      }
    });
    setCartList(myList);
  }, [props.productsList]);

  useEffect(() => {
    const myList = [];
    let localCart = JSON.parse(localStorage.getItem("cartItems"));
    let initialCart = localCart ? localCart : [];
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
    localStorage.setItem(
      "cartItems",
      JSON.stringify([...initialCart, ...props.cart])
    );
  }, [props.cart]);

  const renderCartList = () => {
    if (cartList.length === 0)
      return <div className="carts-list empty-cart">Your cart is empty</div>;
    else return <div className="carts-list">{cartList}</div>;
  };

  return (
    <div className="carts-container">
      <div className="cart-header">
        <div>Cart</div>
        <div>{cartList.length} items</div>
      </div>
      {renderCartList()}
      <button className="checkout-button" onClick={() => setCartList([])}>
        Checkout --&gt;
      </button>
    </div>
  );
};

export default Cart;
