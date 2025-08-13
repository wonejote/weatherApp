//info.js
export function actUI(temp,lugar,estado){

const lugarUI = document.querySelector(".ciudad");
const tempUI = document.querySelector(".temp");
const estadoUI = document.querySelector(".estado")

lugarUI.innerText = lugar.toUpperCase();
tempUI.innerText = "Temp: "+ temp+"°C";
estadoUI.innerText = estado;

console.log(lugar,temp,estado);
}