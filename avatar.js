let name = document.querySelector('#name'); 
let avatarnome = document.querySelector('#avatar-nome'); 

name.addEventListener('change', function(e) {
  document.getElementById("avatar-nome").innerHTML = name.value;
});

