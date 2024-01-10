// [asistencia, promedio, cant_trabajos_practicos, nombre_materia]
let materias = {
	fisica: [90,6,3,"fisica"],
	matematica: [84,8,2,"matematica"],
	logica: [92,8,4,"logica"],
	quimica: [96,8,4,"quimica"],
	calculo: [91,6,3,"calculo"],
	programacion: [79,7,4,"programacion"],
	biologia: [75,9,2,"biologia"],
	bbdd: [98,9,1,"bbdd"],
	algebra: [100,10,4,"algebra"]
}

function aprobo(){
    for(materia in materias){

        let asistencias = materias[materia][0]; // asigno las asistencias a una variable
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2]

        console.log(`${materias[materia][3]}:`) // Muestro el nombre de la materia


        if(asistencias >= 90){
            console.log("%c   Asistencias en orden", "color:green");
        }else{
            console.log("%c   Falta de Asistencias", "color:red");
        }

        if(promedio >= 7){
            console.log("%c   Promedio en orden", "color:green");
        }else{
            console.log("%c   Promedio Desaprobado", "color:red");
        }

        if(trabajos >= 3){
            console.log("%c   Trabajos Prácticos en orden", "color:green");
        }else{
            console.log("%c   Faltan Trabajos Prácticos por Entregar", "color:red");
        }        
    }
}

aprobo()
