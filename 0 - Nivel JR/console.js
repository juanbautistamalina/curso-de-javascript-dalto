// LA MAYORÍA DE LOS MÉTODOS DE CONSOLA SE VISUALIZAN EN EL NAVEGADOR Y NO EN UN IDE.

//                      -- FUNCIONES DE REGISTRO --
// console.assert(5 < 3); // Aparece un mensaje de error en la consola si la afirmación es falsa
console.clear(); // Limpia la consola (funciona en el navegador)
console.error("Error Detectado..."); // Muestra un mensaje de error en la consola
console.info("Mensaje Informativo"); // Muestra un mensaje informativo en la consola
console.log("Mensaje"); // Muestra un mensaje en la consola
console.table([5,4,3,2,1]); // Toma como argumento obligatorio un array o un objeto y nos muestra una tabla en consola
console.warn("Adventencia...") // Muestra un mensaje de advertencia en la consola
console.dir() // Despliega una lista interactiva de las propiedades del objeto JavaScript especificado.


//                      -- FUNCIONES DE CONTEO --
console.count(); // Registra el número de veces que se llama a count 
console.countReset() // Resetea el conteo a 1


//                    -- FUNCIONES DE AGRUPACIÓN --
console.group(); // Crea un grupo en línea en el registro de la consola
console.groupEnd(); // Remueve un grupo en línea en el registro de la consola
console.groupCollapsed(); // Crea un grupo en línea pero contraído en el registro de la consola


//                    -- FUNCIONES DE TEMPORIZACIÓN --
// console.time() // Inicia un temporizador
// console.timeLog() // Registra el valor actual del temporizador 
// console.timeEnd() // Finaliza el temporizador


//                    -- MODIFICAR ESTILO DEL TEXTO --
console.log("%chola", "color:red;background:black")