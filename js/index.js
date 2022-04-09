const selectElement = document.querySelector("select.all");
const calcWidth = () => {
  const text = selectElement.options[selectElement.selectedIndex].text;
  const font = "14px Arial";
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  if (text.length > 6)
    selectElement.style.width = `${context.measureText(text).width * 1.3}px`;
  else selectElement.style.width = `${context.measureText(text).width * 1.6}px`;
};
selectElement.addEventListener("change", calcWidth);
const addToCart = () => {
  const cartTexts = document.querySelectorAll(".cart h3");
  cartTexts.forEach((text) => {
    text.innerText = parseInt(text.innerText) + 1;
  });
};
const cartBtns = document.querySelectorAll(".btn");
cartBtns.forEach((btn) => {
  btn.addEventListener("click", addToCart);
});
