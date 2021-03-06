document.querySelector('#btnSaveStudent').addEventListener('click', saveStudent);
dowStudentTable()


function saveStudent() {
    const sId = document.getElementById("id").value,
        sName = document.getElementById("nombres").value,
        sSurname = document.getElementById("apellidos").value,
        sAge = document.getElementById("edad").value,
        sMoney = document.getElementById("monto").value;

    addStudentToSystem(sId, sName, sSurname, sAge, sMoney);
    dowStudentTable()
}

function dowStudentTable() {
    const list = getStudentList(),
        tbody = document.querySelector('#studentTable tbody');

    tbody.innerHTML = '';

    for (var i = 0; i < list.length; i++) {
        var row = tbody.insertRow(i);
        idCell = row.insertCell(0);
        nameCell = row.insertCell(1);
        surnameCell = row.insertCell(2);
        ageCell = row.insertCell(3);
        moneyCell = row.insertCell(4);

        idCell.innerHTML = list[i].id;
        nameCell.innerHTML = list[i].name;
        surnameCell.innerHTML = list[i].surname;
        ageCell.innerHTML = list[i].age;
        moneyCell.innerHTML = list[i].money;

        tbody.appendChild(row);
       

    }
}
document.querySelector('#btnDeleteStudent').addEventListener('click', deleteall);

