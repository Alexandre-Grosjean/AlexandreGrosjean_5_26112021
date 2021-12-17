let totalQuantity = document.querySelector('#totalQuantity')
let totalPrice = document.querySelector('#totalPrice');
let totalAddition;

const article = JSON.parse(localStorage.getItem("cart"));

if (article != null) {
    totalPrice.innerText = totalAddition = (article[0].prix * article[0].quantity);
    totalQuantity.innerText = article[0].quantity;
} else {
    totalQuantity.innerText = "0";
    totalPrice.innerText = "0";
};
