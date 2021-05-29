const updateButtonColors = (color) => {
  const el = Array.prototype.slice.call(
    document.getElementsByTagName("button")
  );
  el.forEach((btn) => {
    btn.style.backgroundColor = color;
  });
};

export default updateButtonColors;
