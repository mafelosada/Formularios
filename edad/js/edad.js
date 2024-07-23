/**
 * Maria Fernanda Losada Silva
 * Sumas
 * 11/06/2024
 */


function calcularEdad() {
    var fechaNacimiento = new Date(document.getElementById("txtFecha").value);
    var fechaActual = new Date();
    var añoActual = fechaActual.getFullYear();
    var añoNacimiento = fechaNacimiento.getFullYear();

    var edad = añoActual - añoNacimiento;

    // Restar un año si la persona no ha cumplido años este año aún
    if (fechaNacimiento.getMonth() > fechaActual.getMonth() || 
        (fechaNacimiento.getMonth() === fechaActual.getMonth() && fechaNacimiento.getDate() > fechaActual.getDate())) {
        edad--;
    }


    document.getElementById("resultado").innerHTML = "La edad es: " + edad;

    if (edad >= 18) {
        resultado.innerHTML = "La persona es mayor de edad. Edad: " + edad;
    } else {
        resultado.innerHTML = "La persona es menor de edad. Edad: " + edad;
    }

    return false;
}