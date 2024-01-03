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


console.log(resultado);
