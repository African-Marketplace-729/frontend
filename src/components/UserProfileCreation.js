import React, { useState } from "react";
import {connect} from 'react-redux';
import {putUser} from '../redux/actions/putProfile';
import * as yup from "yup";
import schema from "../validation/UserProfileSchema";

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

  // const validate = (name, value) => {
  //   yup
  //     .reach(schema, name)
  //     .validate(value)
  //     .then((valid) => {
  //       setErrors({
  //         ...errors,
  //         [name]: "",
  //       });
  //     })
  //     .catch((err) => {
  //       setErrors({
  //         ...errors,
  //         [name]: err.errors[0],
  //       });
  //     });
  // };

  const onChange = (e) => {
    const { name, value } = e.target;
    // validate(name, value);

    setValues({
      ...values,
      [name]: value,
    });
  
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let {location, role, password, ...rest} = props.userData;
    const CompleteProfile = {
      ...rest,
      // username: localStorage.getItem('username'),
      fname: values.fname.trim(),
      lname: values.lname.trim(),
      // location: {city : {country: values.location.trim()}},
      phonenumber: values.phonenumber.trim(),
      email: values.email.trim(),
    };
    console.log(CompleteProfile);
    props.putUser(CompleteProfile);
  };

  // useEffect(() => {
  //   schema.isValid(values).then((valid) => {
  //     setDisabled(!valid);
  //   });
  // }, [values]);

  return (
    <div className="profile-container">
      <form onSubmit={onSubmit}>
        <div>
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

         <label htmlfor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
          />
          <label htmlfor="phonenumber">Phone Number: </label>
          <input
            type="text"
            name="phonenumber"
            value={values.phonenumber}
            onChange={onChange}
          />

          <hr />
          {/* <label htmlfor="location">Country: </label>
          <input
            type="text"
            name="location"
            value={values.location}
            onChange={onChange}
          /> */}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
function mapStateToProps(state){
  return {
    data: state.userReducer.putData,
    isPuting: state.userReducer.isPuting,
    error: state.userReducer.putError,
    userData: state.userReducer.data,
  }
}
export default connect((mapStateToProps),{putUser})(UserProfileCreation)