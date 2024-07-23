/**
 * Maria Fernanda Losada Silva
 * Pago de una persona
 * 11/06/2024
 */

function pago(){
    let valorDia= parseInt(document.getElementById('txtValorDia').value);
    let diasTrabajados= parseInt(document.getElementById('txtDiasTrabajados').value);

    let salario = valorDia * diasTrabajados;
    let salud = salario*0.12;
    let pension = salario*0.16;
    let arl = salario*0.052;

    let descuento = salud+pension+arl;
    let pagoTotal = salario-descuento;

    document.getElementById('descuento').innerHTML="<strong>" + "Descuento -> " +descuento+ "</strong>";
    document.getElementById('pagoTotal').innerHTML="<strong>" + "Pago Total -> " +pagoTotal+ "</strong>";

    return false;
}


