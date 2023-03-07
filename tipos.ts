//Arrays
let nums: number[] = [1, 2, 3];

//TIPOS EN TYPESCRIPT
//Tuplas: Es un array estricto
let db: [nombre: string, edad: number, comida: string, activo: boolean] = [
  'luis',
  30,
  'pizza',
  false,
];

let persona = {
  nombre: 'pepe',
  edad: 30,
  pais: 'colombia',
  nacimiento: new Date(1900, 5, 15),
};

console.log(persona.nombre);
