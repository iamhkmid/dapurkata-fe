import * as yup from "yup";

export const validationSchema = yup.object({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().required("Required").email("Incorrect E-mail format"),
  phone: yup
    .string()
    .typeError("Must be a 'number' type")
    .required("Required")
    .matches(
      /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/,
      "Incorrect Phone Number format"
    ),
  province: yup.string().required("Required"),
  city: yup.string().required("Required"),
  address: yup.string().required("Required"),
});
