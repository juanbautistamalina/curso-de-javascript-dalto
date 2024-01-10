class Calculadora{
    constructor(){

    }

    sumar(a,b){
        return parseInt(a)+parseInt(b);
    }


    restar(a,b){
        return parseInt(a)-parseInt(b);
    }


    multiplicar(a,b){
        return parseInt(a)*parseInt(b);
    }


    dividir(a,b){
        return parseInt(a)/parseInt(b);
    }

    potenciar(a, exp){
        return a**exp;
    }

    raiz_cuadrada(a){
        return Math.sqrt(a);
    }

    raiz_cubica(a){
        return Math.cbrt(a);
    }


}


const calculadora = new Calculadora();



alert("¿Qué operación deseas realizar? ");
let operacion = prompt(`1. Suma
2. Resta
3. Multiplicación
4. División
5. Potencia
6. Raíz Cuadrada
7. Raíz Cúbica`);


if(operacion == 1){
    let num1 = prompt("Ingresá el primer valor para sumar: ");
    let num2 = prompt("Ingresá el segundo valor para sumar: ");
    resultado = calculadora.sumar(num1, num2);
    alert("Tu resultado de la suma es: " + resultado);
}
else if(operacion == 2){
    let num1 = prompt("Ingresá el primer valor para restar: ");
    let num2 = prompt("Ingresá el segundo valor para restar: ");
    resultado = calculadora.restar(num1, num2);
    alert("Tu resultado de la resta es: " + resultado);
}
else if(operacion == 3){
    let num1 = prompt("Ingresá el primer valor para multiplicar: ");
    let num2 = prompt("Ingresá el segundo valor para multiplicar: ");
    resultado = calculadora.multiplicar(num1, num2);
    alert("Tu resultado de la multiplicación es: " + resultado);
}
else if(operacion == 4){
    let num1 = prompt("Ingresá el primer valor para dividir: ");
    let num2 = prompt("Ingresá el segundo valor para dividir: ");
    resultado = calculadora.dividir(num1, num2);
    alert("Tu resultado de la división es: " + resultado);
}
else if(operacion == 5){
    let num1 = prompt("Ingresá el valor para potenciar: ");
    let num2 = prompt("Ingresá la valor de la potencia: ");
    resultado = calculadora.potenciar(num1, num2);
    alert("Tu resultado de la potencia es: " + resultado);
}
else if(operacion == 6){
    let num1 = prompt("Conocer la raíz cuadrada de: ");
    resultado = calculadora.raiz_cuadrada(num1);
    alert("Tu resultado de la raíz cuadrada es: " + resultado);
}
else if(operacion == 7){
    let num1 = prompt("Conocer la raíz cúbica de: ");
    resultado = calculadora.raiz_cubica(num1);
    alert("Tu resultado de la potencia es: " + resultado);
}
else{
    alert("Ingresastre una operación no valiida.");
}