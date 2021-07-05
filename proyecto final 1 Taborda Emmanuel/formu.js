// arrays
alert("Antes de comenzar en la consola estan ordenados los precios de menor a mayor")
alert("Hola! primero le menciono los tratamientos disponibles");
alert("primero menciono la ID luego el tratamiento");
const tratmientosDisponibles = [
    { id: 1, producto: "depilacion", precio: 250 },
    { id: 2, producto: "cremas", precio: 200 },
    { id: 3, producto: "corte de pelo", precio: 120 }
];
tratmientosDisponibles.push({ id: 5, producto: "Estetica de uñas", precio: 500 });

for (const producto of tratmientosDisponibles) {
    alert(producto.id + "\n" + producto.producto + " " + producto.precio + "$");
}

const Tratamiento_precio = tratmientosDisponibles.sort((pre1, pre2) => {
    return pre1.precio - pre2.precio;
})
console.log("tratamientos ordenados de menor a mayor segun su precio")
console.log(Tratamiento_precio)

//function del Formulario
alert("ARRANQUEMOS!")
function NuevoFormulario(Nombre, Hora, Dia, Tratamiento1, Tratamiento2, Tratamiento3) {
    this.Nombre = Nombre;
    this.Hora = Hora;
    this.Dia = Dia;
    this.Tratamiento1 = Tratamiento1;
    this.Tratamiento2 = Tratamiento2;
    this.Tratamiento3 = Tratamiento3;
}
function Formulario() {
    var Nombre = prompt("ingrese el nombre y apellido");
    var Hora = prompt("Ingrese la hora del tratamiento");
    var Dia = prompt("ingrese el dia");
    var Tatamiento1 = parseInt(prompt("ingrese el tramiento 1"));
    var Tatamiento2 = parseInt(prompt("ingrese el tramiento 2"));
    var Tatamiento3 = parseInt(prompt("ingrese el tramiento 3"));

    var obj = new NuevoFormulario(Nombre, Hora, Dia, Tatamiento1, Tatamiento2, Tatamiento3);
    return obj;
    
}
var CantidadFormulario = parseInt(prompt("ingrese la cantidad de pacientes hoy"));
var tareas = {};
for (var i = 0; i < CantidadFormulario; i++) {
    var aux = Formulario(i);
    tareas[i] = aux;
}
for (var prop in tareas) {
    console.log(tareas[prop]);
}
