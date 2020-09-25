import * as Yup from "yup";

const UserProfileCreateSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  fname: Yup.string()
    .required("Name is required")
    .min(2, "Name must be longer than 2 characters"),
  lname: Yup.string()
    .required("Name is required")
    .min(2, "Name must be longer than 2 characters"),
  location: Yup.string().required(),
  phonenumber: Yup.number().test(
    "phonenumber",
    "Must be exactly 9 digits",
    (val) => val.toString().length === 9
  ),
  email: Yup.string().email(),
  // profilepicture: Yup.string().url(),
});

export default UserProfileCreateSchema;
