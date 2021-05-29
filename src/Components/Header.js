import React from "react";
import "./Header.css";

function Header() {
  const selectColor = (e) => {
    const el = Array.prototype.slice.call(
      document.getElementsByTagName("button")
    );
    el.forEach((btn) => {
      btn.style.backgroundColor = e.target.value;
    });
  };

  return (
    <div className="header" onChange={selectColor}>
      <input type="radio" name="color" value="blue" defaultChecked />
      blue
      <input type="radio" name="color" value="red" />
      red
    </div>
  );
}

export default Header;
