// Solicitar la cantidad de alumnos
let cantidad = prompt("¿Cuántos alumnos son?");
let alumnos_totales = [];

// Pidiendo el nombre de cada alumno
for(i = 0; i<cantidad; i++){
    alumnos_totales[i] = [prompt("Nombre del alumno " + (i+1)), 0];
}

// Nombrar al alumno y decir si está presente o no
function tomar_asistencia(nombre, p){
    let presencia = prompt(nombre);

    if(presencia == 'p' || presencia == 'P'){
        alumnos_totales[p][1]++;
    }
}

// Llamar a la función de tomar asistencia 30 veces (1 mes)
for(i = 0; i<30; i++){
    for(alumno in alumnos_totales){
        tomar_asistencia(alumnos_totales[alumno][0], alumno); 
    }
}

// 
for(alumno in alumnos_totales){
    let resultado = `${alumnos_totales[alumno][0]}:<br>
________Presencias: ${alumnos_totales[alumno][1]}<br>
________Ausencias: ${30 - alumnos_totales[alumno][1]}`;

    if(30 - alumnos_totales[alumno][1] > 18){
        resultado+="<b style='color:red'> REPROBADO POR INASISTENCIA </b><br><br>";
    }
    else{
        resultado+="<br><br>";
    } 
    document.write(resultado);
}