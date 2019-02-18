/*// esta variable almacena los elemntos nodos que componen el nodo document
let elemento = document;
// esta variable almacena los elementos nodos que componen el nodo document pero dentro de un arreglo
elemento= document.all;
// almacena el elemento segun su indice del arreglo
elemento= document.all[5];

elemento= document.body;
elemento= document.domain;
elemento= document.URL;
elemento= document.images;
let imagenes= document.images;
// convertir un HTML collection en ua arreglo
let arregloImagenes = Array.from(imagenes);

console.log(arregloImagenes.length);*/

//getElementById
/*let encabezado = document.getElementById("encabezado");
let encabezadoEstilos = encabezado.style;
encabezadoEstilos.background = '#ccc';
encabezadoEstilos.color='red';
encabezadoEstilos.textShadow = '4px 4px 10px  white'
console.log(encabezado);*/

//getElemnetClassName
/*let iconos = document.getElementsByClassName('icono');
let arreglosIconos = Array.from(iconos);
console.log(arreglosIconos);


let iconos2 = document.querySelectorAll('.icono');
//let arreglosIconos = Array.from(iconos);
console.log(iconos2);

iconos2.forEach( function(element, index) {
	console.log(element+ ' ' +index);
});*/

/*const enlaces = document.querySelectorAll('#principal a:nth-child(odd)');
enlaces.forEach( function(elementos) {
	elementos.style.color = 'red';
	elementos.style.background = 'black';
});*/
/*let principal = document.querySelectorAll('nav a');
principal= principal[0].parentElement;
console.log(principal);*/


let nuevoEnlace = document.createElement('a');
nuevoEnlace.className= 'enlace';
nuevoEnlace.id='nuevo-id';
nuevoEnlace.setAttribute('href', '#');
nuevoEnlace.textContent ='Visita mi web';
document.querySelector('#secundaria').appendChild(nuevoEnlace);

console.log(nuevoEnlace);