import * as yup from "yup";

export const validationSchema = yup.object({
  url: yup.string().required("Required"),
  isEnabled: yup.boolean().required("Required"),
});
