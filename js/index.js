const selectElement = document.querySelector("select.all");
const calcWidth = () => {
  const text = selectElement.options[selectElement.selectedIndex].text;
  console.log(text);
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
  const cartText = document.querySelector(".cart h3");
  cartText.innerText = parseInt(cartText.innerText) + 1;
};
const cartBtns = document.querySelectorAll(".btn");
cartBtns.forEach((btn) => {
  btn.addEventListener("click", addToCart);
});
