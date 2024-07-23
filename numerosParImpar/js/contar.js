/**
 * Maria Fernanda Losada Silva
 * Numeros
 * 11/06/2024
 */

function numero(event) {
    event.preventDefault(); // Previene el envío del formulario y la recarga de la página

    let contar = parseInt(document.getElementById('txtContar').value);
    let numero = 0;

    function mostrarNumero() {
        while (numero < contar) {
            numero++;

            if (numero % 2 === 0) {
                document.getElementById('numero').innerHTML += '<strong>' + numero + " - Par" + '</strong><br>';
            } else {
                document.getElementById('numero').innerHTML += '<strong>' + numero + " - Impar" + '</strong><br>';
            }
        }
    }

    mostrarNumero(); // Inicia la secuencia

    return false;
}