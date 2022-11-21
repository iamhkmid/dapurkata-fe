import * as yup from "yup";

export const validationSchema = yup.object({
  username: yup
    .string()
    .required("Required")
    .matches(
      /^[a-zA-Z]([._-](?![._-])|[a-zA-Z0-9]){3,30}[a-zA-Z0-9]$/,
      "Minimum 5 characters, start with Alphabet"
    ),
});
