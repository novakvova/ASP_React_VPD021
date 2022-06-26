import * as yup from "yup";

export const RegisterSchema = yup.object({
    email: yup
        .string()
        .required("Поле пошта є обов'язковим!")
        .email("Вкажіть приавльно пошту"),
});