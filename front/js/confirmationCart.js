const getId = () => {

const params = (new URL(document.location)).searchParams;
const id = params.get("id");
const commandeId = document.querySelector("#orderId");
    commandeId.innerHTML = id;
}

getId();