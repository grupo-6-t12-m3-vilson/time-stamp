import * as yup from "yup";

const schemaMarkers = yup.object({
  time_video: yup.string().required("Campo obrigatorio"),
  title: yup.string().required("Campo obrigatorio"),
});

export default schemaMarkers;
