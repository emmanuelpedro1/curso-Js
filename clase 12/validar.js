var userdevdata = 5;
if($("#id").val().length > 0){ userdevdata = userdevdata-1;}
if($("#nombres").val().length > 0){ userdevdata = userdevdata-1;}
if($("#apellidos").val().length > 0){ userdevdata = userdevdata-1;}
if($("#edad").val().length > 0){ userdevdata = userdevdata-1;}
if($("#monto").val().length > 0){ userdevdata = userdevdata-1;}
if(userdevdata === 0){
    $('#btnSaveStudent').attr('disabled', false);
} else {
    $('#btnSaveStudent').attr('disabled', true);
}
