import * as yup from "yup";

export const validationSchema = yup.object({
  email: yup.string().required("Required").email("Incorrect E-mail format"),
});
