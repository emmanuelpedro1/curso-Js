var nombre = prompt("Dime tu nombre");
alert("hola " + nombre + " Bienvenido/a")

var edad = prompt("ingrese su edad");
if (parseInt(edad) > 18){

    console.log("sos mayor de edad");
}

    else{
        console.log ("no sos mayor de edad");
    }

alert("Vamos a calcular el precio del alquiler")
function iva(precio){
const SELLADO = 0.015;
return(precio / SELLADO) + precio;
}
const precioCosto = parseInt(prompt("ingrese precio del alquiler"));
const precioCalculado = iva(precioCosto);
alert("el precio calculado es: " + precioCalculado)

