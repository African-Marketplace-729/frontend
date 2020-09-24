import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import * as yup from "yup";
import schema from "../validation/UserProfileSchema";

const initialProfileValues = {
  username: "",
  fname: "",
  lname: "",
  phonenumber: "",
  email: "",
  location: "",
  listings: [],
};
const initialErrors = {
  username: "",
  fname: "",
  lname: "",
  phonenumber: "",
  email: "",
  location: "",
  listings: "",
};
export default function UserProfileCreation(props) {
  const [values, setValues] = useState(initialProfileValues);
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

    // const CompleteProfile = {
    //   fname: values.firstName.trim(),
    //   lname: values.lastName.trim(),
    //   location: values.locationCode.trim(),
    //   username: values.username.trim(),
    //   phonenumber: values.phonenumber.trim(),
    //   email: values.email.trim(),
    //   listings : values.listings
    //   //profilepicture: values.profilepicture.trim(),
    // };
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
            name="fname"
            value={values.fname}
            onChange={onChange}
          />
          <label htmlfor="lastName">Last name: </label>
          <input
            type="name"
            name="lname"
            value={values.lname}
            onChange={onChange}
          />
          <hr />

          {/* <label htmlfor="Profile picture">
            Please Specify a profile picture:{" "}
          </label>
          <input
            type="url"
            name="profilepicture"
            alt="profile"
            value={values.profilepicture}
            onChange={onChange}
          /> */}
          <hr />
          {/* <label htmlFor="country">Country: </label>
          <select onChange={onChange} id="country" name="country">
            <option defaultValue value="kenya">
              Kenya
            </option>
            <option value="rwanda">Rwanda</option>
            <option value="uganda">Uganda</option>
          </select> */}
          <label htmlfor="location">Location: </label>
          <input
            type="number"
            name="location"
            value={values.location}
            onChange={onChange}
          />
        </div>
        <button disabled={disabled}>Submit</button>
      </form>
    </div>
  );
}
