/**
 * Maria Fernanda Losada Silva
 * Operaciones
 * 11/06/2024
 */

function sumar(){
    let numeroUno= parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos= parseInt(document.getElementById('txtNumeroDos').value);
    let suma;

    suma = numeroUno + numeroDos;

    if (suma%2==0) {
        resultadoSuma.innerHTML = `<span style="color: green; ">${suma} -> Numero Par</span>`;
    } else {
        resultadoSuma.innerHTML = `<span style="color: red; ">${suma} -> Numero Impar</span>`;
    }

    return false;
}

function restar(){
    let numeroUno= parseInt(document.getElementById('txtNumeroTres').value);
    let numeroDos= parseInt(document.getElementById('txtNumeroCuatro').value);
    let resta;

    resta = numeroUno - numeroDos;

    if (resta%2==0) {
        resultadoResta.innerHTML = `<span style="color: green; ">${resta} -> Numero Par</span>`;
    } else {
        resultadoResta.innerHTML = `<span style="color: red; ">${resta} -> Numero Impar</span>`;
    }

    return false;
}

function multiplicar(){
    let numeroUno= parseInt(document.getElementById('txtNumero1').value);
    let numeroDos= parseInt(document.getElementById('txtNumero2').value);
    let multiplicacion;

    multiplicacion = numeroUno * numeroDos;

    if (multiplicacion%2==0) {
        resultadoMulti.innerHTML = `<span style="color: green; ">${multiplicacion} -> Numero Par</span>`;
    } else {
        resultadoMulti.innerHTML = `<span style="color: red; ">${multiplicacion} -> Numero Impar</span>`;
    }

    return false;
}

function dividir(){
    let numeroUno= parseInt(document.getElementById('txtNumero3').value);
    let numeroDos= parseInt(document.getElementById('txtNumero4').value);
    let division;

    division = numeroUno / numeroDos;

    if (division%2==0) {
        resultadoDivision.innerHTML = `<span style="color: green; ">${division} -> Numero Par</span>`;
    } else {
        resultadoDivision.innerHTML = `<span style="color: red; ">${division} -> Numero Impar</span>`;
    }

    return false;
}