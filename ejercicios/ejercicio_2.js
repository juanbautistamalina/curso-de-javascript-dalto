let free = false;

function validar_cliente(time){
    let edad = prompt("¿Cual es tu edad?: ");

    if(edad >= 18){
        // alert("Sos mayor de edad, podés pasar.");

        if(time >= 2 && time < 7 && !free){
            alert("Podés pasar gratis, porque sos la primer persona después de las 2am")
            free = true
        }
        else{
            alert(`Son las ${time}:00Hs y podés pasar, pero tenes que pagar la entrada`);
        }
    }
    else{
        alert("Sos menor de edad. No podés pasar");
    }
}


validar_cliente(2);
validar_cliente(3);
validar_cliente(4);