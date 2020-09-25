import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { putUser } from "../redux/actions/putProfile";
import * as yup from "yup";
import schema from "../validation/UserProfileSchema";
import StyledUserProfile from "./StyledComponents/StyledUserprofile";
import {useHistory} from 'react-router-dom';

const initialProfileValues = {
  username: "",
  fname: "",
  lname: "",
  phonenumber: "",
  email: "",
  location: "",
};
const initialErrors = {
  username: "",
  fname: "",
  lname: "",
  phonenumber: "",
  email: "",
  location: "",
};
function UserProfileCreation(props) {
  const [values, setValues] = useState(initialProfileValues);
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

  const onSubmit = async (e) => {
    e.preventDefault();
    let { location, role, password, ...rest } = props.userData;
    const CompleteProfile = {
      ...rest,
      // username: localStorage.getItem('username'),
      fname: values.fname.trim(),
      lname: values.lname.trim(),
      // location: {city : {country: values.location.trim()}},
      phonenumber: values.phonenumber.trim(),
      email: values.email.trim(),
      // location: values.location.trim(),
    };
    console.log(CompleteProfile);
    await props.putUser(CompleteProfile);
    history.push('/profile');
  };

  useEffect(() => {
    schema.isValid(values).then((valid) => {
      console.log(valid);
      setDisabled(!valid);
    });
  }, [values]);

  return (
    <StyledUserProfile className="profile-container">
      <form onSubmit={onSubmit}>
        <h2>Business Profile Setup</h2>
        <div>
          <div id="nameinput" className="form-field">
            <>
              <label htmlfor="firstName">First name: </label>
              <input
                type="name"
                name="fname"
                value={values.fname}
                onChange={onChange}
              />
            </>
            <>
              <label htmlfor="lastName">Last name: </label>
              <input
                type="name"
                name="lname"
                value={values.lname}
                onChange={onChange}
              />
            </>
          </div>
          <div id="contactinfo" className="form-field">
            <>
              <label htmlfor="email">Email: </label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={onChange}
              />{" "}
            </>
            <>
              <label htmlfor="phonenumber">Phone Number: </label>
              <input
                type="number"
                name="phonenumber"
                value={values.phonenumber}
                onChange={onChange}
              />
            </>
          </div>
          <hr />
    
          {/* <label id="location" htmlfor="location">
            Country:{" "}
          </label>
          <input
            type="text"
            name="location"
            value={values.location}
            onChange={onChange}
          />  */}
        </div>
        <hr />
        <div className="btn-container">
          <button disabled={disabled}>Submit</button>
          <div classname="errorsdisplay">
            <p>{errors.fname}</p>
            <p>{errors.lname}</p>
            <p>{errors.phonenumber}</p>
            <p>{errors.email}</p>
            <p>{errors.location}</p>
          </div>
        </div>
      </form>
    </StyledUserProfile>
  );
}
function mapStateToProps(state) {
  return {
    data: state.userReducer.putData,
    isPuting: state.userReducer.isPuting,
    error: state.userReducer.putError,
    userData: state.userReducer.data,
  };
}
export default connect(mapStateToProps, { putUser })(UserProfileCreation);
