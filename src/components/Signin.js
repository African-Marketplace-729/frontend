import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialValues = {
  username: "",
  password: "",
};

export default function Signin() {
  const [values, setValues] = useState(initialValues);

  const onChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();

    const creds = {
      username: values.username.trim(),
      password: values.password.trim(),
    }
    
    axiosWithAuth().post(
      '/login',
      `grant_type=password&username=${creds.username}&password=${creds.password}`,
      {headers: {
        // btoa is converting our client id/client secret into base64
            Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
            'Content-Type': 'application/x-www-form-urlencoded'}})
        .then(res => {
          localStorage.setItem('token', res.data.payload)})
        .catch(err => console.log(err));
  };


  return (
    <form className="signin-container" onSubmit={onSubmit}>
      <h2>Log In</h2>
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
      <button>Log In</button>
    </form>
  );
}
