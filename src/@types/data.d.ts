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

interface UserInfo {
    login: string;
    name: string;
    surname: string;
    email: string;
}
interface User extends UserInfo {
    _id: string;
    role: Role;
    avatar: string;
}


interface SimpleResponse {
    message: string;
}
interface Response<T> extends SimpleResponse {
    data: T;
}

type UserResponse = User & { password: string };

interface useSignUpResult extends Response<UserResponse> { }

interface signInResult extends Response<UserResponse> {
    accessToken: string;
}

interface Message {
    text: string;
    userId: string;
    _id: string;
    createdAt: string;
}
interface Dialog {
    owner: User;
    partner: User;
    messages: Message[];
    lastMessage: string;
    _id: string;
}
interface createDialogProps {
    partnerLogin: User["login"];
}


interface ServerToClientEvents {
    message: (obj: { dialogId: string; message: Message }) => void;
    createDialog: (obj: { text: string }) => void;
    deleteDialog: (obj: { text: string }) => void;
}

interface ClientToServerEvents {
    join: (dialogIds: Dialog["_id"][]) => void;
    message: (obj: { dialogId: string; text: string, userId: string }) => void;
}



// modals
interface ModalsProps<T> {
    open: boolean;
    setOpen: Dispatch<SetStateAction<T>>;
}

