/**
 * Maria Fernanda Losada Silva
 * Comparacion de numeros
 * 11/06/2024
 */

function comparacion(){
    let numero1= parseInt(document.getElementById('txtNumero1').value);
    let numero2= parseInt(document.getElementById('txtNumero2').value);
    let mayor;

    if(numero1 > numero2){
        mayor=numero1;
        document.getElementById('mayor').innerHTML="<strong>" + "Numero 1 mayor -> " +numero1 + "</strong>";
    }
    else{
        mayor= numero2;
        document.getElementById('mayor').innerHTML="<strong>" + "Numero 2 mayor -> " +numero2 + "</strong>";
    }


    return false;
}


