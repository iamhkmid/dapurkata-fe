import * as yup from "yup";

export const validationSchema = yup.object({
  address: yup.string().required("Required"),
});
