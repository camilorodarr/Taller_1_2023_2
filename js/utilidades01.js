var numeroAleatorio;

function nuevoJuego() {
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;

  document.getElementById("mensajeP").innerHTML = "";
  document.getElementById("numerito").value = "";
}

function adivinarNumero() {
  const numero = document.getElementById("numerito").value;

  if (numero == numeroAleatorio) {
    document.getElementById("mensajeP").innerHTML = "¡Felicidades, has adivinado el número!";
  } else if (numero < numeroAleatorio) {
    document.getElementById("mensajeP").innerHTML = "El número es más alto, intente de nuevo";
  } else {
    document.getElementById("mensajeP").innerHTML = "El número es más bajo, intente de nuevo";
  }
}

nuevoJuego();