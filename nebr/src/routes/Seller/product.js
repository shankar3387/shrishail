import React, { lazy } from 'react';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, useRouteMatch } from 'react-router-dom';

const Product = lazy(() => import('../../SellerComponent/product/Products'));
const ProductAdd = lazy(() => import('../../SellerComponent/product//AddProduct'));
const ProductEdit = lazy(() => import('../../SellerComponent/product/EditProduct'));
// const ProductDetails = lazy(() => import('../../SellerComponent/product/product/ProductDetails'));


const ProductRoute = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/products`} component={Product} />
      <Route exact path={`${path}/add-product`} component={ProductAdd} />
      <Route exact path={`${path}/edit-product`} component={ProductEdit} />
      {/* <Route exact path={`${path}/productDetails/:id`} component={ProductDetails} />
      <Route exact path={`${path}/invoice`} component={Invoice} />
      <Route exact path={`${path}/orders`} component={Orders} />
      <Route exact path={`${path}/sellers`} component={Sellers} />
      <Route path={`${path}/cart`} component={Cart} /> */}
    </Switch>
  );
};

export default ProductRoute;
