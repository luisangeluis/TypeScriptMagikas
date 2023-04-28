"use strict";
function saludar(nombre) {
    return `hi ${nombre.toUpperCase()}`;
}
console.log(saludar('luis'));
//**************************TIPOS PRIMITIVOS*************************
//boolean
let isVerdadero = false;
//number
let entero = 44;
let decimal = 20.05;
let hexadecimal = 0xcbcbaa;
let octal = 0o700;
let binario = 0o10000001;
//puedes usar guion bajo para leerlo facilmente
let numberoLargo = 7100288;
console.log(numberoLargo);
//string
let saludo = 'hola';
//******************TIPOS PRIMITIVOS DE TYPESCRIPT*************************
//any
// toman cualquier tipo de valor, no usar nunca;
let unaVariable;
unaVariable = 'hola';
unaVariable = false;
//null
//Solo puedes asignar null
let nada = null;
//undefined
let indefinido = undefined;
//void
const unaFuncion = () => console.log('ejecutando');
