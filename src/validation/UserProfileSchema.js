import * as Yup from "yup";

const UserProfileCreateSchema = Yup.object().shape({
  fname: Yup.string()
    .required("Name is required")
    .min(2, "Name must be longer than 2 characters"),
  lname: Yup.string()
    .required("Name is required")
    .min(2, "Name must be longer than 2 characters"),
  phonenumber: Yup.number().test(
    "phonenumber",
    "Must be exactly 10 digits",
    (val) => val.toString().length === 10
  ),
  email: Yup.string().email(),
});

export default UserProfileCreateSchema;
