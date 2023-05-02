type Numero = number;

type LoginCredentials = {
    user: string,
    pass: string,
    userType?: string
}

let num: Numero = 5;

const login = (data: LoginCredentials) => {

}

login({ user: 'luis', pass: '12345' });