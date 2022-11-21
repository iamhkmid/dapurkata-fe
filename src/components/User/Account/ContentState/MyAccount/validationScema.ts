import * as yup from "yup";

export const validationSchema = yup.object({
  firstName: yup.string().required("Required"),
  lastName: yup.string(),
  username: yup
    .string()
    .required("Required")
    .matches(
      /^[a-zA-Z]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/,
      "Minimum 5 characters, start with Alphabet"
    ),
  email: yup.string().required("Required").email("Incorrect E-mail format"),
  phone: yup
    .string()
    .typeError("Must be a 'number' type")
    .required("Required")
    .matches(
      /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/,
      "Incorrect Phone Number format"
    ),
});
