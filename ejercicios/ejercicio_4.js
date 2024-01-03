function suma(a,b){
    return parseInt(a)+parseInt(b);
}


function resta(a,b){
    return parseInt(a)-parseInt(b);
}


function multiplicacion(a,b){
    return parseInt(a)*parseInt(b);
}


function division(a,b){
    return parseInt(a)/parseInt(b);
}





alert("¿Qué operación deseas realizar? ");
let operacion = prompt(`1. Suma
2. Resta
3. Multiplicación
4. División`);


if(operacion == 1){
    let num1 = prompt("Ingresá el primer valor para sumar: ");
    let num2 = prompt("Ingresá el segundo valor para sumar: ");
    resultado = suma(num1, num2);
    alert("Tu resultado de la suma es: " + resultado);
}
else if(operacion == 2){
    let num1 = prompt("Ingresá el primer valor para restar: ");
    let num2 = prompt("Ingresá el segundo valor para restar: ");
    resultado = resta(num1, num2);
    alert("Tu resultado de la resta es: " + resultado);
}
else if(operacion == 3){
    let num1 = prompt("Ingresá el primer valor para multiplicar: ");
    let num2 = prompt("Ingresá el segundo valor para multiplicar: ");
    resultado = multiplicacion(num1, num2);
    alert("Tu resultado de la multiplicación es: " + resultado);
}
else if(operacion == 4){
    let num1 = prompt("Ingresá el primer valor para dividir: ");
    let num2 = prompt("Ingresá el segundo valor para dividir: ");
    resultado = division(num1, num2);
    alert("Tu resultado de la división es: " + resultado);
}
else{
    alert("Ingresastre una operación no valiida.");
}