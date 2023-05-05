//?Sirve para indicar que una variable puede ser de ma de un tipo
const data: string | number = "hola";

type UserData = {
  name: string,
  email: string
}

type UserData2 = {
  name: string
}

const user: UserData | UserData2 = { name: "luis" }

const myFunction = (value: string | number) => {
  console.log(value);
  typeof (value) === "string"
    ? value.trim()
    : value.toFixed();
}

