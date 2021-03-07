$('document').ready(inicializo);

function inicializo(){
    $("#BTNInscribirme").click(validoCampoVacio);
}

function validoCampoVacio(){
    if($("#IdEmail").val() == ""){
        alert("Debe ingresar su email!!");  
    }
    else{
        alert("Felicitaciones!! Ha quedado inscripto en el sorteo!");
    }
}
