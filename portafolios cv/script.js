function ampliar(){
    document.getElementById('fotoCarnet').style.width = "250px";
    document.getElementById('fotoCarnet').style.height = "300px";
    
}
function ajustar(){
    document.getElementById('fotoCarnet').style.width = "120px";
    document.getElementById('fotoCarnet').style.height = "150px"
}
function pedirNombre(){
var nombreUsuario=prompt("Para continuar ingrese su nombre: ")

document.getElementById('nombreVisita').innerHTML=nombreUsuario;

document.getElementById('divFoto').style.display= 'block'; 
document.getElementById('divFoto').style.display= 'flex';

}


$(function(){

    $.validator.addMethod("caracteresEspeciales",function(value, element) {
        return /^[A-Za-z\d=#$%@_ -]+$/.test(value);
    },"Nada de caracteres especiales, por favor");
    var $form=$("#formulario");

    if($form.length){
        $form.validate({
            rules:{
                email:{
                    required:true,
                    email:true
                    
                },
                nombre:{
                    required:true,
                    minlength: 3,
                    maxlength:12,
                    lettersonly:true
                },
                apellido:{
                    required:true,
                    minlength: 3,
                    maxlength:12,
                    lettersonly:true
                },
                sexo:{
                    required:true
                },
                contacto:{
                    required:true
                }, 
                comentarios:{
                    required:true,
                    caracteresEspeciales:true,
                    maxlength:250                    
                }
            },
            messages:{
                email:{
                    required:'Porfavor debe ingresar un email',
                    email:'Debe ingresar un email valido'
                },
                nombre:{
                    required:'Porfavor debe ingresar un nombre',
                    minlength:'El nombre debe tener al menos 3 caracteres',
                    maxlength:'EL nombre no debe superar los 12 caracteres',
                    lettersonly:'Solo se aceptan letras'
                },
                apellido:{
                    required:'Porfavor debe ingresar un nombre',
                    minlength:'El apellido debe tener al menos 3 caracteres',
                    maxlength:'EL apellido no debe superar los 12 caracteres',
                    lettersonly:'Solo se aceptan letras'
                },
                sexo:{
                    required:'Porfavor debe seleccionar un genero'
                },
                contacto:{
                    required:'Porfavor debe seleccionar que tipo de contacto que desea realizar'
                }, 
                comentarios:{
                    required:'Porfavor Detalle el comentario',
                    maxlength:'Superaste el limite de caracteres'
                  
                }

            },
            errorPlacement: function(error, element){
                if(element.is(":radio")){
                    error.appendTo(element.parents(".sexo"));
                }else{
                    error.insertAfter(element);
                }
            }

        })
    }
})