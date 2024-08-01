export default function loginValidate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.email = "Required";
  } else if (values.password.includes(" ")) {
    errors.password = "invalid pass";
  }
  
  return errors;
}
