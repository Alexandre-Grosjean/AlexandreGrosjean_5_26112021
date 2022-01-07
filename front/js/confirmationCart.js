// const getId = () => {
//     const commandeId = document.querySelector("#orderId");
//     commandeId.innerHTML = localStorage.getItem("orderId");
//     console.log(localStorage.getItem("orderId"))
//     localStorage.clear();
// }

// getId();

// ************************************ code test ***********************************/

const getId = () => {

const params = (new URL(document.location)).searchParams;
const id = params.get("id");
const commandeId = document.querySelector("#orderId");
    commandeId.innerHTML = id;

}

getId();

//************************************* fin code test *******************************/