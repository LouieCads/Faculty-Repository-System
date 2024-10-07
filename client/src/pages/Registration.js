import React, { useState, useEffect } from 'react'
import * as Yup from 'yup';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import '../css/Registration.css';
import umakLogo from '../images/umakLogo.png';

function Registration() {
  const { credentials, setCredentials } = useState([]); 

  const initialValues = {
    id: "",
    username: "",
    email: "",
    password: "",
  }

  const validateSchema = Yup.object().shape({
    id: Yup.string().required('! ID is required').length(9, '! Must be 9 characters'),
    username: Yup.string().required('! Username is required')
      .matches(/^[a-zA-Z]/, '! Username must start with a letter'), // Starts with letter
    email: Yup.string().required('Email is required')
    .email('Invalid email format')
    .matches(/^[A-Za-z0-9._%+-]+@umak\.edu\.ph$/, 'Email must be a valid school email'),
    password: Yup.string().required('! Password is required')
      .min(8, '! Password must be at least 8 characters long')
      .matches(/[a-z]/, '! Password must contain at least one lowercase letter') // Lowercase
      .matches(/[A-Z]/, '! Password must contain at least one uppercase letter') // Uppercase
      .matches(/\d/, '! Password must contain at least one number') // Number
      .matches(/[!@#$%^&*(),.?":{}|<>]/, '! Password must contain at least one special character') // Special character
  });

  const onSubmit = (data) => {
    try {
      axios.post("http://localhost:3308/auth", data).then((response) => {
        console.log('Success!');
      });
    } catch(error) {
      console.error("Error Registering: ", error);
    }
  }

  return (
    <div className='registration-container'>
      <div className='registration-modal'>
        <div className='logo'>
          <div className='image'><img src={umakLogo}/></div>
          <div className='text'><p>Create an Account</p></div>
        </div>
        <div className='registration'>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validateSchema}>
            <Form className='registration-form'>
              <div className='field'>
                <label>ID</label>
                <ErrorMessage name='id' component='span' />
                <Field id='input-id' name='id' className='id ' placeholder='Enter id'/>
              </div>
              <div className='field'>
                <label>Username</label>
                <ErrorMessage name='username' component='span' />
                <Field id='input-username' name='username'className='username' placeholder='Enter username'/>
              </div>
              <div className='field'>
                <label>Email</label>
                <ErrorMessage name='email' component='span' />
                <Field type='email' id='input-email' name='email'  className='email' placeholder='Enter email'/>
              </div>
              <div className='field'>
                <label>Password</label>
                <ErrorMessage name='password' component='span' />
                <Field type='password'id='input-password' name='password'  className='password' placeholder='Enter password'/>
              </div>
              <div className='registerBtnContainer'>
                <button type='submit' className='registerBtn'>Register</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Registration
