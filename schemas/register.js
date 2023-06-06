import * as Yup from "yup";

export const signupSchema = Yup.object({
  name: Yup.string().min(2).max(10).required("Name Field is Require"),
  email: Yup.string().email().required("Please Enter Valid Email"),
  password: Yup.string().min(6).required("please Enter Valid Password"),
  // cpassword: Yup.string()
  //   .required("please Enter confirm Password")
  //   .oneOf([Yup.ref("password"), null], "password is not match"),
});