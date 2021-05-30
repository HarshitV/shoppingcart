import "./App.css";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import server from "./server";
import React, { useState, useEffect } from "react";
import lowerCase from "./utils/lowerCase";

let json = [];

function App() {
  const [productsList, setProductsList] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [cart, setCart] = useState([]);

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSearchClick = () => {
    if (inputVal === "") setProductsList(json);
    else {
      const filteredList = {};
      for(let key in json) {
        if(lowerCase(json[key]).indexOf(lowerCase(inputVal)) !== -1)
          filteredList[key] = json[key];
      }
      setProductsList(filteredList);
    }
  };

  const addToCart = (id) => {
    setCart([...id]);
  };

  const fetchApiData = async () => {
    const res = await fetch("/api/products");
    json = await res.json();
    setProductsList(json);
  };

  useEffect(() => {
    server();
    fetchApiData();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Products
          handleChange={handleChange}
          handleSearchClick={handleSearchClick}
          productsList={productsList}
          addToCart={addToCart}
        />
        <Cart productsList={json} cart={cart} />
      </div>
    </div>
  );
}

export default App;
