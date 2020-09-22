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
          {SAUTI_PRODUCTS.map(item => {
            return <option value={item.category}>{item.category}</option>;
          })}
        </select>
      </label>
      <label htmlFor="subcategory">Subcategory{}</label>
    </form>
  );
}

const Subcategory = ({ condition, values }) => {
  if (condition === "Animal Products") {
    return (
      <select name="subcategory" value={values.subcategory}>
        <option value="Animal Products">Animal Products</option>
        <option value="Livestock">Livestock</option>
        <option value="Poultry">Poultry</option>
      </select>
    );
  } else if (condition === "Beans") {
    return (
      <select name="subcategory" value={values.subcategory}>
        <option value="Beans">Beans</option>
      </select>
    );
  } else if (condition === "Cereals - Maize") {
    return (
      <select name="subcategory" value={values.subcategory}>
        <option value="Maize">Maize</option>
      </select>
    );
  } else if (condition === "Cereals - Rice") {
    return (
      <select name="subcategory" value={values.subcategory}>
        <option value="Rice">Rice</option>
      </select>
    );
  } else if (condition === "Cereals - Other") {
    return (
      <select name="subcategory" value={values.subcategory}>
        <option value="Barley">Barley</option>
        <option value="Millet">Millet</option>
        <option value="Sorghum">Sorghum</option>
        <option value="Wheat">Wheat</option>
      </select>
    );
  } else if (condition === "Fruits") {
    return (
      <select name="subcategory" value={values.subcategory}>
        <option value=""></option>
      </select>
    );
  }
};
