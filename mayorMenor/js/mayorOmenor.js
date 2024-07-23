/**
 * Maria Fernanda Losada Silva
 * Pago de una persona
 * 11/06/2024
 */

function edades(){
    let edad= parseInt(document.getElementById('txtEdad').value);
    if(edad < 18){
        document.getElementById('edad').innerHTML="<strong>" + "Persona Menor -> " +edad + " años"+ "</strong>";
    }
    else{
        document.getElementById('edad').innerHTML="<strong>" + "Persona Mayor -> " +edad + " años"+ "</strong>";
    }

    return false;
}


