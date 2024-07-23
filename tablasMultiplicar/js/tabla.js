/**
 * Maria Fernanda Losada Silva
 * Numeros
 * 11/06/2024
 */

function multiplicar() { // Previene el envío del formulario y la recarga de la página

    let contar = parseInt(document.getElementById('txtContar').value);
    let numero = 1;

    function mostrar() {
        while (numero <= 10) {
            let multiplicacion= contar * numero;
            if (multiplicacion % 2 === 0) {
                document.getElementById('multiplicacion').innerHTML += '<strong>'+ contar + "*" + numero + "=" + multiplicacion + " - Par" + '</strong><br>';
            } else {
                document.getElementById('multiplicacion').innerHTML += '<strong>'+ contar + "*" + numero + "=" + multiplicacion + " - Impar" + '</strong><br>';
            }

            numero++;
        }
    }

    mostrar(); // Inicia la secuencia

    return false;
}