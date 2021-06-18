import { filtrarEspecie, filtrarGenero, ordenar } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
//console.log(example, data);

//Guardar data en una variable para poder jugar con ella
 const listaPersonajes = data.results;
 let personajesFiltrados = listaPersonajes;
 //console.log(listaPersonajes);

 function personajes (arreglo) {
  for(let i = 0; i <arreglo.length; i++){
     // console.log(arreglo[i]);
   // Creamos la tarjeta que contiene el nombre y la imagen 
    let contenedor = document.createElement("div");
    contenedor.className = "tarjeta";
    contenedor.setAttribute("id", "tarjeta");
   // Imagen
    let Img = document.createElement("img");
    Img.src = arreglo[i].image;
    Img.className = "imagenes";
    contenedor.appendChild(Img);
    // Nombre
    let nombre = document.createElement("h2");
    nombre.textContent = arreglo[i].name;
    nombre.className = "nombres";
    contenedor.appendChild(nombre);

    let parrafo = document.createElement("p");
    parrafo.textContent = arreglo[i].status;
    parrafo.className = "estado";
    contenedor.appendChild(parrafo);
   // Apadrinar las tarjetas al contenedor 
    document.getElementById("contenedorTarjetas").appendChild(contenedor)
  }
  
 }
 personajes(listaPersonajes) 
 
 

/* FILTRADO */ 
//Especie
 const selectEspecies = document.getElementById("filtrarEspecies");
 selectEspecies.addEventListener("change", filtrarE);

 function filtrarE() {
     const selectEspecie = document.getElementById("filtrarEspecies").value;
     personajesFiltrados = filtrarEspecie(listaPersonajes, selectEspecie);
     //console.log(resultado);
     let elementoPadre = document.getElementById("contenedorTarjetas");
     elementoPadre.innerHTML = "";
    /*let removerPersonajes = elementoPadre.children
    //console.log(removerPersonajes);
     for(let i = 0; i <removerPersonajes.length; i++){
        elementoPadre.removeChild(removerPersonajes[i])
     }*/
     personajes(personajesFiltrados)
 } 

//Genero
const selectGenero = document.getElementById("filtrarGenero");
selectGenero.addEventListener("change", filtrarG);

function filtrarG() {
    let selectGeneros = document.getElementById("filtrarGenero").value;
    let personajesFiltradosGenero = filtrarGenero(personajesFiltrados, selectGeneros)
    let elementoPadre = document.getElementById("contenedorTarjetas");
     elementoPadre.innerHTML = "";
    personajes(personajesFiltradosGenero)
    
} 
 const botonAZ = document.getElementById("ordenarAZ");
 botonAZ.addEventListener("click", ordenarA );
 const botonZA = document.getElementById("ordenarZA");
 botonZA.addEventListener("click", ordenarA );
 
 function ordenarA(e){
    let  ordenarPor = "name";
    let valorBoton = e.target.value;
    let resultado = ordenar(personajesFiltrados, ordenarPor, valorBoton)
    let elementoPadre = document.getElementById("contenedorTarjetas");
    elementoPadre.innerHTML = "";
    personajes(resultado);
   // console.log(valorBoton);
}




 /*function ordenarZ(){
    //console.log("se ejecuto ordenar");
    let  boton = "name";
    let valorOrder = "descendente";
    //console.log(boton);
    let resultado = ordenar(listaPersonajes, boton, valorOrder)

    let elementoPadre = document.getElementById("contenedorTarjetas");
    elementoPadre.innerHTML = "";
    personajes(resultado)
}*/



 /*const mostrarF = document.getElementById("filtrarEspecies");
 mostrarF.addEventListener("change", mostrar);

 function mostrar(){
    let elementos = document.getElementsByClassName("tarjetas");
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.display = "block";
    }
    
    document.getElementById("mostarFiltrado").style.display ="block";
    document.getElementById("contenedorTarjetas").style.display = "none";
 }
 




/* CONCEPTO =>
- innerHTML concatenando strings 
 document.getElementById("contenedor1").innerHTML += '<div class="tarjeta">' + listaPersonajes[i].name + '<img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg" class="grid-imagenes"></div>';
- innerHTML con template literals 
 document.getElementById("contenedor1").innerHTML += `<div class="tarjeta"> ${ listaPersonajes[i].name }<img src="https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg" class="grid-imagenes"></div>`;
*/


// PRUEBA =>
/*for(let i = 0; i <listaPersonajes.length; i++){
const contenedor = document.createElement("div");
let nombrePersonajes = document.createElement("p");
nombrePersonajes.innerHTML = listaPersonajes[i].name;
contenedor.appendChild(nombrePersonajes);
nombrePersonajes.innerHTML = listaPersonajes[i].name;
};*/


// PRUEBA =>
/*function mostrarPersonajes (data) {
 let personajes = document.getElementById("contenedor1");
 personajes.innerHTML = ("");
 //Recorrer la data
for(let i = 0; i <listaPersonajes.length; i++){
    let contenedor = document.createElement("div");
    let nombrePersonajes = document.createTextNode("listaPersonajes[i].name");
    let imgPersonajes = document.createElement("img");
    //imgPersonajes.scr = (listaPersonajes[i].image);
    contenedor.appendChild(nombrePersonajes);
};
 //console.log(listaPersonajes[i].name + " " + listaPersonajes[i].status);
};*/

// PRUEBA=>
//Accedo al primer personaje :)
/*let contenedor = document.createElement("div")
let nombre = document.createTextNode(listaPersonajes[0].name);
contenedor.appendChild(nombre);
document.getElementById("contenedor1").appendChild(contenedor);
let elementoImg = document.createElement("img");
elementoImg.src = listaPersonajes[0].image;
contenedor.appendChild(elementoImg);*/


/*... al nombre
let elementoP = document.createElement("p");
let nombre = document.createTextNode(listaPersonajes[0].name);
elementoP.appendChild(nombre);
document.getElementById("contenedor1").appendChild(elementoP);

//... a la imagen
let contenedor = document.createElement("div");
let elementoImg = document.createElement("img");
elementoImg.src = listaPersonajes[0].image;
contenedor.appendChild(elementoImg);
document.getElementById("contenedor1").appendChild(contenedor);*/

// PRIMERA PRUEBA =>
/*const primerPersonaje =  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31"
    ],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
}
document.getElementById("nombre").innerHTML = primerPersonaje.name + "";
console.log(primerPersonaje);
*/
