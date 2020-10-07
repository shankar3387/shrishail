import React, { lazy } from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import AboutUs from '../../HomeComponent/FooterComponent/AboutUs/AboutUs';
import Blogs from '../../HomeComponent/FooterComponent/blogs/blogs';
import Careers from '../../HomeComponent/FooterComponent/Careers/Careers';
import TermsCondition from '../../HomeComponent/FooterComponent/TermsCondition/TermsCondition';
import PrivacyPolicy from '../../HomeComponent/FooterComponent/PrivacyPolicy/PrivacyPolicy';
import LicenseAgreement from '../../HomeComponent/FooterComponent/LicenseAgreement/LicenseAgreement';
import Investors from '../../HomeComponent/FooterComponent/Investors/Investors';
const FooterComponentRoute = lazy(() => import('../../HomeComponent/FooterComponent/FooterComponentRouter'));

const SellerLogin = lazy(() => import('../../SellerComponent/Authentication/SellerLogin'));
const Home = lazy(() => import('../../HomeComponent/Home/Home'));

const Login = lazy(() => import('../../HomeComponent/Authentication/Login/Login'));

const Register = lazy(() => import('../../HomeComponent/Authentication/Register/Register'));

const CartProcess = lazy(() => import('../../HomeComponent/Cart/CartProcess'));

const CreateBlogs = lazy(() => import('../../HomeComponent/BlogBoard/CreateBlogs'));
const ProductDetails = lazy(() => import('../../HomeComponent/Fashion/ProductDetails/ProductDetails'));

const CreatePolls = lazy(() => import('../../HomeComponent/Polls/CreatePolls'));
const SellerRegistration = lazy(() => import('../../HomeComponent/SellerRegistration/SellerRegistration'));

const HomeLayout = () => {
  const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={`${path}/`} component={Home} />
        <Route exact restricted={false} path="/login" component={Login} />
        <Route exact restricted={false} path="/register" component={Register} />
        <Route restricted={false} path="/cartProcess" component={CartProcess} />
        <Route restricted={false} path="/createBlogs" component={CreateBlogs} />
        <Route exact restricted={false} path="/productDetails" component={ProductDetails} />
        <Route restricted={false} path="/createPolls" component={CreatePolls} />
        <Route restricted={false} path="/seller_account" component={SellerRegistration} />
        <Route path="/sellerLogin" component={SellerLogin} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/careers" component={Careers} />
        <Route path="/investors" component={Investors} />
        <Route path="/termsCondition" component={TermsCondition} />
        <Route path="/privacyPolicy" component={PrivacyPolicy} />
        <Route path="/licenseAgreement" component={LicenseAgreement} />
      </Switch>
    </div>
  );
};

export default HomeLayout;
