$("#btnSaveStudent").on("click", saveStudent);
dowStudentTable()


function saveStudent() {
    const sId = $("#id").val(),
        sName = $("#nombres").val(),
        sSurname = $("#apellidos").val(),
        sAge = $("#edad").val(),
        sMoney = $("#monto").val();

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
        moneyCell.innerHTML = "$" + list[i].money;

        tbody.appendChild(row);
       

    }
}
$("#btnDeleteStudent").on("click", deleteall);

