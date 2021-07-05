var edad = prompt("ingrese su edad");
if (parseInt(edad) > 18){

    console.log("sos mayor de edad");

alert("Vamos a calcular el precio del alquiler")
function iva(precio){
const SELLADO = 0.015 + (30);
return(precio * SELLADO) + precio;
}
const precioCosto = parseInt(prompt("ingrese precio del alquiler"));
const precioCalculado = iva(precioCosto);
alert("el precio calculado es: " + precioCalculado)
}

else {
    console.log ("no sos mayor de edad");
    alert("no sos mayor de edad")
}

var carlulardora = prompt("desea usar una caluculadora? si o no?")

if(calculadora === "si"){
    
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
}
else{
    alert ("perfecto")
}

function casa(caracteristicas){
    this.puertas = caracteristicas.puertas;
    this.año = caracteristicas.año;
    this.lugar = caracteristicas.lugar;
}
const house = {
    puertas: "5",
    año: "1990",
    marca: "parana entrerios"
};
const casa1 = new casa(house);
console.log(casa1);