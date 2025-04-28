import * as yup from "yup";

export const validateLoginData = (form) => {
  const error = {};
  for (let key in form) {
    if (form[key] === "") {
      error[key] = "Required field";
    }
  }
  if (form.password === form.cpassword) {
    error.password = "invalid password match";
    error.cpassword = "invalid password match";
  }
  return error;
};
/***
 * if(form.email ===''){
 * error.email="required field"
 * }
 */

export const loginValidateSchema = yup.object().shape({
  email: yup.string().required().email("Email not valid"),
  password: yup.string().required().min(4).max(10),
  cpassword: yup
    .string()
    .required()
    .min(4)
    .max(10)

    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
