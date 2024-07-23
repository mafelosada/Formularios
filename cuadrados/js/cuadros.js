/**
 * Maria Fernanda Losada Silva
 * Comparacion de areas de Cuadrados
 * 11/06/2024
 */

function comparacion(){
    let lado1= parseInt(document.getElementById('txtLado1').value);
    let lado2= parseInt(document.getElementById('txtLado2').value);
    let lado3= parseInt(document.getElementById('txtLado3').value);

    let areaCuadrado1 = lado1 * lado1;
    let areaCuadrado2 = lado2 * lado2;
    let areaCuadrado3 = lado3 * lado3;

    let mayor;

    if(areaCuadrado1 > areaCuadrado2){
        mayor=areaCuadrado1;
        document.getElementById('mayor').innerHTML="<strong>" + "Area del cuadrado 1 es mayor-> " + areaCuadrado1 + "</strong>";
    }
    else if(areaCuadrado2 > areaCuadrado3){
        mayor=areaCuadrado2;
        document.getElementById('mayor').innerHTML="<strong>" + "Area del cuadrado 2 es mayor-> " + areaCuadrado2 + "</strong>";
    }
    else{
        mayor= areaCuadrado3;
        document.getElementById('mayor').innerHTML="<strong>" + "Area del cuadrado 3 es mayor-> " + areaCuadrado3 + "</strong>";
    }


    return false;
}


