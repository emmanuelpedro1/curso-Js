var nombre = prompt("Dime tu nombre");
var NombreIngresado = nombre != "";
if (NombreIngresado){
    alert("hola " + nombre + " Bienvenido/a")
    alert( nombre + " adivina un numero entre 0 y 10");

    var NumeroExacto = 6;
    var NumeroIngresado = prompt( "ingrese un numero");
    var total = NumeroExacto == NumeroIngresado;
    if(total){
            alert("Bien ese es");}
        
    else {
        alert("nop no es ese ");
    }
    
    
}
    
    else {
        alert("ERROR: INGRESA TU NOMBRE");
        console.error("ERROR: INGRESA TU NOMBRE")
        }
           


      