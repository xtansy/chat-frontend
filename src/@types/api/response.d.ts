interface SimpleResponse {
    message: string;
}

interface Response<T> extends SimpleResponse {
    data: T;
}

interface useSignUpResult extends Response<User> { }

interface signInResult extends Response<User> {
    accessToken: string;
}