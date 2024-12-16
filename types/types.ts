
export type UserType = {
    user: string;
    password: string;
    message: string;
};

export type TestUserType = {
    regular: UserType;
    blocked: UserType;
    invalid: UserType;
    wrongPassword: UserType;
};