import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import withSellerLayout from '../layout/SellerLayout/withSellerLayout';

const Dashboard = lazy(() => import('./Seller/dashboard'));

const SellerAdmin = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Suspense
        fallback={
          <div className="spin">
            <Spin />
          </div>
        }
      >
        <Route path={path} component={Dashboard} />
      </Suspense>
    </Switch>
  );
};

export default withSellerLayout(SellerAdmin);
