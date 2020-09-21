import React, { useState, useEffect } from "react";

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
