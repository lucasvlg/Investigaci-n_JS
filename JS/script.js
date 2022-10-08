// Obtener datos del input
function validar(){
    var form = document.form;
        if(form.nombre.value==0){
        alert("El campo 'Nombre' se encuentra vacío");
        form.nombre.value="";
        form.nombre.focus();
        return false;
    }

    var form = document.form;
    if(form.edad.value==0){
        alert("El campo 'Edad' se encuentra vacío");
        form.edad.value="";
        form.edad.focus();
        return false;
    }

    var form = document.form;
    if(form.email.value==0){
        alert("El campo 'Correo Electrónico' se encuentra vacío");
        form.email.value="";
        form.email.focus();
        return false;
    }


    var form = document.form;
    if(form.contra.value==0){
        alert("El campo 'Contraseña' se encuentra vacío");
        form.contra.value="";
        form.contra.focus();
        return false;
    }
}

    // Cálculo de sumas
    function suma (valor) {
    var total = 0;	
    valor = parseInt(valor);
    total = document.getElementById('resul').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseInt(total) + parseInt(valor));
    document.getElementById('resul').innerHTML = total;
}