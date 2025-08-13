//script.js
import { getWeather } from "./weaterapi.js";
const  input = document.querySelector("input");
const goInput = document.querySelector("button");


await getWeather("Medellin");

input.addEventListener("change",async function(){
getWeather(input.value);
});

goInput.addEventListener("click",function(){
    getWeather(input.value);
})
