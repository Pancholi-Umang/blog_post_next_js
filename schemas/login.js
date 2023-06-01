import * as Yup from "yup";

export const signupSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Valid Email"),
  password: Yup.string().min(6).required("please Enter Valid Password")
});