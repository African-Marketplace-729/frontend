import React, { useState } from "react";
import {
  SAUTI_PRODUCT_CATEGORIES,
  SAUTI_PRODUCT_SUBCATEGORIES,
  SAUTI_PRODUCTS,
} from "../consts";

const initialValues = {
  name: "",
  category: "",
  subcategory: "",
  price: null,
};

export default function AddListing() {
  const [values, setValues] = useState(initialValues);

  return (
    <form>
      <h2>Add a Listing</h2>
      <label htmlFor="name">
        Name
        <input type="text" name="name" />
      </label>
      <label htmlFor="category">
        Category
        <select name="category" value={values.category}>
          <option value="">--Select a Category--</option>
          {SAUTI_PRODUCT_CATEGORIES.map(item => {
            return <option value={item.category}>{item.category}</option>;
          })}
        </select>
      </label>
      <label htmlFor="subcategory">
        Subcategory
        <option value="">--Select a Subcategory--</option>
        {SAUTI_PRODUCT_SUBCATEGORIES.map(item => {
          if (item.category === values.category)
            return <option value={item.subcategory}>{item.subcategory}</option>;
          return null;
        })}
      </label>
      <label htmlFor="product">
        <select name="product">
          <option value="">--Select a Product</option>
          {SAUTI_PRODUCTS.map(item => {
            if (item.subcategory === values.subcategory)
              return <option value={item.product}>{item.product}</option>;
            return null;
          })}
        </select>
      </label>
    </form>
  );
}
