let addDrinkButtons = document.getElementsByClassName("add");
let cart = document.getElementById("cart");
let clearCart = document.getElementById("clear");
let cartItemCount = document.getElementById("cart-count");
let addedDrinks = JSON.parse(localStorage.getItem("cart"));
addedDrinks = addedDrinks == null ? {} : addedDrinks;

// Adding count in UI
for (const drink in addedDrinks) {
  cartItemCount.innerText =
    Number(cartItemCount.innerText) + addedDrinks[drink]["count"];
}

function addDrink(e) {
  let productName = e.target.previousElementSibling.firstChild.innerText;
  let productPrice = Number(
    e.target.previousElementSibling.lastChild.innerText.replace("$", "")
  );
  addedDrinks[productName] =
    addedDrinks[productName] == undefined
      ? { count: 1, price: productPrice }
      : {
          count: ++addedDrinks[productName]["count"],
          price: addedDrinks[productName]["count"] * productPrice,
        };
  // Adding count in UI
  cartItemCount.innerText = Number(cartItemCount.innerText) + 1;
  localStorage.setItem("cart", JSON.stringify(addedDrinks));
}

for (let addDrinkButton of addDrinkButtons) {
  addDrinkButton.addEventListener("click", addDrink);
}

clearCart.addEventListener("click", () => {
  cartItemCount.innerText = 0;
  addedDrinks = {};
  localStorage.setItem("cart", JSON.stringify(addedDrinks));
});

// TO-UNDERSTAND
cart.addEventListener("click", () => {
  fetch("http://localhost:3000/cart/", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(addedDrinks), // body data type must match "Content-Type" header
  });
});
