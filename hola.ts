function saludar(nombre: string): string {
  return `hi ${nombre.toUpperCase()}`;
}

console.log(saludar('luis'));
//**************************TIPOS PRIMITIVOS*************************
//boolean
let isVerdadero: boolean = false;
//number
let entero: number = 44;
let decimal = 20.05;
let hexadecimal: number = 0xcbcbaa;
let octal: number = 0o700;
let binario: number = 0o10000001;
//puedes usar guion bajo para leerlo facilmente
let numberoLargo: number = 7_100_288;
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
let nada: null = null;

//undefined
let indefinido: undefined = undefined;

//void
const unaFuncion = (): void => console.log('ejecutando');
