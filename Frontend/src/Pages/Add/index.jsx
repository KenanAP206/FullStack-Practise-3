import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './index.css';
import Swal from 'sweetalert2'
function Index() {
  const initialValues = { name: '', price: '', image: '', category: '' };

  const validationSchema = Yup.object({
    name: Yup.string().required('Product name is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
    image: Yup.string().url('Must be a valid URL').required('Image URL is required'),
    category: Yup.string().required('Category is required'),
  });

  const handleSubmit = (values) => {
    axios.post('http://localhost:3000/products', values)
      .then(response => {
        console.log("Product added successfully:", response.data);
      })
      .catch(error => {
        console.error("Error adding product:", error);
      });

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "The Product Added",
        showConfirmButton: false,
        timer: 1500
      });
  };

  return (
    <section id='addform'>    <div className="form-container">
    <h2>Add New Product</h2>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Product Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <Field name="price" type="number" />
          <ErrorMessage name="price" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="image">Image URL</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <Field name="category" type="text" />
          <ErrorMessage name="category" component="div" className="error" />
        </div>
        <button type="submit">Add</button>
      </Form>
    </Formik>
  </div></section>
  );
}

export default Index;
