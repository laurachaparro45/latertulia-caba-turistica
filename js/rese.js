function validarFormulario(){
	$('.alert').remove();
	


 var nombre=$('#nombre').val(),
     correo=$('#correo').val(),
     asunto=$('#asunto').val(),
     noches=$('#noches').val(),
     niños=$('#niños').val(),
     adultos=$('#adultos').val();



     if (nombre=="" || nombre==null){

	cambiarColor("nombre");

    mostrarAlerta("campo obligatorio");
	return false;




    }else{
    	var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]*$/;
    	if (!expresion.test(nombre)) {
    		cambiarColor("nombre");
    		mostrarAlerta("no se permiten caracteres especiales o numeros");
    		return false;
    	}
    }

if (correo=="" || correo==null){

	cambiarColor("correo");

    mostrarAlerta("campo obligatorio");
	return false;




    }else{
    	var expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    	if (!expresion.test(correo)) {
    		cambiarColor("correo");
    		mostrarAlerta("por favor ingrese un correo valido");
    		return false;
    	}
    }



   if (asunto=="" || asunto==null){

	cambiarColor("asunto");

    mostrarAlerta("campo obligatorio");
	return false;




    }else{
    	var expresion= /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ]*$/;
    	if (!expresion.test(asunto)) {
    		cambiarColor("asunto");
    		mostrarAlerta("no se permiten caracteres especiales");
    		return false;
    	}
    }
   


//funcion cambiar color
function cambiarColor(dato){
	$('#' + dato).css({
		border:"1px solid #dd5144"

	});
}


//funcion para mostrar alerta


function mostrarAlerta(texto){
   $('#nombre').before('<div class="alert">Error: '+ texto +' </div>');
}

$('form').submit();
return true


$('input').focus(function(){
    $('.alert').remove();
    colorDefault('nombre');
    colorDefault('correo');
    colorDefault('asunto');
    
});

$('textarea').focus(function(){
    $('.alert').remove();
    colorDefault('mensaje');
});

function colorDefault(dato){
		$('#' + dato).css({
		border:"1px solid #999"

	});
}

function cambiarColor(dato){
	$('#' + dato).css({
		border:"1px solid #dd5144"

	});
}



}




    



















