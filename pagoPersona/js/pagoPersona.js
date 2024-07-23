/**
 * Maria Fernanda Losada Silva
 * Pago de una persona
 * 25/06/2024
 */

function pagos(event){
    event.preventDefault(); 

    let valorDia= parseInt(document.getElementById('txtValorDia').value);
    let diasTrabajados= parseInt(document.getElementById('txtDiasTrabajados').value);
    let subTransporte=162000;
    let transporte;
    let retencion;
    let salarioMinimo=1300000;
    
    let sueldo = valorDia * diasTrabajados;
    let salarioMinimo2 = salarioMinimo*2;
    let salarioMinimo4 = salarioMinimo*4;

    if (sueldo>=salarioMinimo2) {
        transporte=subTransporte;
        document.getElementById('transporte').innerHTML="<strong>" + "Subsidio Transporte -> " +transporte+ "</strong>";
    }
   else {
        transporte=0;
        document.getElementById('transporte').innerHTML="<strong>" + "Subsidio Transporte -> " +transporte+ "</strong>";
   }


    if (sueldo>=salarioMinimo4) {
        retencion=0.04;
        document.getElementById('retencion').innerHTML="<strong>" + "Retencion -> " +retencion+ "</strong>"; 
    } 
    else{
        retencion=0;
        document.getElementById('retencion').innerHTML="<strong>" + "Retencion -> " +retencion+ "</strong>"; 
    }   

        let salud = sueldo*0.12;
        let pension = sueldo*0.16;
        let arl = sueldo*0.052;

        let deducibles = (salud+pension+arl)-sueldo;

        let pagoTotal=(sueldo+transporte)-deducibles-retencion;

        document.getElementById('salud').innerHTML="<strong>" + "Salud -> " +salud+ "</strong>";
        document.getElementById('pension').innerHTML="<strong>" + "Pension -> " +pension+ "</strong>";
        document.getElementById('arl').innerHTML="<strong>" + "Arl -> " +arl+ "</strong>";
        document.getElementById('deducibles').innerHTML="<strong>" + "Deducibles -> " +deducibles+ "</strong>";
        document.getElementById('pagoTotal').innerHTML="<strong>" + "Pago Total -> " +pagoTotal+ "</strong>";

        return false;


}


