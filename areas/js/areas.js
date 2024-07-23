/**
 * Maria Fernanda Losada Silva
 * Porcentajes
 * 11/06/2024
 */

function areaCuadrado(){
    let lado= parseInt(document.getElementById('txtLado').value);
    let areaCuadrado;
    let imagenCuadrado="<img src='img/cuadrado.png' style='width: 150px; height: 150px;'>";

    areaCuadrado = lado * lado;

    document.getElementById('areaCuadrado').innerHTML="<strong>" + "AREA-> " +areaCuadrado + imagenCuadrado + "</strong>";

    return false;
}

function areaTriangulo(){
    let base= parseInt(document.getElementById('txtBase').value);
    let altura= parseInt(document.getElementById('txtAltura').value);
    let areaTriangulo;
    let imagenTriangulo="<img src='img/triangulo.jpeg' style='width: 150px; height: 150px;'>";

    areaTriangulo = (base * altura) / 2;

    document.getElementById('areaTriangulo').innerHTML="<strong>" + "AREA-> " +areaTriangulo + imagenTriangulo + "</strong>";

    return false;
}


function areaCirculo(){
    let radio= parseInt(document.getElementById('txtRadio').value);
    let areaCirculo;
    let imagenCirculo="<img src='img/circulo.jpeg' style='width: 150px; height: 150px;'>";

    areaCirculo = (radio * radio) * 3.1416 ;

    document.getElementById('areaCirculo').innerHTML="<strong>" + "AREA-> " +areaCirculo + imagenCirculo+ "</strong>";

    return false;
}


function areaRectangulo(){
    let baseRectangulo= parseInt(document.getElementById('txtBaseRectangulo').value);
    let alturaRectangulo= parseInt(document.getElementById('txtAlturaRectangulo').value);
    let areaRectangulo;
    let imagenRectangulo="<img src='img/rectangulo.jpg' style='width: 250px; height: 150px;'>";

    areaRectangulo = baseRectangulo * alturaRectangulo;

    document.getElementById('areaRectangulo').innerHTML="<strong>" + "AREA-> " +areaRectangulo + imagenRectangulo+ "</strong>";

    return false;
}


