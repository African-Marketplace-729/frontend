import React, { useState } from "react";

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
          <option value="Animal Products">Animal Products</option>
          <option value="Beans">Beans</option>
          <option value="Cereals - Maize">Cereals - Maize</option>
          <option value="Cereals - Rice">Cereals - Rice</option>
          <option value="Cereals - Other">Cereals - Other</option>
          <option value="Fruits">Fruits</option>
          <option value="Peas">Peas</option>
          <option value="Roots & Tubers">Roots & Tubers</option>
          <option value="Seeds & Nuts">Seeds & Nuts</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Other">Other</option>
        </select>
      </label>
    </form>
  );
}
