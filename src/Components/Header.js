import React, { useEffect } from "react";
import updateButtonColors from "../utils/updateButtonColors";
import "./Header.css";

function Header() {

  useEffect(() => {
    const initialColor = localStorage.getItem("theme");
    if (initialColor) {
      document.getElementById(initialColor).checked = true;
      updateButtonColors(initialColor);
    } else document.getElementById("blue").checked = true;
  }, []);

  const selectColor = (e) => {
    updateButtonColors(e.target.value);
    localStorage.setItem("theme", e.target.value);
  };

  return (
    <div className="header" onChange={selectColor}>
      <div style={{ marginLeft: "auto", marginRight: "2rem" }}>
        <input type="radio" id="blue" name="color" value="blue" />
        blue
        <input type="radio" id="red" name="color" value="red" />
        red
      </div>
    </div>
  );
}

export default Header;
