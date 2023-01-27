import { Rule } from "antd/es/form";
import { NamePath } from "antd/es/form/interface";

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



const loginRules: Rule[] = [required(true, "Введите логин!"), max(16), min(3)];
const emailRules: Rule[] = [required(true, "Введите эмайл!"), max(20), min(5), { type: "email", message: "non-valid email" }];

const infoRules: Rule[] = [required(true, "Поле обязательно!"), max(15), min(3)];

const passwordRules: Rule[] = [
    required(true, "Введите пароль!"),
    max(20),
    min(6),
];


const confirmPasswordRules = (namePath: NamePath): Rule[] => {
    return [
        ...passwordRules,
        ({ getFieldValue }) => ({
            validator(_, value) {
                if (!value || getFieldValue(namePath) === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error("Пароли не совпадают!"));
            },
        }),
    ];
}

export {
    loginRules,
    passwordRules,
    confirmPasswordRules,
    infoRules,
    emailRules,
};
