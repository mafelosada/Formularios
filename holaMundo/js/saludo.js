/**
 * 
 * 
 * 
 */


function saludo(){
    let saludar;

    saludar= document.getElementById('txtsaludo').value;
    document.getElementById('saludo').innerHTML='<strong>'+saludar+'</strong>';

    return false;
}
