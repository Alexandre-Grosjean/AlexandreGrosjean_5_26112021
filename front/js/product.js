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
            console.log(data);

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

let quantityWanted = () => {
    let quantity = document.querySelector("#quantity");
    return quantityWanted.value;
}

localStorage.setItem('panier', hostProduct);
localStorage.setItem('quantity', quantityWanted);


console.log(quantity)
