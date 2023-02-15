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