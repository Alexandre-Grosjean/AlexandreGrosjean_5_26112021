// lien server API
const host = "http://localhost:3000/api/products/";

// query selector variables
let totalQuantity = document.querySelector('#totalQuantity')
let totalPrice = document.querySelector('#totalPrice');

// variable pour localStorage

let storage = JSON.parse(localStorage.getItem("cart"));
let items = [];
items = storage;

//function & condition for id.photo
let img;

for (const identification of items) {
    console.log(identification.id);

    switch (identification.id) {
        case '107fb5b75607497b96722bda5b504926' :
            img = "../../back/images/kanap01.jpeg";
            break;

        case '415b7cacb65d43b2b5c1ff70f3393ad1' :
            img = "../../back/images/kanap02.jpeg";
            break;

        case '055743915a544fde83cfdfc904935ee7' :
            img = "../../back/images/kanap03.jpeg";
            break;

        case 'a557292fe5814ea2b15c6ef4bd73ed83' :
            img = "../../back/images/kanap04.jpeg";
            break;

        case '8906dfda133f4c20a9d0e34f18adcf06' :
            img = "../../back/images/kanap05.jpeg";
            break;

        case '77711f0e466b4ddf953f677d30b0efc9' :
            img = "../../back/images/kanap06.jpeg";
            break;

        case '034707184e8e4eefb46400b5a3774b5f' :
            img = "../../back/images/kanap07.jpeg";
            break;

        case 'a6ec5b49bd164d7fbe10f37b6363f9fb' :
            img = "../../back/images/kanap08.jpeg";
                break;

        default:
            console.log("cart empty")
    }
};

//function for cart


for (const element of items) {
    console.log(element);

    const kanapCard = () => {
    
        const card = `
        <article class="cart__item" data-id="${element.id}" data-color="${element.color}">
                        <div class="cart__item__img">
                          <img src="${img}" alt="Photographie d'un canapé">
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
      
    }; 
    
    kanapCard();
};
