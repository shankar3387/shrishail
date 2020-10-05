import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import AuthSer from '../../Server/server';
import Community from '../../CommunityModal/Community';
import { Formik } from 'formik';
import * as yup from 'yup';
import { ErrorLabel } from '../../../components/common/ErrorText/styledComponents';
// import store from 'store';


const validationSchema = yup.object().shape({
  email: yup.string()
    .email()
    .required("Email is required"),
  password: yup.string()
    .required("Password is required")
    .min(6, " Password length is 6"),
    // community: yup.string()
    //   .required("required")
})

export default class Login extends Component {

  onSubmit = async (userData) => {
    const { email, password, community } = userData
    const { history } = this.props;
    // console.log(this)
    // e.preventDefault();
    AuthSer.postUserLogin(userData).then(result=>{
      const login = result.data.userDetails
      if(login){
         localStorage.setItem('login_type', login.login_type);
        if (localStorage.getItem('login_type') === 'admin') {
          history.push('/admin');
          } else {
          history.push('/user');
          }
      }
    })

    // this.setState({ error: false });

    // if (!(username === 'george' && password === 'foreman')) {
    // //   return this.setState({ error: true });
    // }
    // const login = await AuthSer.postLogin(this.state.items)
    // console.log("you're logged in. yay!");
    // // store.set('loggedIn', true);
    // console.log('login', login)
    // if(!login.error){
    //   localStorage.setItem('admin',true)
    //   this.props.history.push('/admin/');

    // }else {
    //   this.setState({errorMessage :login.message})
    // }

    // localStorage.setItem('login_type', 'admin');
    // this.setState({ errorMessage: 'login.message' });
    // console.log(this.state);
    // if (localStorage.getItem('login_type') === 'admin') {
    //   history.push('/admin');
    // } else {
    //   history.push('/user');
    // }
  };


  render() {

    return (
      <div className="app-container" style={{ backgroundColor: '#cedaf3' }}>
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto mt-4">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Community Login</h5>
                  <Formik
                    initialValues={{ email: "", password: "" }}
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
                        setFieldValue
                      } = props;
                      return (
                        <>
                          <form onSubmit={handleSubmit} className="form-signin">
                            {/* <div className="form-group">
                              <Community name="community" type='text' logChange={(value) => {
                                setFieldValue("community", value.value)
                                handleChange(value)
                              }}
                                 />
                            </div>
                            {errors.community && touched.community && (
                              <ErrorLabel>{errors.community}</ErrorLabel>
                            )} */}
                            <div className="form-group">
                              <input
                                onChange={handleChange}
                                name="email"
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                value={values.email}
                              />
                            </div>
                            {errors.email && touched.email && (
                              <ErrorLabel>{errors.email}</ErrorLabel>
                            )}
                            <div className="form-row form-group">
                              <div className="col">
                                <input type="password" className="form-control" id placeholder="Password" name="password" onChange={handleChange}
                                  value={values.password} />
                              </div>
                            </div>
                            {errors.password && touched.password && (
                              <ErrorLabel>{errors.password}</ErrorLabel>
                            )}

                            <button className="btn btn-lg btn-warning text-white btn-block text-uppercase" type="submit">
                              Login
                    </button>

                            <div className="mt-4">
                              <div className="float-right pr-2">
                                <Link to="/SellerLogin" href>
                                  <i
                                    className="fa fa-arrow-circle-right"
                                    aria-hidden="true"
                                    style={{ fontSize: 30, color: '#ffa500' }}
                                  />
                                </Link>
                              </div>
                              <p className="mb-0 pt-1">Want to Login as a SuperNebr Seller?</p>
                            </div>
                          </form>
                        </>)
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
Login.propTypes = {
  history: PropTypes.any,
};
