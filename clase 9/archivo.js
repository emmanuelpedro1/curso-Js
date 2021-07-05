let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);
let listaAlumnos = [];
function validarFormulario(e) {
    e.preventDefault();
   
    class alumnos {
        constructor(nombre, apellido, edad) {
            this.nombre = nombre,
                this.apellido = apellido,
                this.edad = parseInt(edad)
        }
    }
    const nombre = document.getElementById("nombres").value;
    const apellido = document.getElementById("apellidos").value;
    const edad = parseInt( document.getElementById("edad").value);
    const alumnosPresente = new alumnos(nombre, apellido, edad);
    listaAlumnos.push(alumnosPresente);
    console.log(listaAlumnos);
    const section = document.querySelector(".contenedor");
    const ul = document.createElement("ul");
    
        let p = document.createElement("p")
        p.innerHTML = `<div class = "container border border-primary text-center"
            <p>Nombre: ${formulario.children[1].value}</p>
            <p>Apellido: ${formulario.children[3].value}</p>
            <p>Edad: ${formulario.children[5].value}</p>
            <p>Fecha de nacimiento: ${2021 - formulario.children[5].value} </p>
           </div> <hr>`
        ul.appendChild(p);
        section.appendChild(ul)
    
}