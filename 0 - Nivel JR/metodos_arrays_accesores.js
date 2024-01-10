let nombres = ["Juan", "Beto", "Gastón", "Milton"];

let resultado = nombres.join(" - "); // Une todos los elementos en una cadena de texto, y se puede colocar un separador
console.log(resultado)

resultado = nombres.slice(0, 2) // Extraer de x a y posiciones, el último no incluido
console.log(resultado)

resultado = nombres.filter(nombres => nombres.length > 4) // Crea un array con todos los elementos que cumplan una condición
console.log(resultado);

resultado = nombres.forEach(nombres => console.log("Nombre: "+ nombres)) // Ejecuta una función indicada una vez por cada elemento del array
