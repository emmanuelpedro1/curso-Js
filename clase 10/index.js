var listaAlumnos = [];

function addAlumnos(Nombre1, Apellido1, Edad1, Monto1){
    var NewAlumno = {
        nombre : Nombre1,
        apellido : Apellido1,
        edad : Edad1,
        monto : Monto1
    };
   
    listaAlumnos.push(NewAlumno);
    console.log(listaAlumnos);
}

function obtenerlista(){
    return listaAlumnos
}


document.querySelector('#SaveAlumno').addEventListener('click', GuardarAlumno);


function GuardarAlumno() {
    var Nombre2 = document.querySelector('#nombres').value,
        Apellido2 = document.querySelector('#apellidos').value,
        Edad2 = document.querySelector('#edad').value,
        Monto2 = document.querySelector('#Monto').value;

    addAlumnos(Nombre2, Apellido2, Edad2, Monto2);
    
}
 function TablaAlumnos(){
     var list = obtenerlista();
     tbody = document.querySelector('#alumnostabla tbody');
     tbody.innerHTML = '';

     for(var i = 0; i< list.length; i++){
         var row = tbody.insertRow(1);
         var NombreCell = row.insertCell(0);
         NombreCell.innerHTML = list(i).name;





         tbody.appendChild(row);
     }
 }



