import * as yup from "yup";

export const validationSchema = yup.object({
  message: yup.string().required("Required"),
});
