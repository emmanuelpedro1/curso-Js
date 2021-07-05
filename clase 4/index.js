



var numero1 =parseInt( prompt("ingrese un numero"));
var numero2=parseInt (prompt("ingrese otro numero"));
var total = prompt("ingrese si es: + ; - ; * o /")

function calculadora (numero1 , numero2, total){
   
    switch (total){
        case "+":
            return numero1 + numero2;
        case "-":
            return numero1 - numero2;
        case "*":
            return numero1 * numero2;
        case "/":
            return numero1 / numero2;
        default :
            return 0;


    }

}
alert(calculadora(numero1,numero2,total));
console.log( calculadora (numero1,numero2,total));