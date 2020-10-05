import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const Dashboard = lazy(() => import('../../container/dashboard'));
const DashboardBase = lazy(() => import('../../container/dashboard/DashboardBase'));
const ProductRoute = lazy(() => import('./product'));
const Business = lazy(() => import('../../container/dashboard/Business'));
const Performance = lazy(() => import('../../container/dashboard/Performance'));

const DashboardRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={Dashboard} />
      <Route exact path={`${path}/base`} component={DashboardBase} />
      <Route  path={`${path}/product`} component={ProductRoute} />
      <Route exact path={`${path}/business`} component={Business} />
      <Route exact path={`${path}/performance`} component={Performance} />
    </Switch>
  );
};

export default DashboardRoutes;
