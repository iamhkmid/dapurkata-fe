import * as yup from "yup";

export const validationSchemaChangeSS = yup.object({
  shippingStatus: yup
    .string()
    .required("Required")
    .matches(/^(unProcessed|inProcess|inShipping)$/, "Invalid shipping status"),
  receiptNumber: yup.string().when("shippingStatus", (shippingStatus) => {
    if (shippingStatus === "inShipping") {
      return yup.string().required("Required");
    }
  }),
});
