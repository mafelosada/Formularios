/**
 * Maria Fernanda Losada Silva
 * Notas
 * 25/06/2024
 */

function notas(){

    let nota1 = parseFloat(document.getElementById('txtNota1').value);
    let nota2 = parseFloat(document.getElementById('txtNota2').value);
    let nota3 = parseFloat(document.getElementById('txtNota3').value);

    let porcentaje1= nota1 * 0.2;
    let porcentaje2=nota2 * 0.35;
    let porcentaje3 = nota3 * 0.45;

    let suma=porcentaje1+porcentaje2+porcentaje3;

    if (suma>4.5) {
        document.getElementById('suma').innerHTML="<strong>" + suma + "->Nota Superior"+ "</strong>";
    }
    else if(suma<=4.5 && suma>3.5){
        document.getElementById('suma').innerHTML="<strong>" + suma + "->Nota Buena"+ "</strong>";
    }
    else if(suma<=3.5 && suma>3){
        document.getElementById('suma').innerHTML="<strong>" + suma + "->Nota Media"+ "</strong>";
    }
    else{
        document.getElementById('suma').innerHTML="<strong>" + suma + "->Nota Mala"+ "</strong>";
    }

    return false;

}


