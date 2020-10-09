import React, { Component,useState } from 'react';
import { Link } from 'react-router-dom';
import AuthSer from '../../Server/server';
import { Formik } from 'formik';
import * as yup from 'yup';
import ErrorText from '../../../components/common/ErrorText';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Community from '../../CommunityModal/Community';
const generateUniqueId = require('generate-unique-id');

const validationSchema = yup.object().shape({
  user_name: yup.string()

    .required("user name is required"),
  email: yup.string()
    .email()
    .required("Email is required"),
  password: yup.string()
    .required("Password is required")
    .min(6, " Password length is 6"),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match').required("required"),
  phone: yup.string()
    .required("phone number is required")
    .min(10,'phone number must 10'),
  otp: yup.string()
    .required("otp required")
    // .test('otp', "invalid otp")
})




export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp:''
    }
  }
  
  onSubmit = async (userData) => {
    const { email, password, confirmPassword, userName, phone, otp } = userData
    console.log(userData, "userData")
    console.log(this.props)
    // this.props.handleReset()
    AuthSer.postRegistration(userData).then(result => {
      console.log(result.data)
      toast.success('successfully registration')
      // this.props.handleReset()

    })
  };
  handleEmailFieldBlur = (props) => {
    const {values,setErrors, errors} = props
    AuthSer.postEmailValidation({ email: values.email })
          .then(result => {
            console.log(result.data.error)
            if (result.data.error) {
              setErrors({...errors,email:'Email already exists'})
            }else {

            }
          })
          .catch(err => console.log(err))
    console.log(props)
    // console.log(e.target.value,'onblur')
    return false
    // do something
    // saveUserForm(this.props.values)    
  }
  handlePhoneBlur = (props) => {
    const {values,setErrors} = props
    this.setState({
      otp:123
    })
  }
  handleOtpBlur = (props) =>{
    console.log(this.state.otp)
    const {values,setErrors, errors,setFieldValue} = props
    if(values.otp!==this.state.otp){
      setErrors({...errors,otp:'Opt not valid'})
    }else {
      setFieldValue('otp',2222)
    }
  }
  logChange = (e) =>{
    console.log(e)
  }
  getOtp(value){
    var reference_number = generateUniqueId({
      length: 4,
      useLetters: false
  })
    // AuthSer.getOtp({phone:value,message:`otp number: ${reference_number}`})
    // .then(result=>this.setState({otp:reference_number}))
  }
  totest = () => {
    alert('test')
    toast.success('test')
  }
  render() {
    // const { errorMessage } = this.state;
    // const { optvalue,setOtp} = useState();
    return (
      <div className="app-container" style={{ backgroundColor: '#cedaf3' }}>
        {/* <ToastContainer /> */}
        <div className="reg_form">
          <div className="row mt-5">
            <div className="col-sm-9 col-md-7 col-lg-10 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Community Signup</h5>
                  <Formik
                    enableReinitialize = {true}
                    initialValues={{ email: "", password: "", confirmPassword: "", user_name: "", phone: "", otp: "" }}
                    onSubmit={(userData) => {
                      
                      // this.onSubmit(userData)

                    }}
                    validationSchema={validationSchema}>
                      {props => {
                      const {
                        values,
                        touched,
                        errors,
                        handleBlur,
                        handleReset,
                        handleChange,
                        handleSubmit,
                        setErrors,
                        setFieldValue,

                      } = props;
                      return (
                        <form onSubmit={handleSubmit} className="form-signin">
                          <div className="form-group" />
                          <div className="form-group">
                            <Community logChange={this.logChange} name="community" type='text' />
                            {/* {errors.user_name
                              && touched.user_name
                              && (
                                <ErrorText title={errors.user_name
                                } />
                              )} */}
                          </div>
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
                              onBlur={()=>{
                                this.handleEmailFieldBlur(props)
                              }}
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
                                onBlur={()=>{
                                this.handlePhoneBlur(props)
                              }}
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
                                    // onChange={handleChange}
                                    onBlur={()=>{
                                      this.handleOtpBlur(props)
                                    }}
                                    placeholder="OTP"
                                    value={values.otp}
                                  />

                                </div>
                                <div className="col-lg-3 d-flex justify-content-center align-items-center">
                                  <i className="fa fa-refresh" aria-hidden="true" />
                                </div>
                              </div>
                              {errors.otp && touched.otp && (
                                <ErrorText title={errors.otp} />)}
                            </div>
                          </div>
                          <button
                            className="btn btn-lg btn-warning text-white btn-block text-uppercase"
                            type="submit"
                          >
                            Continue
                       </button>
                          {/* <button type='button' onClick={this.totest} >Test</button> */}
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
                          {/* <img alt='logo' style={{ width: 100 }} src={require()} /> */}
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

