import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const SellerLogin = props => {
  const [state, setState] = useState({
    item: {},
    errorMessage: '',
  });
  const { errorMessage } = state;
  const handleChange = e => {
    const { name, value } = e.target;
    setState({ items: { [name]: value } });
  };

  const onSubmit = e => {
    e.preventDefault();
    const { history } = props;
    console.log(e);
    localStorage.setItem('login_type', 'seller');
    history.push('/seller');
  };

  return (
    <div className="app-container" style={{ backgroundColor: '#cedaf3' }}>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto mt-4">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Community Login</h5>
                <form onSubmit={onSubmit} className="form-signin">
                  {/* <div className="form-group">
                            <select className="form-control">
                              <option>Select Community</option>
                              <option>Community 1</option>
                              <option>Community 2</option>
                              <option>Community 3</option>
                              <option>Community 4</option>
                            </select>
                          </div> */}
                  {/* <div className="form-group">
                            <input type="text" id className="form-control" placeholder="Your Name" required autofocus />
                          </div> */}
                  <div className="form-group">
                    <input
                      onChange={handleChange}
                      name="email"
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-row form-group">
                    <div className="col">
                      <input type="password" className="form-control" id placeholder="Password" name="password" />
                    </div>
                    {/* <div className="col">
                              <div className="row">
                                <div className="col-lg-9">
                                  <input type="text" className="form-control" placeholder="OTP" name />
                                </div>
                                <div className="col-lg-3 d-flex justify-content-center align-items-center">
                                  <i className="fa fa-refresh" aria-hidden="true" />
                                </div>	
                              </div>	
                            </div> */}
                  </div>
                  <div>{errorMessage}</div>

                  <button className="btn btn-lg btn-warning text-white btn-block text-uppercase" type="submit">
                    Login
                  </button>

                  <div className="mt-4">
                    <div className="float-right pr-2">
                      <Link to="/login" href>
                        <i
                          className="fa fa-arrow-circle-right"
                          aria-hidden="true"
                          style={{ fontSize: 30, color: '#ffa500' }}
                        />
                      </Link>
                    </div>
                    <p className="mb-0 pt-1">Want to Login as a User?</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
SellerLogin.propTypes = {
  history: PropTypes.any,
};
export default SellerLogin;
