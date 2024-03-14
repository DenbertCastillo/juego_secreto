let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroSecreto === numeroDeUsuario) {
    asignarTextoElemento(
      "p",
      `Acertaste el número secreto en ${intentos} ${
        intentos === 1 ? "vez" : "veces"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroSecreto > numeroDeUsuario) {
      asignarTextoElemento("p", "El número secreto es mayor");
    } else {
      asignarTextoElemento("p", "El número secreto es menor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  //Si ya se han generado todos los numeros

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  if (listaNumerosSorteados.length === numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon los números posibles");
  } else {
    //Si el número generado esta en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}
function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}
function reiniciarJuego() {
  //Limpiar caja
  limpiarCaja();
  //Indicar mensaje de intervalo de números
  //Generar el numuero aleatorio
  //Inicializar el número de intentos
  condicionesIniciales();
  //Deshabilitar el boton de nuevo juego
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

listaGenerica = [];
lenguajesProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
lenguajesProgramacion.push("Java", "Rubi", "GoLang");

function mostrarConsola() {
  console.log(lenguajesProgramacion);
}

mostrarConsola();

function listaReverse() {
  let listaReversa = lenguajesProgramacion.reverse();
  console.log(listaReversa);
}

listaReverse();

lista = [1, 2, 3, 4, 5];

function promedio(listaNumeros) {
  let suma = 0;
  for (let i = 0; i < listaNumeros.length; i++) {
    suma += listaNumeros[i];
  }

  let promedio = suma / listaNumeros.length;
  return promedio;
}

console.log(promedio(lista));

function obtenerMaximo(listaNumeros) {
  return Math.max(...listaNumeros);
}

function obtenerMinimo(listaNumeros) {
  return Math.min(...listaNumeros);
}

console.log(obtenerMaximo(lista));
console.log(obtenerMinimo(lista));

function encontrarPosicion1(elemento, listaNumeros) {
  // Usamos el método indexOf() para encontrar la posición del elemento en la lista.
  // Si el elemento no está presente, indexOf() devolverá -1.
  return listaNumeros.indexOf(elemento);
}

console.log(encontrarPosicion1(74, lista));
