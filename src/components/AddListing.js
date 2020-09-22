import React, { useState } from "react";

const initialValues = {
  listingName: "",
  listingType: "",
  merchantId: "",
  price: null,
  status: "",
  createdBy: "",
  createdDate: "",
};

export default function AddListing() {
  const [values, setValues] = useState(initialValues);
  return (
    <form>
      <h2>Add a Listing</h2>
      <label htmlFor="listingName">
        Listing Name
        <input type="text" name="listingName" />
      </label>
    </form>
  );
}
