import React from 'react';
import propTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedUserRoute = ({ component, path }) => {
  const isLoggedIn = localStorage.getItem('login_type') === 'user';
  return isLoggedIn ? <Route component={component} path={path} /> : <Redirect to="/" />;
};

ProtectedUserRoute.propTypes = {
  component: propTypes.object.isRequired,
  path: propTypes.string.isRequired,
};

export default ProtectedUserRoute;
