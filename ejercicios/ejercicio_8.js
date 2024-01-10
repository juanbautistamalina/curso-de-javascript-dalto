//REHACERLO AL FINALIZAR EL CURSO


// Lista materias con todas las mateiras, los alumnos y el profesor de cada materia
let materias = {
    // El elemento 0 es el profesor, los demás son alumnos
    fisica: ["T. Rodriguez","juan", "gastón", "kevin", "cofla"],
    programacion: ["D. Malan", "juan", "gastón", "kevin", "milton"],
    logica: ["G. Quiñones", "kevin", "milton", "cofla"],
    quimica: ["S. Spellman", "juan", "kevin", "milton", "cofla"]
}


function obtener_informacion(materia){
    if(materias[materia]!== undefined){

        //      materias[materia]: listado de alumnos
        //      materia: nombre de la materia (lo que se pasa por parámetros) 
        //      materias: el objeto completo
        return [materias[materia], materia, materias];
    }
    else{
        return materias
    }
}


function mostrar_informacion(materia){
    let informacion = obtener_informacion(materia);

    if(informacion !== false){
        let profesor = informacion[0][0]; // Elemento 0 del array de la materia
        let alumnos = informacion[0]; // Arreglo de la materia
        alumnos.shift(); // Elimino el primer elemento (el profesor)
        console.log(`El profesor de ${informacion[1]} es: ${profesor}`)
        console.log(`Los alumnos son: ${alumnos}`);
    }
}


function cant_clases(alumno){
    let informacion = obtener_informacion(materia);
    let clases_presentes = [];
    let cantidad_total = 0;

    // Recorriendo el objeto o array asociativo
    for(info in informacion){
        if(informacion[info].includes(alumno)){
            cantidad_total++;
        }
    }
    return cantidad_total;
            
}

mostrar_informacion("fisica");
mostrar_informacion("quimica");
mostrar_informacion("programacion");
mostrar_informacion("logica");
