import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("Por favor preencha o campo email")
    .email("Formato de email inválido"),
  password: yup.string().required("Por favor preencha o campo senha"),
});
