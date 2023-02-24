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
