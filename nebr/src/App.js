import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'font-awesome/scss/font-awesome.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { ConfigProvider } from 'antd';
import store, { rrfProps } from './redux/store';
import Admin from './routes/Admin';
import SellerAdmin from './routes/SellerRouter';
import UserRouter from './routes/UserRouter';
import Auth from './routes/auth';
import 'bootstrap/dist/css/bootstrap.css';
import './static/css/style.css';
import { ToastContainer, toast } from 'react-toastify';
import config from './config/config';
import ProtectedAdminRoute from './components/utilities/protectedRoute';
import HomeLayout from './layout/HomeLayout/HomeLayout';
import LayoutHome from './layout/HomeLayout/LayoutHome';
import Home from './routes/Home';
import ProtectedSellerRoute from './routes/Seller/ProtectedSellerRoute';
import ProtectedUserRoute from './routes/User/ProtectedUserRoute';

const { theme } = config;

const ProviderConfig = () => {
  const { rtl, isLoggedIn, communityName } = useSelector(state => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
      isLoggedIn: state.auth.login,
      communityName: localStorage.getItem('communityValue'),
    };
  });

  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setPath(window.location.pathname);
    }
    // eslint-disable-next-line no-return-assign
    return () => (unmounted = true);
  }, [setPath]);

  return (
    <ConfigProvider direction={rtl ? 'rtl' : 'ltr'}>
      <ThemeProvider theme={{ ...theme, rtl }}>
        <ReactReduxFirebaseProvider {...rrfProps}>
        <ToastContainer />
          <Router basename={process.env.PUBLIC_URL}>
            <div>
              <Switch>
                <ProtectedAdminRoute path="/admin" component={Admin} />
                <ProtectedSellerRoute path="/seller" component={SellerAdmin} />
                <ProtectedUserRoute path="/user" component={UserRouter} />
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </ReactReduxFirebaseProvider>
      </ThemeProvider>
    </ConfigProvider>
  );
};

function App() {
  return (
    <Provider store={store}>
      <ProviderConfig />
    </Provider>
  );
}

export default hot(App);
