 const mapa = new Map([
        [/clear/i, "src/veletaSol.png"],       
        [/cloud/i, "src/veletaNublado.png"],   
        [/rain/i, "src/veletaLluvia.png"],     
        [/snow/i, "src/veletaNieve.png"],     
        [/storm/i, "src/veletaTormenta.png"],  
        [/fog|mist/i, "src/veletaNeblina"]  
    ]);

    let nuevoFondo = null;
export function cambioFondo(estado) {
    
    for (let [patron, imagen] of mapa) {
        if (patron.test(estado)) {
            nuevoFondo = imagen;
            break;
        }
    }

    
    if (!nuevoFondo) {
        nuevoFondo = "src/veleta.jpg";
    }

    
    const img = document.querySelector(".fondo");
    img.src = nuevoFondo;
}
