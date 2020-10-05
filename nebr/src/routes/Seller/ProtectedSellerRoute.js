import React from 'react';
import propTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedSellerRoute = ({ component, path }) => {
  const isLoggedIn = localStorage.getItem('login_type') === 'seller';
  return isLoggedIn ? <Route component={component} path={path} /> : <Redirect to="/" />;
};

ProtectedSellerRoute.propTypes = {
  component: propTypes.object.isRequired,
  path: propTypes.string.isRequired,
};

export default ProtectedSellerRoute;
