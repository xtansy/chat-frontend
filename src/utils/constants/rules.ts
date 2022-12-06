import { Rule } from "antd/es/form";

const required = (req: boolean, message: string) => {
    if (!req) {
        return {
            required: false,
        };
    }
    return {
        required: true,
        message,
    };
};

const max = (count: number) => {
    return {
        max: count,
        message: `Максимум ${count} символов!`,
    };
};

const min = (count: number) => {
    return {
        min: count,
        message: `Минимум ${count} символов!`,
    };
};

const loginRules: Rule[] = [required(true, "Введите логин!"), max(7), min(3)];

const infoRules: Rule[] = [required(true, "Поле обязательно!"), max(7), min(3)];

const passwordRules: Rule[] = [
    required(true, "Введите пароль!"),
    max(12),
    min(6),
];

const confirmPasswordRules: Rule[] = [
    ...passwordRules,
    ({ getFieldValue }) => ({
        validator(_, value) {
            if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error("Пароли не совпадают!"));
        },
    }),
];

export { loginRules, passwordRules, confirmPasswordRules, infoRules };
