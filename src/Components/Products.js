import React, { useState } from "react";
import "./Products.css";
import SearchBar from "./SearchBar";

const Products = (props) => {
  const [checked, setChecked] = useState([]);

  const handleInputChange = (e) => {
    let value = e.target.value;
    let list = checked;
    if (e.target.checked) list.push(value);
    else list = list.filter((el) => el !== value);
    setChecked(list);
  };

  const renderList = () => {
    const myList = [];
    for(let key in props.productsList) {
      myList.push(
        <div key={key} className="card">
          <input
            name="itemCheckbox"
            type="checkbox"
            value={key}
            onChange={handleInputChange}
          />
          <div style={{ marginLeft: "8px" }}>{props.productsList[key]}</div>
        </div>
      );
    }
    if (myList.length === 0)
      return <div className="carts-list empty-cart">No items to display</div>;
    return <div className="products-list">{myList}</div>;
  };

  const handleChecked = () => {
    props.addToCart(checked);
    const items = Array.prototype.slice.call(
      document.getElementsByName("itemCheckbox")
    );
    items.map((el) => {
      el.checked = false;
      return el;
    });
    setChecked([]);
  };

  return (
    <div className="products-container">
      <SearchBar
        handleChange={props.handleChange}
        handleSearchClick={props.handleSearchClick}
      />
      {renderList()}
      <button className="cart-button" onClick={handleChecked}>
        Add to cart &rarr;
      </button>
    </div>
  );
};

export default Products;
