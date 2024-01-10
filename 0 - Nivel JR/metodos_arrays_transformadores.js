let nombres = ["Milton", "Juan", "Gastón", "Beto"];
let numeros = [1, 2, 3, 4, 5];
let array = ["b", "m", "z", "a", "c"]

console.log("Array Original: "+ nombres);
let resultado = nombres.pop(); // Elimina el último elemento, y lo muestra
console.log("Último Elemento Removido: "+resultado);


console.log("Resultado: " +nombres);

resultado = nombres.push("Kevin"); // Agregar uno o más elementos al final del array
console.log(nombres)


console.log("Array Original: "+ numeros);
resultado = numeros.reverse(); // Invierte el orden de los elementos de un array
console.log("Resultado: " + resultado);


resultado = nombres.shift(); // Elimina el primer elemento, y lo muestra
console.log("Primer Elemento Removido: "+resultado);

resultado = nombres.unshift("Mateo", "Beto") // Agregar elementos al principio del array
console.log(nombres)

resultado = array.sort() // Ordena el array (de menor a mayor, o alfabéticamente)
console.log(resultado)

console.log(nombres)
resultado = nombres.splice(0, 3, "JuanB") // Elimina o reemplaza elementos de un array (start, cant_elementos, objeto_añadir)
console.log(nombres)