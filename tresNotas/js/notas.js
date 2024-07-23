/**
 * Maria Fernanda Losada Silva
 * Notas
 * 11/06/2024
 */

function notas(){
    let nota1 = parseFloat(document.getElementById('txtNotaUno').value);
    let nota2 = parseFloat(document.getElementById('txtNotaDos').value);
    let nota3 = parseFloat(document.getElementById('txtNotaTres').value);
    let resultado;

    resultado = (nota1 + nota2 + nota3) / 3;


    parseFloat(document.getElementById('resultado').innerHTML = "<strong>" + resultado + "</strong>");

    return false;
}


