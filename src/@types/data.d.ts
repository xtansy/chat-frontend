interface signUpProps {
    login: string;
    name: string;
    surname: string;
    email: string;
    password: string;
}
interface useSignUpResult {
    data: signUpProps & { _id: string };
    message: string;
}


interface signInProps {
    login: string;
    password: string;
}

interface Role {
    _id: string;
    name: string;
}
interface User {
    _id: string;
    login: string;
    name: string;
    surname: string;
    email: string;
    role: Role;
}

interface signInResult {
    message: string;
    user: User & { password: string };
    accessToken: string;
}

