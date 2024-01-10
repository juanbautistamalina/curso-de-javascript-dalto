let materias = {
    fisica: ["T. Rodriguez","juan", "gastón", "kevin", "cofla"],
    programacion: ["D. Malan", "juan", "gastón", "kevin", "milton"],
    logica: ["G. Quiñones", "kevin", "milton", "cofla"],
    quimica: ["S. Spellman", "juan", "kevin", "milton", "cofla"]
}

function inscribir(alumno, materia){
    let personas = materias[materia];
    // personas.shift() // Elimino al profesor de la lista
    // let alumnos = personas; // Guardo la lista de alumnos, que ya no tiene al profesor
    
    
    if(personas.length >= 21){
        console.log(`Lo sentimos ${alumno}, las clases de ${materia} ya están llenas`)
    }else{

        if (materia == "fisica") {
			materias = {
		        fisica: personas,
		        programacion: materias['programacion'],
		        logica: materias['logica'],
		        quimica:materias['quimica']
	        }
		}
		else if (materia == "programacion") {
			materias = {
		        fisica: materias['fisica'],
		        programacion: personas,
		        logica: materias['logica'],
		        quimica:materias['quimica']
	        }
		}else if (materia == "logica") {
			materias = {
		        fisica: materias['fisica'],
		        programacion: materia['programacion'],
		        logica: personas,
		        quimica:materias['quimica']
	        }
		}else if (materia == "quimica") {
			materias = {
		        fisica: materias['fisica'],
		        programacion: materia['programacion'],
		        logica: materias['logica'],
		        quimica: personas
	        }
        
        }
        console.log(`¡Felicidades ${alumno}! te has inscrito en ${materia} correctamente.`)
        personas.push(alumno);
    }
}


inscribir("juancis", "programacion")
inscribir("mateo", "programacion")
inscribir("abraham", "programacion")
inscribir("tiago", "programacion")
inscribir("marco", "programacion")
inscribir("manu", "programacion")
inscribir("jose", "programacion")
inscribir("diego", "programacion")
inscribir("gustavo", "programacion")
inscribir("leo", "programacion")
inscribir("ciro", "programacion")
inscribir("julian", "programacion")
inscribir("pedro", "programacion")
inscribir("martin", "programacion")
inscribir("fernando", "programacion")
inscribir("carlos", "programacion")
inscribir("pepe", "programacion")
inscribir("pedro", "programacion")
inscribir("martin", "programacion")
inscribir("fernando", "programacion")
inscribir("carlos", "programacion")