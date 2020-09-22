
import React, { useState, useEffect, useRef } from "react";

import axiosWithAuth from "../utils/axiosWithAuth";

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

    }
    
    axiosWithAuth().post(
      '/login',
      `grant_type=password&username=${newUser.username}&password=${newUser.password}`,
      {headers: {
        // btoa is converting our client id/client secret into base64
            Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
            'Content-Type': 'application/x-www-form-urlencoded'}})
        .then(res => {
          localStorage.setItem('token', res.data.payload)})
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
