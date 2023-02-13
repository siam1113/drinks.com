let addDrinkButtons = document.getElementsByClassName("add");
let addedDrinks = {};

function addDrink(e) {
  let cartItemCount = document.getElementById("cart");
  let productName = e.target.previousElementSibling.innerText;
  addedDrinks[productName] =
    addedDrinks[productName] == undefined ? 1 : addedDrinks[productName] + 1;
  cartItemCount.innerText = Number(cartItemCount.innerText) + 1;
}
for (let addDrinkButton of addDrinkButtons) {
  addDrinkButton.addEventListener("click", addDrink);
}
