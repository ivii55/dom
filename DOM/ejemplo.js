
console.log(document);
//   SELECTORES

//console.log(document)    //Veo todo lo que contiene el document

//console.log(document.getElementById("cabecera"));   //selecciono x id

//console.log(document.getElementsByClassName("border-grey"));// selecciono x clase

//console.log(document.getElementsByTagName("li")) // veo por tag, un listado

//console.log(document.getElementsByTagName("nav")); // x nombre del etiqueta (nav, li)

//console.log(document.getElementsByName("cabecera")); // x propiedad nombre

//console.log(document.querySelector("cabecera"));  // x query

//console.log(document.querySelectorAll("li")); //selecciona una query por listado

//console.log(document.querySelector("li"))     // veoe por query 1 a 1

//console.log(document.querySelectorAll(".border-grey"))  //veo por query todas las clases

//console.log(document.querySelector("#header"))   //veo por query todos por id

//console.log(document.querySelectorAll("[name=nombre]"))   // por query name

//const elemento = document.getElementById("header")

// const lista1 = document.getElementsByClassName("border-grey")    //listado de html collections, dinamica

// const lista2 = document.querySelectorAll(".border-grey")    // Node list estatica



////     CREO ELEMENTOS O NODOS PARA EL DOCUMENTO

// const titulo2 = document.createElement('h2')    // crea un titulo h2

// const textoTitulo2 = document.createTextNode("Nuevo titulo creado")   // crea un texto

// const comentario = document.createComment('Comentario')   // crea comentarios


///////   CLONO

// const articulo = document.querySelector('article');

// articulo.cloneNode()   //clone con (true) copia en profundidad (en memoria) el nodo

//const articulo2 = articulo.cloneNode(true);    //clona todo el articulo


// const section = document.getElementById("section");

// section.insertAdjacentText('beforeend','Aqui acaba la seccion') // se agrega un texto adyacente, dependiendo si le ponemos before, o after.

// section.insertAdjacentHTML('beforeend', '<h3> Esto es un titulo </h3>') // agrega una etiqueta html adyacente, h3, h2, etc.


/// ELIMINA

// section.remove() // remueve la seccion completa


///////REMPLAZAR

// section.innerHTML('<h2>Nuevo Titulo de la seccion</h2>')   //reemplaza la seccion

// section.outerHTML()   //Reemplaza toda la seccion

// section.children[0].textContent='Otro titulo' //Sustituye el titulo del h2


//// MODIFIZAR PROPIEDADES DEL DOM

// section.getAttribute('id') //trae la id de la seccion, si tenemos nombre= tambien se puede poner el nombre

// section.setAttribute('nombre', 'otrovalor') //cambia el nombre por el de otrovalor

// section.classList //  veo las clases

// section.className //  veo el string de la clase

// section.className += 'nuevaClasecss' // Se le agrega al string de la clase

// section.classList.add('nuevaClase')  /// añado una nueva clase

// section.classList.remove('nuevaClase')

// section.classList.toggle('nuevaClase')  //si existe la clase la quita, sino la agregaa, y al reves

// section.appendChild(articulo2) //agrega el articulo 2 que todavia no se ve reflejado en la pagina

// section.insertAdjacentElement('beforebegin', articulo2) 

// section.insertAdjacentElement('afterbegin', articulo2) 

// section.insertAdjacentElement('beforeend', articulo2) 

// section.insertAdjacentElement('afterend', articulo2) 


//       EVENTOS

//  LISTENNERS 

// function clickTitulo(){ //Funcion que cuando se clickea el titulo se muestra el mensaje.  No se usa asi porque es una mala practica al vombinar html y js en el mismo documento
//      console.log("El usuario hizo click en el titulo");
// }

// const clickTitulo = (ev)=>{ 
//     console.log(ev);
// } //evento

// const titulo2 = document.getElementById("tituloForm");

//titulo2.onclick = clickTitulo; // se llama a la funcion y se muestra el mensaje con la accion sin tocar el html

// titulo2.addEventListener("click", clickTitulo); // la mas recomendada

// titulo2.removeEventListener("click", clickTitulo) // se elimina


//   ENEVTO MAS UTILIZADOS SOBRE EL HTML

// document.addEventListener("DOMContentLoaded", ()=>{
//     console.log("El documento se ha largado") //Muestra el mensaje cuando se carga SOLO el html/se recarga la pagina
// })

//Submit y eliminar comportamiento nativo

const form = document.querySelector("#formulario");
const enviarFormulario = (event) =>{
    event.preventDefault(); //Se controla el comportamiento el evento default del navegador
    const{name, email,password} = event.target; //L
    console.log(event); // para ver todo
    console.log(
        name.value,
        email.value,
        password.value) // ver cada uno de los valores que se indican
        if (name.value.length === 0) alert("el nombre no es valido");
    }
form.addEventListener('submit', enviarFormulario);



//     EVENTO PARA ENVIAR UN FORMULARIO

// const form = document.querySelector("#formulario");
// const enviarFormulario = (event) =>{

//     }

form.addEventListener("submit", enviarFormulario);


const section = document.querySelector("#seccion");
const titulo2 = document.querySelector("#titulo2");
  
// titulo2.addEventListener("click", (event) =>  {
//     console.log(event.bubbles, event.cancelBubble);
//     event.stopPropagation();
//     console.log(event.bubbles, event.cancelBubble);
//     console.log("CLICK EN EL TITULO");


// }) //Al clickear en el titulo muestra que se clickeo la seccion y titulo
// section.addEventListener("click", () => {
//     console.log("click en la seccion");
// }); //Al clickear en la seccion muestra que se clickeo ahi.

//const section = document.querySelector("#seccion");

// section.addEventListener("click", (event) => {
//         console.log(event.target, event.currentTarget)    // veo el titulo especificamente clickeo
//     })   

section.addEventListener("click", (event) => {
        console.log("Click en seccion")
    },
    {

    });   



