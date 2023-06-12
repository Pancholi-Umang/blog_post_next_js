import * as Yup from "yup";

export const signupSchema = Yup.object({
  firstname: Yup.string().min(2).max(10).required("First Name Field is Require"),
  lastname: Yup.string().min(2).max(10).required("Last Name Field is Require"),
  email: Yup.string().email().required("Please Enter Valid Email"),
  address: Yup.string().min(20).max(100).required("Address Field is Require"),
  countrys: Yup.string().required("please Select The Country"),
  states: Yup.string().required("please Select The State"),
  zip: Yup.number().required("ZIP code is required"),
});
