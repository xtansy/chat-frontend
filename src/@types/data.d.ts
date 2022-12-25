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

interface Dialog {
    owner: User;
    partner: User;
    messages: string[];
    lastMessage: string;
    _id: string;
}
interface createDialogProps {
    partnerLogin: string;
}


interface ServerToClientEvents {
    message: (obj: { dialogId: string; message: string }) => void;
    test: (test: string) => void;
}

interface ClientToServerEvents {
    join: (dialogIds: Dialog["_id"][]) => void;
    message: (obj: { dialogId: string; message: string }) => void;
}

