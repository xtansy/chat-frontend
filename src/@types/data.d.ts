interface signUpProps {
    login: string;
    name: string;
    surname: string;
    email: string;
    password: string;
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

interface Response<T> {
    message: string;
    data: T;
}

type UserResponse = User & { password: string };

interface useSignUpResult extends Response<UserResponse> { }

interface signInResult extends Response<UserResponse> {
    accessToken: string;
}





