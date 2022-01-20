// lien server 3000
const host = "http://localhost:3000/api/products";


// fetch pour tableau .json
let canapeFetch = () => {
    fetch(host)
        .then((response) => response.json())
        .then((data) => {
    let productSection = document.getElementById('items');

// boucle pour chaque carte
    for (i = 0; i < data.length; i++) {

        let productLink = document.createElement("a");
        productSection.appendChild(productLink);
        productLink.href = `./product.html?id=${data[i]._id}`;

        let article = document.createElement("article");
        productLink.appendChild(article);

        let imgOfKanap = document.createElement("img");
        article.appendChild(imgOfKanap);
        imgOfKanap.src = data[i].imageUrl
        imgOfKanap.alt = data[i].altTxt

        let titleKanap = document.createElement("h3");
        article.appendChild(titleKanap);
        titleKanap.classList.add("productName");
        titleKanap.append(data[i].name);

        let infoKanap = document.createElement("p");
        article.appendChild(infoKanap);
        infoKanap.classList.add("productDescription");
        infoKanap.append(data[i].description)
      }
    });  
};

canapeFetch();