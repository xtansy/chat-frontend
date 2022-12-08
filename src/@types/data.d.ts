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
