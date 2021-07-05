function NuevoFormulario (Nombre,Hora,Dia,Tratamiento1,Tratamiento2,Tratamiento3){
    this.Nombre = Nombre;
    this.Hora = Hora;
    this.Dia = Dia;
    this.Tratamiento1 = Tratamiento1;
    this.Tratamiento2 = Tratamiento2;
    this.Tratamiento3 = Tratamiento3;
    this.estado = "pendiente";

    this.cambioEstado = (estado) => {
        return alert ("Cambio de estado exitosamente, su estado es: "+ this.estado);
    }
};
this.CambioDeDatos = (nuevoNombre, nuevaHora, nuevoDia, nuevoTratamiento1, nuevoTratamiento2,nuevoTratamiento3) =>{
    this.Nombre = nuevoNombre;
    this.Hora = nuevaHora;
    this.Dia = nuevoDia;
    this.Tratamiento1 = nuevoTratamiento1;
    this.Tratamiento2 = nuevoTratamiento2;
    this.Tratamiento3 = nuevoTratamiento3;
return alert("cambio exitoso")
}

function Formulario(){
    var Nombre = prompt ("ingrese el nombre y apellido");
    var Hora = prompt("Ingrese la hora del tratamiento");
    var Dia = prompt("ingrese el dia");
    var Tatamiento1 = prompt("ingrese el tramiento 1");
    var Tatamiento2 = prompt("ingrese el tramiento 2");
    var Tatamiento3 = prompt("ingrese el tramiento 3");

    var obj = new NuevoFormulario (Nombre, Hora, Dia,Tatamiento1,Tatamiento2,Tatamiento3);
    return obj;
}
var CantidadFormulario = parseInt(prompt("ingrese la cantidad de pacientes hoy"));
var tareas = {};
for (var i = 0; i < CantidadFormulario; i++){
    var aux = Formulario(i);
    tareas[i] = aux;
}
for (var prop in tareas){
    console.log(tareas[prop]);
    tareas[prop].cambioEstado("completo");
}