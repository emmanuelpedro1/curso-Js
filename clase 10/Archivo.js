class alumno {
    constructor(nombre, apellido, edad, monto) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.edad = parseInt(edad),
            this.monto = parseInt(monto)
    }
}



let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

const listaAlumnos = [];

function validarFormulario(e) {
    e.preventDefault();


    const nombre = document.getElementById("nombres").value;
    const apellido = document.getElementById("apellidos").value;
    const edad = parseInt(document.getElementById("edad").value);
    const monto = parseInt(document.getElementById("monto").value);
    const alumnoPresente = new alumno(nombre, apellido, edad, monto);
    listaAlumnos.push(alumnoPresente);
    console.log(listaAlumnos);

    const section = document.querySelector(".contenedor");
    const ul = document.createElement("ul");

    const div = document.createElement("div")
    div.innerHTML = `<div class = "container border border-primary text-center"
            <p>Nombre: ${formulario.children[1].value}</p>
            <p>Apellido: ${formulario.children[3].value}</p>
            <p>Edad: ${formulario.children[5].value}</p>
            <p>Fecha de nacimiento: ${2021 - formulario.children[5].value} </p>
            <p> Monto pagado : ${formulario.children[7].value}</p>
           </div> <hr>`
    ul.appendChild(div);
    section.appendChild(ul)


localStorage.setItem("alumno", JSON.stringify(alumnoPresente));
console.log(localStorage.getItem("alumno"))

const alumnoguardado = localStorage.getItem("alumno");
const objetoalumno = JSON.parse(alumnoguardado);
console.log (objetoalumno);

btnrecuperar.addEventListener ('click', () => {
    const val = localStorage.getItem("alumno", val);
    document.getElementById(".contenedor").innerHTML = val;


}
)

}

