// lien server 3000
const host = "http://localhost:3000/api/products/";

// constante pour recuperation id dans url
const params = (new URL(document.location)).searchParams;
const id = params.get("id");

// creation constante pour function
const hostProduct = host + id;

console.log(hostProduct)

// fetch pour tableau .json
let canapeFetch = () => {
    fetch(hostProduct)
        .then((response) => response.json())
        .then((data) => {

// img via params & hostProduct
            let img = document.querySelector(".item__img");
            img.innerHTML = `<img src="${data.imageUrl}" alt="${data.altTxt}">`;

// titre via params & hostProduct
            let title = document.querySelector("#title");
            title.innerHTML = `${data.name}`;

// prix via params & hostProduct
            let price = document.querySelector("#price");
            price.innerHTML = `${data.price}`;

// description via params & hostProduct
            let description = document.querySelector("#description");
            description.innerHTML = `${data.description}`;

// couleur via params & hostProduct
            let couleur = document.querySelector("#colors");
            for (i = 0; i < data.colors.length; i++) {
                couleur.innerHTML += `<option value="${data.colors[i]}">${data.colors[i]}</option>`;
              }

        }
)};

canapeFetch();

// local storage


let card = [];

addToCart.onclick = () => {



    //variable for qty & colors
    let qty = document.querySelector('#quantity');
    let color = document.querySelector('#colors');
    
    
    //object for cart
    const cart = {
        id: id,
        title: title.innerText,
        quantity: qty.value,
        color: color.value,
        prix: price.innerText
    }

    //variable & function for array
    card.push(cart);

   if (color == localStorage.getItem("cart", JSON.stringify(card.color))) {

        console.log('même couleur');
        
    } else {

        for (let i = 0; i < card.length; i++) {
            console.log(card[i]);
            localStorage.setItem("cart", JSON.stringify(card));
        }

        console.log('differente couleur');
          
    }

};


// lien vers panier 

const panier = document.querySelector('#addToCart');
panier.addEventListener('click', cartLink);

function cartLink (panier) {
    window.location.href = "./cart.html";
};