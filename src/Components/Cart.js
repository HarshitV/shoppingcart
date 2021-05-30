import React, { useState, useEffect } from "react";
import "./Cart.css";

let cartId = 0;
const Cart = (props) => {
  const [cartList, setCartList] = useState([]);

  const findCartItems = (cart) => {
    const myList = [];
    cart.forEach((id) => {
      if (Number(id) in props.productsList)
        myList.push(
          <div key={++cartId} className="card">
            <div style={{ marginLeft: "8px" }}>
              {props.productsList[Number(id)]}
            </div>
          </div>
        );
      });
    return myList;
  };

  useEffect(() => {
    let localCart = JSON.parse(localStorage.getItem("cartItems"));
    let initialCart = localCart ? localCart : [];
    const myList = findCartItems(initialCart);
    setCartList(myList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.productsList]);

  useEffect(() => {
    let localCart = JSON.parse(localStorage.getItem("cartItems"));
    let initialCart = localCart ? localCart : [];
    const myList = findCartItems(props.cart);
    setCartList((prev) => [...prev, ...myList]);
    localStorage.setItem(
      "cartItems",
      JSON.stringify([...initialCart, ...props.cart])
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.cart]);

  const renderCartList = () => {
    if (cartList.length === 0)
      return <div className="carts-list empty-cart">Your cart is empty</div>;
    return <div className="carts-list">{cartList}</div>;
  };

  const checkout = () => {
    setCartList([]);
    localStorage.setItem("cartItems", "[]");
  };

  return (
    <div className="carts-container">
      <div className="cart-header">
        <div>Cart</div>
        <div>{cartList.length} items</div>
      </div>
      {renderCartList()}
      <button className="checkout-button" onClick={checkout}>
        Checkout &rarr;
      </button>
    </div>
  );
};

export default Cart;
