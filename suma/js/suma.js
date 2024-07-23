/**
 * Maria Fernanda Losada Silva
 * Sumas
 * 11/06/2024
 */

function suma(){
    let numeroUno= parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos= parseInt(document.getElementById('txtNumeroDos').value);
    let suma;

    suma = numeroUno + numeroDos;

    document.getElementById('suma').innerHTML="<strong>"+suma+"</strong>";

    return false;
}


