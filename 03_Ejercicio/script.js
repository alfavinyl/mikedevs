const boton = document.getElementById("boton-color");
const body = document.body;

boton.addEventListener("click", () => {
  body.classList.toggle("nuevo-color");  
  body.classList.toggle("fondo-gris");
});

$(document).ready(function () {
  $("#boton-color2").click(function () {
    $("h1").toggle();
  });
});