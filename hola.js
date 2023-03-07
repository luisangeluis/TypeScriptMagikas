function saludar(nombre) {
    return "Hola ".concat(nombre.toUpperCase());
}
console.log(saludar('luis'));
//**************************TIPOS PRIMITIVOS*************************
//boolean
var isVerdadero = false;
//number
var entero = 44;
var decimal = 20.05;
var hexadecimal = 0xcbcbaa;
var octal = 0700;
var binario = 010000001;
//puedes usar guion bajo para leerlo facilmente
var numberoLargo = 7100288;
console.log(numberoLargo);
//string
var saludo = 'hola';
//******************TIPOS PRIMITIVOS DE TYPESCRIPT*************************
//any
// toman cualquier tipo de valor, no usar nunca;
var unaVariable;
unaVariable = 'hola';
unaVariable = false;
//null
//Solo puedes asignar null
var nada = null;
//undefined
var indefinido = undefined;
//void
var unaFuncion = function () { return console.log('ejecutando'); };
