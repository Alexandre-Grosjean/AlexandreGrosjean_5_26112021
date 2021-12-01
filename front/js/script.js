// lien server 3000
const host = "http://localhost:3000/api/products";


// fetch pour tableau .json
let canapeFetch = () => {
    fetch(host)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

    let productSection = document.getElementById('items');


// boucle pour chaque carte
    for (i = 0; i < data.length; i++) {
        const card = `
        <a href="./product.html?${data[i]._id}"> 
            <article>
                <img src="${data[i].imageUrl}" alt="${data[i].altTxt}" />
                <h3 class="productName">${data[i].name}</h3>
                <p class="productDescription">${data[i].description}</p>
            </article>
        </a>
        `;
        productSection.innerHTML += card;
      }
    });  
};

canapeFetch();