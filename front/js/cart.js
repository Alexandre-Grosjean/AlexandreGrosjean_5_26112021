// variable pour localStorage
let storage = JSON.parse(localStorage.getItem("cart"));
let items = [];
items = storage;

// function to save in local

const saveStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// function to get in local

const getStorage = () => {
    let cart = localStorage.getItem("cart");
    if (cart == null) {
        return [];
    } else {
        return JSON.parse(cart);
    }
}

// function to add in local

const addStorage = (product) => {
    let foundProduct = cart.find(p => p.id == product.id);
    if (foundProduct != undefined) {
        foundProduct.quantity++
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    saveStorage(cart);
}


// function to remove in local

const removeStorage = (product) => {
    let cart = getStorage();
    cart = cart.filter(p => p.id != product.id);
    saveStorage(cart);
}

// function to change quantity in local

// const changeQuantity = (product, quantity) => {
//     let cart = getStorage();
//     let foundProduct = cart.find(p => p.id + p.color == elements.id + elements.color);
//     if (foundProduct != undefined) {
//         foundProduct.quantity += quantity
//         if (foundProduct.quantity <= 0) {
//             removeStorage(foundProduct);
//         } else {
//             saveStorage(cart);
//         }
//     }
// }

// switchCase for id.img
let img;

if (!storage) {

    // console.log("panier vide");
    cart__items.innerHTML = `<p>Le panier est vide</p>`;

} else {

    for (const identification of items) {

        switch (identification.id) {
            case '107fb5b75607497b96722bda5b504926':
                identification.img = "../../back/images/kanap01.jpeg";
                break;

            case '415b7cacb65d43b2b5c1ff70f3393ad1':
                identification.img = "../../back/images/kanap02.jpeg";
                break;

            case '055743915a544fde83cfdfc904935ee7':
                identification.img = "../../back/images/kanap03.jpeg";
                break;

            case 'a557292fe5814ea2b15c6ef4bd73ed83':
                identification.img = "../../back/images/kanap04.jpeg";
                break;

            case '8906dfda133f4c20a9d0e34f18adcf06':
                identification.img = "../../back/images/kanap05.jpeg";
                break;

            case '77711f0e466b4ddf953f677d30b0efc9':
                identification.img = "../../back/images/kanap06.jpeg";
                break;

            case '034707184e8e4eefb46400b5a3774b5f':
                identification.img = "../../back/images/kanap07.jpeg";
                break;

            case 'a6ec5b49bd164d7fbe10f37b6363f9fb':
                identification.img = "../../back/images/kanap08.jpeg";
                break;

            default:
                console.log("cart empty")
                break;
        }
    }

};

// function for cart

if (storage != null) {

    for (const element of items) {

        // function for card cart        

        const kanapCard = () => {

            const card =
                `
                <article class="cart__item" data-id="${element.id}" data-color="${element.color}">
                <div class="cart__item__img">
                <img src="${element.img}" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                <div class="cart__item__content__description">
                <h2>${element.title}</h2>
                <p>${element.color}</p>
                <p>${element.prix * element.quantity} €</p>
                </div>
                <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                <p>Qté : </p>
                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${element.quantity}" data-id="${element.id}" data-color="${element.color}">
                </div>
                <div class="cart__item__content__settings__delete">
                <p class="deleteItem" data-id="${element.id}" data-color="${element.color}">Supprimer</p>
                </div>
                </div>
                </div>
                </article>  
            `;
            cart__items.innerHTML += card;
        };
        kanapCard();


    };
}

// deletion of localstorage Class

const deleteStorage = document.querySelectorAll('.deleteItem');

const cardID = () => {

    for (const elements of items) {
        // console.log(elements.id)
        deleteStorage.forEach(element => {
                if (element.dataset.id + element.dataset.color == elements.id + elements.color) {
                    let cart = getStorage();
                    element.onclick = () => {
                        cart = cart.filter(p => p.id + p.color != element.dataset.id + element.dataset.color);
                        console.log(element.dataset.id + " / " + element.dataset.color);
                        saveStorage(cart);
                        window.location.reload();
                    }
                } 
        })
    }
}

cardID()

// modification qty of product
const qtyValue = document.querySelectorAll("input.itemQuantity");
// console.log(qtyValue.value)

const cardQty = () => {

    for (const elements of items) {
        qtyValue.forEach(element => {
            // console.log(element.value + element.dataset.id == elements.quantity + elements.id);
            if (element.value + element.dataset.id + element.dataset.color == elements.quantity + elements.id + elements.color) {
                // let cart = getStorage();
                element.onclick = () => {
                        console.log(element.value + " / " + element.dataset.id  + " / " + element.dataset.color);
                        let cart = getStorage();
                        
                        const changeQuantity = (product, quantity) => {
                            let foundProduct = cart.find(p => p.id + p.color == elements.id + elements.color);
                            if (foundProduct != undefined) {
                                foundProduct.quantity = element.value
                                // console.log(foundProduct.quantity = element.value)
                                if (foundProduct.quantity <= 0) {
                                    removeStorage(foundProduct);
                                } else {
                                    saveStorage(cart);
                                }
                            }
                        }
                        changeQuantity()
                    }
                } 
        })
    }
}


cardQty()


// queryselector for sum
let totalQuantity = document.querySelector('#totalQuantity');
let totalPrice = document.querySelector('#totalPrice');

// function display total price & quantity

const sumTotal = () => {

    let sumPrice = 0;
    let sumQty = 0;

        if (!storage) {

            totalPrice.innerText = sumPrice;
            totalQuantity.innerText = sumQty;
        } else {
            for (let i = 0; i < items.length; i++) {
                sumPrice = sumPrice + (items[i].prix * items[i].quantity);
                sumQty = sumQty + items[i].quantity;
            };

            totalPrice.innerText = sumPrice;
            totalQuantity.innerText = sumQty;
        };
    
};

sumTotal();

// //localStorage for formulaire

// let identifiant;
// let order = document.querySelector("#order");

// order.onlick = () => {
// const IdStorage = () => {
//     if (identifiant == null) {
//         identifiant = [];
//         identifiant = localStorage.setItem("identifiant", JSON.stringify(identifiant));
//         storage.push(identifiant);
//     } else {
//         identifiant = localStorage.setItem("identifiant", JSON.stringify(identifiant));
//         storage.push(identifiant);
//     }
// };
// IdStorage()
// };

// //regex & formulaire

// const prenom = document.getElementById("firstName");
// const nom = document.getElementById("lastName");
// const ville = document.getElementById("city");
// const adresse = document.getElementById("address");
// const mail = document.getElementById("email");

// const regexName = /^[a-z][a-z '-.,]{1,31}$|^$/i;
// const regexMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// // prenom

// // nom

// // ville

// // mail