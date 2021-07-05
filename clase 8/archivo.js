const listaAlumnos = [];
let condicion = true;
class alumnos {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = parseInt(edad)
    }
}
do {
    let nombre = prompt("ingrese nombre");
    let apellido = prompt(" ingrese apellido");
    let edad = prompt("ingrese edad");

    let alumnosPresente = new alumnos(nombre, apellido, edad);
    listaAlumnos.push(alumnosPresente);
    condicion = confirm("quiere seguir agregando alumnos?");

} while (condicion != false)

const section = document.querySelector(".contenedor");

const ul = document.createElement("ul");

for (let element of listaAlumnos) {
    let p = document.createElement("p")
    p.innerHTML = `
    <p>Nombre: ${element.nombre}</p>
    <p>Apellido: ${element.apellido}</p>
    <p>Edad: ${element.edad}</p>
    <p>Fecha de nacimiento: ${2021 - element.edad} </p>
    <hr>`
    ul.appendChild(p);
    section.appendChild(ul)
}
console.log(listaAlumnos)
