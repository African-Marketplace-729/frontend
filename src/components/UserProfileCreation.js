import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import * as yup from "yup";
import schema from "../validation/UserProfileSchema";

const initialProfileValues = {
  username: "",
  locationCode: "",
  firstName: "",
  lastName: "",
};
const initialErrors = {
  username: "",
  locationCode: "",
  firstName: "",
  lastName: "",
};
export default function UserProfileCreation(props) {
  const [values, setValues] = useState(initialProfileValues);
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(true);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    validate(name, value);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const CompleteProfile = {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      locationCode: values.locationCode.trim(),
      username: values.username.trim(),
      profilepicture: values.profilepicture.trim(),
    };

    axiosWithAuth()
      .post(
        "/login",
        `grant_type=password&username=${CompleteProfile.username}& =${CompleteProfile.password}`,
        {
          headers: {
            // btoa is converting our client id/client secret into base64
            Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    schema.isValid(values).then((valid) => {
      setDisabled(!valid);
    });
  }, [values]);
  return (
    <div className="profile-container">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          id="username"
          placeholder
          value={values.username}
          onChange={onChange}
        />
        <div>
          <hr />

          <label htmlfor="firstName">First name: </label>
          <input
            type="name"
            name="firstName"
            value={values.firstName}
            onChange={onChange}
          />
          <label htmlfor="lastName">Last name: </label>
          <input
            type="name"
            name="lastName"
            value={values.lastName}
            onChange={onChange}
          />
          <hr />

          <label htmlfor="Profile picture">
            Please Specify a profile picture:{" "}
          </label>
          <input
            type="url"
            name="profilepicture"
            alt="profile"
            value={values.profilepicture}
            onChange={onChange}
          />
          <hr />
          <label htmlFor="country">Country: </label>
          <select onChange={onChange} id="country" name="country">
            <option defaultValue value="kenya">
              Kenya
            </option>
            <option value="rwanda">Rwanda</option>
            <option value="uganda">Uganda</option>
          </select>
          <label htmlfor="Location">Location code: </label>
          <input
            type="number"
            name="locationCode"
            value={values.locationCode}
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
}
