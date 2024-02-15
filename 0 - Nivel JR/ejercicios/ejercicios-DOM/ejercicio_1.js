
// Función que devuelve un array en código html
function crearLlave(nombre, modelo, precio){
    imagen = `<img width=250px src = './img/llave.png'></img>`;
    nombre = `<h2>llave ${nombre}</h2>`;
    modelo = `<h3>modelo ${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [imagen, nombre, modelo, precio]
}



// Seleccionando al contenedor (div vacío) para su posterior uso
const contenedor = document.querySelector(".flex-container")

// Creación de Fragmento para almacenar todo el código html y luego aplicarlo al contenedor
let fragmento = document.createDocumentFragment();


for(let i = 0; i<20; i++){

    // Número random para el modelo de la llave
    let modelo_random = Math.round(Math.random()*10000);

    // Número random para el precio de la llave
    let precio_random = Math.round(Math.random()*10+30);

    // Llamando a la función en una variable. (Paso de parámetros)
    let llave = crearLlave((i+1), modelo_random, precio_random);
    
    // Creando div para cada llave
    const div = document.createElement("DIV");
    // Añadiendo clases al div para aplicar estilos
    div.classList.add(`item-${i}`, `flex-item`);
    // Asignando el contenido HTML al interior del div
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];

    // Agrego cada div al fragmento (uno en cada vuelta)
    fragmento.appendChild(div);


    div.tabIndex = i;
    div.addEventListener("click", () => {
        document.querySelector(".key-data").value = modelo_random});

    
    
}

// Añado el fragmento, el cual contiene todos los divs, al contenedor
contenedor.appendChild(fragmento)
