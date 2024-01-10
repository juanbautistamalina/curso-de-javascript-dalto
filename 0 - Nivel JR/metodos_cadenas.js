let cadena = "Mi nombre es Juan";
let cadena2 = "";
let cadena3 = "abc";
let cadena4 = "123 "

let resultado = cadena.concat(" Bautista"); // Juntar 2 o más cadenas
resultado = cadena.startsWith("M"); // Comprobar si una cadena comienza con ...
resultado = cadena.endsWith("n"); // Comprobar si una cadena termina con ...

// Comprobar si una cadena se encuentra dentro de otra cadena. Devuelve true o false
resultado = cadena.includes("Juan"); 

// Comprueba si una cadena se encuentra dentro de otra, pero devuelve la posición en caso de encontrarla o -1 si no está
resultado = cadena.indexOf("Juan"); 

// Rellena la cadena con la/las letras indicadas, hasta la cantidad indicada. Comienza desde el principio
resultado = cadena3.padStart(6,"1");

// Rellena la cadena con la/las letras indicadas, hasta la cantidad indicada. Comienza desde el final
resultado = cadena3.padEnd(6,"1");

resultado = cadena4.repeat(4) // Repite la cadena la cantidad de veces indicada

resultado = cadena.split(" "); // Separa una cadena con lo indicado, y retorna un array

resultado = cadena.toLowerCase() // Convertir cadena a minúsculas

resultado = cadena.toUpperCase() // Convertir cadena a mayúsculas

let num = 50;
resultado = num.toString(); // Convierte una cadena a string (aplicar a números)

let nombre = "   juan   "
resultado = nombre.trim(); // Eliminar los espacios de una cadena
// trimStart elimina los espacios del principio
// trimEnd elimina los espacios del final


console.log(resultado);
