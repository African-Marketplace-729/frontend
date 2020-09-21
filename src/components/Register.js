import React, { useState, useEffect } from "react";
import axios from "axios";

const initialValues = {
  username: "",
  password: "",
};

export default function Register() {
  const [values, setValues] = useState(initialValues);
  const [users, setUsers] = useState([]);

  const onChange = e => {
    const { name, value } = e.target;
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
  };

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
      <button>Register</button>
    </form>
  );
}
