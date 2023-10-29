// selecciono elementos DOM

let inputElement = document.getElementById('str');
let button = document.getElementById('btn');
let outputDiv =document.getElementById('output');


inputElement.addEventListener('input', function (){
    
    //comprobación si la longitud es > 50 para limitarlo a 50

    if (inputElement.value.length > 50) {
    inputElement.value = inputElement.value.slice(0, 50);
    }
    
    // se activa cuando el button será clicado

button.addEventListener('click', function(){

    //obtiene los valores
    let word = document.getElementById('str').value;//campo 'str' y lo almacena en 'word'
    let count = word.length; // calcula longitud
    let outputDiv = document.getElementById('output');//elemento de salida que establece su contenido HTML para mostrar el valor de 'count'

    outputDiv.innerHTML = `<h1>${count}</h1>`

});

});
