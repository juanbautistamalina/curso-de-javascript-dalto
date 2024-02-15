let contenedor = document.querySelector(".contenedor");
let fragmento = document.createDocumentFragment();

for (let i = 0; i < 10; i++) {
  
    if(i == 0){
        const titulo = document.createElement("H1");
        titulo.innerHTML = "Título Introductorio";
        contenedor.appendChild(titulo)
    }

  // Paso 1: Crear el elemento tipo li
  const item = document.createElement("LI");

  // Paso 2: Crear el contenido para el elemento
  item.innerHTML = `Elemento de la lista N°${i+1}`; // Forma 1
//const contenido_item = document.createTextNode("Este es el contenido de la lista"); // Forma 2

  fragmento.appendChild(item);
}

contenedor.appendChild(fragmento)