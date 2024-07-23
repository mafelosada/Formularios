/**
 * Maria Fernanda Losada Silva
 * Porcentajes
 * 11/06/2024
 */

function porcentaje(){
    let numero= parseInt(document.getElementById('txtNumero').value);
    let porcentaje= parseInt(document.getElementById('txtPorcentaje').value);
    let porcentajes;

    porcentajes = (numero * porcentaje) / 100;

    document.getElementById('porcentajes').innerHTML="<strong>"+porcentajes+"</strong>";

    return false;
}

