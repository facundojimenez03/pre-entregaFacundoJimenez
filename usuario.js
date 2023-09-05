

let comenzar;
function saludar(comenzar){
    saludar = alert("bienvenido al CASINO ROYAL  " + '\n'
    + "presione ENTER para registrarte");
}
saludar(comenzar);

const mayor = 18; 
let nombre;
let apellido;
let continuar;
let saldo;
let deposito;
let jugando;

do {
    nombre = prompt("ingrese su nombre");
    apellido = prompt("ingrese su apellido");
    edad = +prompt("ingrese su edad"); 
    if (edad >= mayor) {
        continuar = alert("usted accedio correctamente " + '\n'
        + nombre + ' ' + apellido);
        jugar();
        break; 
    } else {
        continuar = alert("acceso denegado" + '\n'
        + "no tiene la edad suficiente para ingresar");
    }
} while (true); 

function jugar() {
    do {
        deposito = prompt ("ingrese el monto que va a depositar  " + '\n'
        + "no puede ingresar mas de 2000$");
        deposito = parseFloat(deposito);
        if (deposito > 2000 || isNaN(deposito)) {
            deposito = alert("El monto supera el limite permitido o no ingreso un monto");
        } else {
            continuar = alert("HOLA " + nombre + '\n'
            + "su monto ingresado es de: " + '\n'
            + deposito);
        }
    } while (deposito > 2000 || isNaN(deposito)); 
    ingresado();
}

function ingresado() {
    jugando = alert("el juego ha comenzado");
}