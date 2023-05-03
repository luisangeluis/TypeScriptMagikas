let verdadera: true = true;
let cinco: 5 = 5;
let hola: "hola" = "hola";
let permiso: boolean = true;

const permiso2 = true;
const saludo2 = "hola";

type LoginOperation = {
  opcion: "login"
  user: string,
  pass: string
}

let l: LoginOperation = {
  opcion: "login",
  user: "admin",
  pass: "admin"
}