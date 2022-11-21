import * as yup from "yup";

export const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  edition: yup
    .string()
    .test("len", "Edition must be less than 10 characters", (val) =>
      val ? val.length < 10 : true
    ),
  series: yup
    .string()
    .test("len", "Series must be number and less than 1000", (val) =>
      !!val ? Number(val) < 1000 : true
    ),
  releaseYear: yup
    .string()
    .required("Required")
    .matches(/^20((0[5-9])|([1-9][0-9]))$/, "Release Year minimum is 2005"),
  numberOfPages: yup
    .number()
    .required("Number of page is Required")
    .typeError("Number of page must be number")
    .positive("Number of page must be positive number"),
  length: yup
    .number()
    .required("Required")
    .typeError("length must be number")
    .positive("length must be positive number"),
  width: yup
    .number()
    .required("Required")
    .typeError("Width must be number")
    .positive("Width must be positive number"),
  weight: yup
    .number()
    .required("Required")
    .typeError("Weight must be number")
    .positive("Weight must be positive number"),
  stock: yup.number().typeError("Stock must be number").required("Required"),
  price: yup
    .number()
    .required("Required")
    .typeError("Price must be number")
    .positive("Price must be positive number"),
  condition: yup
    .string()
    .required("Required")
    .matches(/^(NEW|PRELOVED)$/, "Condition must be NEW or PRELOVED"),
  coverType: yup
    .string()
    .required("Required")
    .matches(
      /^(EBOOK|HARD COVER)$/,
      "Cover Type must be EBOOK or HARD COVER"
    ),
  discount: yup
    .number()
    .transform((val) => (isNaN(val) ? undefined : val))
    .integer()
    .test("validDiscount", "Discount range must be 1-100", (val) =>
      val ? /^([0-9]|[1-9][0-9]|100)$/.test(val.toString()) : true
    ),
  language: yup.string().required("Required"),
  isbn: yup.string(),
  authorId: yup.string().required("Required"),
  publisherId: yup.string().required("Required"),
  libraryType: yup.string().required("Required"),
  readerGroup: yup.string().required("Required"),
  categories: yup.array().of(yup.string()),
  cover: yup
    .mixed()
    .required("Required")
    .test("fileType", "File type not supported (only jpg/png)", (value) =>
      value[0] ? "image/jpeg image/png".includes(value[0].type) : true
    )
    .test("fileSize", "File is too large (max 2MB)", (value) =>
      value[0] ? value[0].size <= 2000000 : true
    ),
});
