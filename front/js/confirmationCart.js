const getId = () => {
    const commandeId = document.querySelector("#orderId");
    commandeId.innerHTML = localStorage.getItem("orderId");
    console.log(localStorage.getItem("orderId"))
    localStorage.clear();
}

getId();