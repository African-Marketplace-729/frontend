import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import schema from "../validation/registerSchema";

const initialValues = {
  username: "",
  password: "",
  passwordConfirm: "",
};

const initialErrors = {
  username: "",
  password: "",
  passwordConfirm: "",
};

export default function Register() {
  const [values, setValues] = useState(initialValues);
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(true);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch(err => {
        console.log("Catch:", err);
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  };

  const onChange = e => {
    const { name, value } = e.target;
    validate(name, value);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    const newUser = {
      username: values.username.trim(),
      password: values.password.trim(),
    };

    axios
      .post("https://reqres.in/api/users", newUser)
      .then(res => {
        setValues(initialValues);
        setErrors(initialErrors);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    schema.isValid(values).then(valid => {
      setDisabled(!valid);
    });
  }, [values]);

  useEffect(() => {
    console.log("Errors updated:", errors);
  }, [errors]);

  return (
    <form className="register-container" onSubmit={onSubmit}>
      <h2>Sign Up</h2>
      <label htmlFor="username">
        Username
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={onChange}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={onChange}
        />
      </label>
      <label htmlFor="passwordConfirm">
        Confirm Password
        <input
          type="password"
          name="passwordConfirm"
          value={values.passwordConfirm}
          onChange={onChange}
        />
      </label>
      <article>
        <button disabled={disabled}>Register</button>
        <p>{errors.username}</p>
        <p>{errors.password}</p>
        <p>{errors.passwordConfirm}</p>
      </article>
    </form>
  );
}
