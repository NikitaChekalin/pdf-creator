import { object, string } from "yup";

export const textFormValidationSchema = object({
  text: string().trim().required("Це поле обов'язкове"),
});
