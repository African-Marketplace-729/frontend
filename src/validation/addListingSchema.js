import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("Listing Name required"),
  description: yup.string().required("Description required"),
  category: yup.string().required("Category required"),
  subcategory: yup.string().required("Subcategory required"),
  product: yup.string().required("Product required"),
  quantity: yup.number().required("Quantity requried"),
  price: yup.number().required("Price required"),
});
