import * as Yup from "yup";

const UserProfileCreateSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  firstName: Yup.string()
    .required("Name is required")
    .min(2, "Name must be longer than 2 characters"),
  lastName: Yup.string()
    .required("Name is required")
    .min(2, "Name must be longer than 2 characters"),
  locationCode: Yup.number().integer().required(
    "Postal code required to be 4 digits",
    (val) => val.length === 4
  ),
  profilepicture: Yup.string().url(),
});

export default UserProfileCreateSchema;
