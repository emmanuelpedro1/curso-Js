var nombre = prompt("Dime tu nombre");
var NombreIngresado = nombre != "";
if (NombreIngresado){
    alert("hola " + nombre + " Bienvenido/a");
    alert( nombre + " adivina un numero entre 0 y 10");

    var NumeroExacto = 6;
    var NumeroIngresado = prompt( "ingrese un numero");
    var Total = NumeroIngresado == 6;
    if(NumeroIngresado){
          if (Total){
              alert("bien ese es el numero");
          }
          else{
              alert("nop ese no es... vuelve a intentar luego");
          }

        }
        
    else {
        alert("Por favor escribe un numero");
        console.error( "Por favor escribe un numero");
        
    }
    
}
    
    else {
        alert("ERROR: INGRESA TU NOMBRE");
        console.error("ERROR: INGRESA TU NOMBRE")
        }
           


      