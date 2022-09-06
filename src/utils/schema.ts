import * as yup from "yup";

const schemaMarkers = yup.object({
  time_video: yup.string().required("Campo obrigatorio"),
  title: yup.string().required("Campo obrigatorio"),
});

export default schemaMarkers;

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("Por favor preencha o campo email")
    .email("Formato de email inválido"),
  password: yup.string().required("Por favor preencha o campo senha"),
});
