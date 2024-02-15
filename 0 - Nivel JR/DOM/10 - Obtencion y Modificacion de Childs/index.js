let contenedor = document.querySelector(".contenedor");

let parrafo = document.createElement("P")
parrafo.innerHTML = "Parrafo";

let h2_nuevo = document.createElement("H2")
h2_nuevo.innerHTML = "Título";
let h2_antiguo = document.querySelector(".h2");

// Reemplazando un h2 por otro
contenedor.replaceChild(h2_nuevo, h2_antiguo);

// Eliminando h2
contenedor.removeChild(h2_nuevo);

// Comprobar si tiene hijos o no
let respuesta = contenedor.hasChildNodes();

if( respuesta == true){
    document.write("El elemento tiene hijos");
}else{
    document.write("El elemento NO tiene hijos");
}


