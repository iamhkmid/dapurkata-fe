import * as yup from "yup";

export const validationSchema = yup.object({
  phone: yup
    .string()
    .required("Required")
    .matches(
      /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/,
      "Incorrect Phone Number format"
    ),
});
