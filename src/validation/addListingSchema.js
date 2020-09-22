import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  category: yup.string().required(),
  quantity: yup.number().required(),
  price: yup.number().required(),
});
