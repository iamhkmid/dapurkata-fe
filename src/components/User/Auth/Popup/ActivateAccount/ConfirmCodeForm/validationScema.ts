import * as yup from "yup";

export const validationSchema = yup.object({
  confirmCode: yup
    .string()
    .min(6, "Minimal 6 words")
    .max(6, "Minimal 6 huruf atau angka"),
});
