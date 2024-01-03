animales = ["perro", "gato", "pinguino"];

// For in: Devuelve el índice/posición de los elementos
for(i in animales){
    document.write(animales[i] + "<br>");
}

document.write("<br>");

// For of: Devuelve el valor almacenado en cada posición
for(i of animales){
    document.write(i + "<br>");
}