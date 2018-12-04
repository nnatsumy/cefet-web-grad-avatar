let name = document.querySelector('#name'); 
let avatarnome = document.querySelector('#avatar-nome'); 
let cor = document.querySelector('#cor-pele'); 
let cabelo = document.querySelector('#cabelo'); 

let corcorpo = document.querySelector('#avatar-corpo'); 
let corcabeca = document.querySelector('#avatar-cabeca'); 
let corcabelo = document.querySelector('#avatar-cabelo'); 

name.addEventListener('change', function(e) {
  document.getElementById("avatar-nome").innerHTML = name.value;
});


cor.addEventListener('change', function(e) {
  corcorpo.style.backgroundColor = cor.value;
  corcabeca.style.backgroundColor = cor.value;
});

cabelo.addEventListener('change', function(e) {
  corcabelo.src = cabelo.value;
});
