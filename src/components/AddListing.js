import React, { useState, useEffect } from "react";
import { fetchPricing } from "../redux/actions/fetchPricing";
import { postListing } from "../redux/actions/postListing";
import { connect } from "react-redux";
import StyledAddEdit from "./StyledComponents/StyledAddEdit";

import {
  SAUTI_PRODUCT_CATEGORIES,
  SAUTI_PRODUCT_SUBCATEGORIES,
  SAUTI_PRODUCTS,
} from "../consts";
import * as yup from "yup";
import schema from "../validation/addListingSchema";

const initialValues = {
  name: "",
  description: "",
  category: "",
  subcategory: "",
  quantity: 0,
  price: 0,
};

const initialErrors = {
  name: "",
  description: "",
  category: "",
  subcategory: "",
  quantity: "",
  price: "",
};

function AddListing(props) {
  const [values, setValues] = useState(initialValues);
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
    let {category, subcategory, product, ...sentValues} = values
    sentValues = {...sentValues, imageurl: ''}
    props.postListing(sentValues);
    setValues(initialValues);
  };

  useEffect(() => {
    schema.isValid(values).then(valid => {
      setDisabled(!valid);
    });
  }, [values]);

  useEffect(() => {
    props.fetchPricing(values.product);
  }, [values.product]);

  return (
    <StyledAddEdit onSubmit={onSubmit}>
      <h2>Add a Listing</h2>

      <article className="input-container">
        <label htmlFor="listingname">
          Listing Name
          <input type="text" name="listingname" onChange={onChange} />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            name="description"
            value={values.description}
            onChange={onChange}
          />
        </label>
      </article>

      <article className="input-container">
        <label htmlFor="category">Category</label>
        <select name="category" value={values.category} onChange={onChange}>
          <option value="">--Select a Category--</option>
          {SAUTI_PRODUCT_CATEGORIES.map(item => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </article>

      <article className="input-container">
        <label htmlFor="subcategory">Subcategory</label>
        <select
          name="subcategory"
          value={values.subcategory}
          onChange={onChange}
        >
          <option value="">--Select a Subcategory--</option>
          {SAUTI_PRODUCT_SUBCATEGORIES.map(item => {
            if (item.category === values.category)
              return (
                <option value={item.subcategory}>{item.subcategory}</option>
              );
            return null;
          })}
        </select>
      </article>

      <article className="input-container">
        <label htmlFor="product">Product</label>
        <select name="product" value={values.product} onChange={onChange}>
          <option value="">--Select a Product--</option>
          {SAUTI_PRODUCTS.map(item => {
            if (
              item.category === values.category &&
              item.subcategory === values.subcategory
            )
              return <option value={item.product}>{item.product}</option>;
            return null;
          })}
        </select>
      </article>

      <article className="input-container">
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          value={values.quantity}
          onChange={onChange}
          name="quantity"
        />
      </article>

      <div>
        Average Price:
        {props.isFetching && "Loading..."}
        {props.error && values.product && (
          <div style={{ color: "red" }}>{props.error}</div>
        )}
        {props.data.records &&
          (
            props.data.records.reduce((acc, cur) => {
              return acc + cur.retail;
            }, 0) / props.data.records.length
          ).toFixed(2) +
            " " +
            props.data.records[0].currency +
            " per " +
            props.data.records[0].unit}
      </div>

      <article className="input-container">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          values={values.number}
          name="price"
          onChange={onChange}
        />
      </article>
      <article className="btn-container">
        <button disabled={disabled}>Add</button>
        {errors.name ? <p>{errors.name}</p> : null}
        {errors.description ? <p>{errors.description}</p> : null}
        {errors.category ? <p>{errors.category}</p> : null}
        {errors.subcategory ? <p>{errors.subcategory}</p> : null}
        {errors.product ? <p>{errors.product}</p> : null}
        {errors.quantity ? <p>{errors.quantity}</p> : null}
        {errors.price ? <p>{errors.price}</p> : null}
      </article>
    </StyledAddEdit>
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

export default connect(mapStateToProps, { fetchPricing, postListing })(
  AddListing
);
