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
  userPic: yup
    .mixed()
    .required("Required")
    .test("fileType", "File type not supported (only jpg/png)", (value) =>
      value[0] ? "image/jpeg image/png".includes(value[0].type) : true
    )
    .test("fileSize", "File is too large (max 2MB)", (value) =>
      value[0] ? value[0].size <= 2000000 : true
    ),
});
