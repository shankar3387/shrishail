import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthSer from '../../Server/server';
import { Formik } from 'formik';
import * as yup from 'yup';
import ErrorText from '../../../components/common/ErrorText';


const validationSchema = yup.object().shape({
  user_name: yup.string()

    .required("user name is required"),
  email: yup.string()
    .email()
    .required("Email is required")
    .test('duplicate-email-check','Duplicate email already exists',
     async (value) => { // Notice this, adding curly braces will require you to put a return statement
      return AuthSer.postEmailValidation({ email: value })
           .then(result => {
               console.log(result.error)
               if (result.error) {
                   return false
               } else {
                   return true
               }
           })
           .catch(err => console.log(err))
   }
    ),
  password: yup.string()
    .required("Password is required")
    .min(6, " Password length is 6"),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match').required("required"),
  phone: yup.string()
    .required("phone number is required")
    .min(10, "Must be exactly 10 digits")
    .max(10, "to long"),
  // otp: yup.string()
  //   .test('len', 'Invalid otp', otp => otp.length === 6),

})

export default class Register extends Component {
  onSubmit = async (userData) => {
    const { email, password, confirmPassword, userName, phone, otp } = userData
    console.log(userData, "userData")
    AuthSer.postRegistration(userData).then(result=>{
      console.log(result)
    })
  };

  render() {
    // const { errorMessage } = this.state;
    return (
      <div className="app-container" style={{ backgroundColor: '#cedaf3' }}>
        <div className="reg_form">
          <div className="row mt-5">
            <div className="col-sm-9 col-md-7 col-lg-10 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Community Signup</h5>
                  <Formik
                    initialValues={{ email: "", password: "", confirmPassword: "", user_name: "", phone: "", otp: "" }}
                    onSubmit={(userData) => {
                      this.onSubmit(userData)

                    }}
                    validationSchema={validationSchema}>
                    {props => {
                      const {
                        values,
                        touched,
                        errors,
                        handleChange,
                        handleSubmit,

                      } = props;
                      return (
                        <form className="form-signin">
                          <div className="form-group" />
                          <div className="form-group">
                            <input
                              name="user_name"
                              type="text"

                              className="form-control"
                              onChange={handleChange}
                              value={values.userName}
                              placeholder="Your Name"
                              autoFocus
                            />
                            {errors.user_name
                              && touched.user_name
                              && (
                                <ErrorText title={errors.user_name
                                } />
                              )}
                          </div>

                          <div className="form-group">
                            <input
                              name="email"
                              type="email"

                              className="form-control"
                              onChange={handleChange}
                              placeholder="Email"
                              value={values.email}

                            />
                            {errors.email && touched.email && (
                              <ErrorText title={errors.email} />
                            )}

                          </div>


                          <div className="form-group">
                            <input
                              name="password"
                              type="Password"

                              className="form-control"
                              onChange={handleChange}
                              placeholder="Password"

                              value={values.password}
                            />
                            {errors.password && touched.password && (
                              <ErrorText title={errors.password} />
                            )}
                          </div>

                          <div className="form-group">
                            <input
                              name="confirmPassword"
                              type="password"
                              className="form-control"
                              onChange={handleChange}
                              placeholder="Confirm Password"
                              value={values.confirmPassword} />
                            {errors.confirmPassword && touched.confirmPassword && (
                              <ErrorText title={errors.confirmPassword} />
                            )}
                          </div>

                          <div className="form-row form-group">
                            <div className="col">
                              <input

                                name="phone"
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Phone"
                                value={values.phone}
                              />
                              {errors.phone && touched.phone && (
                                <ErrorText title={errors.phone} />
                              )}
                            </div>
                            <div className="col">
                              <div className="row">
                                <div className="col-lg-9">
                                  <input

                                    name="otp"
                                    type="text"
                                    className="form-control"
                                    onChange={handleChange}
                                    placeholder="OTP"
                                    value={values.otp}
                                  />

                                </div>
                                {errors.otp && touched.otp && (
                                  <ErrorText title={errors.otp} />)}
                                <div className="col-lg-3 d-flex justify-content-center align-items-center">
                                  <i className="fa fa-refresh" aria-hidden="true" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={handleSubmit}
                            className="btn btn-lg btn-warning text-white btn-block text-uppercase"
                            type="submit"
                          >
                            Continue
                    </button>
                          <div className="mt-4">
                            <div className="float-right pr-2">
                              <Link>
                                <i
                                  className="fa fa-arrow-circle-right"
                                  aria-hidden="true"
                                  style={{ fontSize: 30, color: '#ffa500' }}
                                />
                              </Link>
                            </div>
                            <p className="mb-0 pt-1">Want to Login as a SuperNebr Seller?</p>
                          </div>
                        </form>)
                    }}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

