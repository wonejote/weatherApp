//weaterapi.js
import { actUI } from "./src/info.js";
export async function getWeather(location){
    try{
    
    let API =  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+location+"/?key=D6MV9HFPF55RWYYTXY2QJ3E9N"


    let response = await fetch(API);
    let datos = await response.json();
    console.log(datos);
    let datoTempFarenheit= datos.currentConditions.temp;
    let datoTempCelsius = ((datoTempFarenheit -32)*(5/9)).toFixed(2);
    let datoLugar = datos.resolvedAddress;
    let datoEstado = datos.currentConditions.conditions;
    console.log(datoTempCelsius);
    actUI(datoTempCelsius,datoLugar,datoEstado);
    }
    catch(error){
        console.log(error);
    }

}

