/**
 * Maria Fernanda Losada Silva
 * Notas
 * 11/06/2024
 */

function porcentajes(){
    let nota1 = parseFloat(document.getElementById('txtNota1').value);
    let porcentaje1 = parseFloat(document.getElementById('txtPorcentaje1').value);
    let nota2 = parseFloat(document.getElementById('txtNota2').value);
    let porcentaje2 = parseFloat(document.getElementById('txtPorcentaje2').value);
    let nota3 = parseFloat(document.getElementById('txtNota3').value);
    let porcentaje3 = parseFloat(document.getElementById('txtPorcentaje3').value);
    let resultadoPorcentaje1;
    let resultadoPorcentaje2;
    let resultadoPorcentaje3;

    resultadoPorcentaje1 = (nota1 * porcentaje1) / 100;
    resultadoPorcentaje2 = (nota2 * porcentaje2) / 100;
    resultadoPorcentaje3 = (nota3 * porcentaje3) / 100;


    parseFloat(document.getElementById('resultadoPorcentaje1').innerHTML = "<strong>" +"Nota 1-> "+ resultadoPorcentaje1 + "</strong>");
    parseFloat(document.getElementById('resultadoPorcentaje2').innerHTML = "<strong>"+"Nota 2-> " + resultadoPorcentaje2 + "</strong>");
    parseFloat(document.getElementById('resultadoPorcentaje3').innerHTML = "<strong>"+"Nota 3-> " + resultadoPorcentaje3 + "</strong>");

    let suma;

    suma=resultadoPorcentaje1+resultadoPorcentaje2+resultadoPorcentaje3;

    parseFloat(document.getElementById('suma').innerHTML = "<strong>"+"Nota Total-> " + suma + "</strong>");

    return false;
}


