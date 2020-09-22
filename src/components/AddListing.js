import React, { useState } from "react";
import {
  SAUTI_PRODUCT_CATEGORIES,
  SAUTI_PRODUCT_SUBCATEGORIES,
  SAUTI_PRODUCTS,
} from "../consts";

const initialValues = {
  name: "",
  description: "",
  category: "",
  subcategory: "",
  quantity: null,
  price: null,
};

export default function AddListing() {
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
    <form onSubmit={onSubmit}>
      <h2>Add a Listing</h2>
      <label htmlFor="name">
        Name
        <input type="text" name="name" onChange={onChange} />
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
          {SAUTI_PRODUCT_CATEGORIES.map(item => {
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
          {SAUTI_PRODUCT_SUBCATEGORIES.map(item => {
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
          {SAUTI_PRODUCTS.map(item => {
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
      <label htmlFor="price">
        Price
        <input
          type="number"
          values={values.number}
          name="price"
          onChange={onChange}
        />
      </label>
      <button>Add</button>
    </form>
  );
}
