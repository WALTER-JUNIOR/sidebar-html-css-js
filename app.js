const side = document.querySelector('#menu');
const contenido = document.getElementById('conten');
   
 side.addEventListener('click',() => {
  contenido.classList.toggle('mostrar')
    });