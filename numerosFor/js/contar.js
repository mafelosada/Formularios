/**
 * Maria Fernanda Losada Silva
 * Numeros
 * 11/06/2024
 */

function numero(event) {
    event.preventDefault(); // Previene el envío del formulario y la recarga de la página

    let contar = parseInt(document.getElementById('txtContar').value);

    function mostrarNumero() {
        for ( let numero = 0;numero <= contar; numero++) {

            document.getElementById('numero').innerHTML += '<strong>' + numero + "-" + '</strong>';
        }
    }

    mostrarNumero(); // Inicia la secuencia

    return false;
}