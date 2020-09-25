import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import schema from "../validation/loginSchema";
import { connect } from "react-redux";
import { postSignin } from "../redux/actions/postSignin";
import { Link } from "react-router-dom";
import StyledSignIn from "./StyledComponents/StyledSignIn";

const initialValues = {
  username: "",
  password: "",
};

const initialErrors = {
  username: "",
  password: "",
};

function Signin(props) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(true);

  const history = useHistory();

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

    const creds = {
      username: values.username.trim(),
      password: values.password.trim(),
    };

    props.postSignin(creds);
    setValues(initialValues);
    history.push("/product");
  };

  useEffect(() => {
    schema.isValid(values).then((valid) => {
      setDisabled(!valid);
    });
  }, [values]);

  return (
    <>
      <StyledSignIn onSubmit={onSubmit}>
        <h2>Log In</h2>
        <article className="form-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={onChange}
          />
        </article>
        <article className="form-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />
        </article>
        <article className="btn-container">
          <button disabled={disabled}>Log In</button>
          <p>{errors.username}</p>
          <p>{errors.password}</p>
        </article>
        <Link to="/register">Create an account.</Link>
      </StyledSignIn>
    </>
  );
}

function mapStateToProps(state) {
  return {
    data: state.signinReducer.data,
  };
}
export default connect(mapStateToProps, { postSignin })(Signin);
