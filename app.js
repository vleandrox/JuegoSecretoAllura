let numerosecreto=0;
let intentos =0;
let listanumerosSorteados = [];
let numeroMaximo = 10;
console.log(numerosecreto);
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  console.log("Intentos: " + intentos);
  if (numeroDeUsuario === numerosecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero en ${intentos} ${intentos == 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuario no ha acertado
    if (numeroDeUsuario > numerosecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log("Numerosecreto: " + numeroGenerado);
  console.log(listanumerosSorteados);
  //Si ya sorteamos todos los numeros
  if (listanumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
  } else {
    //Si el numero generado esta incluido en la lista
    if (listanumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listanumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}
function condicionesIniciales() {
  asignarTextoElemento("h1", "JUEGO DE ADIVINAR EL NUMERO");
  asignarTextoElemento("p", `INDICA UN NUMERO DE 1 AL ${numeroMaximo}`);
  numerosecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //Limpiar la caja de texto
  limpiarCaja();
  //Indicar mensaje de intervalo de numeros
  condicionesIniciales();
  //Generar nuevo numero secreto
  //Inicializar el contador de intentos
  //Desactivar el boton de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
