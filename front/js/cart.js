// variable pour localStorage
let storage = JSON.parse(localStorage.getItem("cart"));
let items = [];
items = storage;

// switchCase for id.img
let img;

if (!storage) {

    console.log("panier vide");
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
                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${element.quantity}">
                </div>
                <div class="cart__item__content__settings__delete">
                <p class="deleteItem">Supprimer</p>
                </div>
                </div>
                </div>
                </article>  
            `;
            cart__items.innerHTML += card;

// deletion of localstorage Class
            let deleteStorage = document.querySelectorAll('.deleteItem');
            
            deleteStorage.forEach((e) => {
            
                e.onclick = () => {
                    for (let i = 0; i < items.length; i++) {
            
                        if (items[i].id === element.id && items[i].color === element.color) {
                            localStorage.removeItem('cart',[i]);
                            console.log("yes");
                        // window.location.reload();
                        }
                        else {
                            console.log("ne fonctionne pas");
                        };
                    };
                };
            
            });
        };
        kanapCard();
    };
};

let aValue = JSON.parse(localStorage.getItem("cart"));
let test = [];
test = aValue;

console.log(test[0])


  // modification qty of product




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