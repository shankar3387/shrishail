import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import {} from 'react-router-dom';
import { useStore } from 'react-redux';

import './header.css';
import PropTypes from 'prop-types';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'font-awesome/scss/font-awesome.scss';

const HomeHeader = () => {
  const { store } = useStore();
  const [communityName, setCommunityName] = useState(localStorage.getItem('communityValue'));
  console.log(store);


  useEffect(() => {
    console.log(store);

    console.log(communityName);
    // if (localStorage.getItem('communityValue') !== communityName) {
      setCommunityName(localStorage.getItem('communityValue'));
    // }
    // updateCommunity();
    console.log('useEffect, fetchData here');
  });


  console.log(localStorage.getItem('communityValue'));
  console.log("abc");
  // const { communityName } = store;
  // console.log(communityName.lable);
  // const [selcter] = useSelector()
  // console.log(state)

  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="images/supernebr_logo.png" className="img-fluid mx-auto d-block" alt="SuperNebr_logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link Community" href="#">
                  {communityName}
                </a>
              </li>
              <li className="nav-item">
                <Link to="seller_account" className="nav-link reg_sel" href="seller_account.html">
                  Register as a Seller
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="home_login.html#shop">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Share/Rent
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Chit-chat
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Create Activity
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-gamepad" aria-hidden="true" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-search" aria-hidden="true" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-bell" aria-hidden="true" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-shopping-cart" aria-hidden="true" />
                </a>
              </li>
              <li className="nav-item">
                <Link to="login" className="nav-link" href="login.html">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link pl-0 pr-0" href="#">
                  <span className="p-0">or</span>
                </a>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link" href="register.html">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
HomeHeader.propTypes = {
  store: PropTypes.any,
  props: PropTypes.any,
  state: PropTypes.any,
};
export default HomeHeader;
