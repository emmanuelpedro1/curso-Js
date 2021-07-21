// 'use strict';
// const btn_guardar = document.querySelector("#btnSaveStudent");

// let validar = ()=> {
//     console.log("hola")
// };

// btn_guardar.addEventListener('click', validar);


var id = document.getElementById("id");
var nombre = document.getElementById("nombres"); 
var apellido = document.getElementById("apellidos");
var edad = document.getElementById("edad");
var monto = document.getElementById("monto");
var error = document.getElementById("error");
error.style.color = "red"

function enviarFormulario(){
    var mensajeError = [];
if(id.value === null || id.value === ""){
  mensajeError.push("ingrese el DNI")  
}
if(nombre.value === null || nombre.value === ""){
    mensajeError.push("ingrese el nombre")  
  }
  if(apellido.value === null || apellido.value === ""){
    mensajeError.push("ingrese el apellido")  
  }
  if(edad.value === null || edad.value === ""){
    mensajeError.push("ingrese la edad")  
  }
  if(monto.value === null || monto.value === ""){
    mensajeError.push("ingrese el monto")  
  }
else{
    saveStudent();
}

  error.innerHTML = mensajeError.join(" <br> ");

return false;
}