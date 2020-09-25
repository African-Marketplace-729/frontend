import React, { useState, useEffect } from "react";
import { fetchPricing } from "../redux/actions/fetchPricing";
import { putListing } from "../redux/actions/putListing";
import { deleteListing} from "../redux/actions/deleteListing";
import { fetchListings} from '../redux/actions/fetchListings';
import { connect } from "react-redux";
import StyledAddEdit from './StyledComponents/StyledAddEdit';

import {
  SAUTI_PRODUCT_CATEGORIES,
  SAUTI_PRODUCT_SUBCATEGORIES,
  SAUTI_PRODUCTS,
} from "../consts";
import * as yup from "yup";
import schema from "../validation/addListingSchema";

const initialErrors = {
  name: "",
  description: "",
  category: "",
  subcategory: "",
  quantity: "",
  price: "",
};

function EditListing(props) {
  const [values, setValues] = useState(props.listing);
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
    props.putListing(values);
    props.fetchUser(localStorage.getItem('username'));
    props.setBeingEdited('');
  };

  const onClick = (e) => {
    e.preventDefault();
    props.deleteListing(props.listing)
  }
  useEffect(() => {
    let {category, subcategory, product, ...rest} = values;
    schema.isValid(values).then((valid) => {
      setDisabled(!valid);
    });
  }, [values]);



  useEffect(() => {
    props.fetchPricing(values.product);
  }, [values.product]);

  return (
  <>
    <StyledAddEdit onSubmit={onSubmit}>
      <h2>Edit Listing</h2>
      <label htmlFor="listingname">
        Listing Name
        <input 
          type="text" 
          name="listingname" 
          onChange={onChange}
          value={values.listingname} />
      </label>
      <label htmlFor="description">
        Description
        <textarea
          name="description"
          value={values.description}
          onChange={onChange}
        />
      </label>
      <label htmlFor="category">
        Category
        <select name="category" value={values.category} onChange={onChange}>
          <option value="">--Select a Category--</option>
          {SAUTI_PRODUCT_CATEGORIES.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </label>
      <label htmlFor="subcategory">
        Subcategory
        <select
          name="subcategory"
          value={values.subcategory}
          onChange={onChange}
        >
          <option value="">--Select a Subcategory--</option>
          {SAUTI_PRODUCT_SUBCATEGORIES.map((item) => {
            if (item.category === values.category)
              return (
                <option value={item.subcategory}>{item.subcategory}</option>
              );
            return null;
          })}
        </select>
      </label>
      <label htmlFor="product">
        Product
        <select name="product" value={values.product} onChange={onChange}>
          <option value="">--Select a Product</option>
          {SAUTI_PRODUCTS.map((item) => {
            if (
              item.category === values.category &&
              item.subcategory === values.subcategory
            )
              return <option value={item.product}>{item.product}</option>;
            return null;
          })}
        </select>
      </label>
      <label htmlFor="quantity">
        Quantity
        <input
          type="number"
          value={values.quantity}
          onChange={onChange}
          name="quantity"
        />
      </label>
      <div>
        Average Price:
        {props.isFetching && "Loading..."}
        {props.error && values.product && (
          <div style={{ color: "red" }}>{props.error}</div>
        )}
        {props.data.records &&
          props.data.records.reduce((acc, cur) => {
            return acc + cur.retail;
          }, 0) /
            props.data.records.length +
            " " +
            props.data.records[0].currency}
      </div>
      <label htmlFor="price">
        Price
        <input
          type="number"
          value={values.price}
          name="price"
          onChange={onChange}
        />
      </label>
      <button disabled={disabled}>Edit Listing</button>
      <p>{errors.name}</p>
      <p>{errors.description}</p>
      <p>{errors.category}</p>
      <p>{errors.subcategory}</p>
      <p>{errors.product}</p>
      <p>{errors.quantity}</p>
      <p>{errors.price}</p>
    <button onClick={onClick}>Delete Listing</button>
    </StyledAddEdit>
  </>
  );
}

function mapStateToProps(state) {
  return {
    data: state.pricingReducer.data,
    isFetching: state.pricingReducer.isFetching,
    error: state.pricingReducer.error,
    postData: state.listingsReducer.postData,
    isPosting: state.listingsReducer.isPosting,
    postError: state.listingsReducer.postError,
  };
}

export default connect(mapStateToProps, { fetchPricing, fetchListings, putListing, deleteListing })(
  EditListing
);
