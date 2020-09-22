import React, { useState, useEffect, useRef } from "react";
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
  const confirmRef = useRef();

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
    if (confirmRef.current.value === values.password) {
      setErrors({ ...errors, passwordConfirm: "" });
    }
  }, [disabled]); // eslint-disable-line

  useEffect(() => {
    schema
      .isValid({
        ...values,
        passwordConfirm: confirmRef.current.value,
      })
      .then(valid => {
        setDisabled(!valid);
      });
  }, [values]);

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
          ref={confirmRef}
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
