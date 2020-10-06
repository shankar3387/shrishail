import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import SellerList from '../../AdminComponent/SellerDetails/SellerList';

const Dashboard = lazy(() => import('../../container/dashboard'));
const DashboardBase = lazy(() => import('../../container/dashboard/DashboardBase'));
const Ecommerce = lazy(() => import('../../container/dashboard/Ecommerce'));
const Business = lazy(() => import('../../container/dashboard/Business'));
const Performance = lazy(() => import('../../container/dashboard/Performance'));

const SellerRouterAdmin = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={SellerList} />
      <Route exact path={`${path}/newSeller`} component={DashboardBase} />
      {/* <Route exact path={`${path}/ecommerce`} component={Ecommerce} /> */}
      <Route exact path={`${path}/`} component={Business} />
      {/* <Route exact path={`${path}/performance`} component={Performance} /> */}
    </Switch>
  );
};

export default SellerRouterAdmin;
