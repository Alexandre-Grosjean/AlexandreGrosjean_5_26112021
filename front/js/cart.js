let totalQuantity = document.querySelector('#totalQuantity')
let totalPrice = document.querySelector('#totalPrice');

const article = JSON.parse(localStorage.getItem("cart"));

if (article != null) {

    for (let i = 0; i < article.length; i++ ) {
    totalPrice.innerText = (article[i].prix * article[i].quantity);
    totalQuantity.innerText = article[i].quantity;
    }
    console.log(article.prix)
} else {
    totalQuantity.innerText = "0";
    totalPrice.innerText = "0";
};

