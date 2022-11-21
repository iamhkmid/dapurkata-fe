import * as yup from "yup";

export const validationSchema = yup.object({
  confirmCode: yup
    .string()
    .min(6, "Minimal 6 words")
    .max(6, "Minimal 6 huruf atau angka"),
  password: yup
    .string()
    .required("Required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
      "Minimum 8 characters at least 1 Alphabet, 1 Number and 1 Special Character"
    ),
  confirmPassword: yup
    .string()
    .required("Required")
    .oneOf([yup.ref("password"), ""], "Password must match"),
});
