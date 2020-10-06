import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import withAdminLayout from '../../layout/AdminLayout/withAdminLayout';
import SellerRouterAdmin from '../Admin/SellerRouterAdmin';
import UsersRouterAdmin from '../Admin/UsersRouterAdmin';

const Dashboard = lazy(() => import('./dashboard'));
const AdminRouters = () => {
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
        <Route path={`${path}/sellers`} component={SellerRouterAdmin} />
        <Route path={`${path}/Users`} component={UsersRouterAdmin} />
        {/* <Route path={`${path}/ecommerce`} component={Ecommerce} />
        <Route path={`${path}/charts`} component={Charts} />
        <Route path={`${path}/pages`} component={Pages} />
        <Route path={`${path}/components`} component={Components} />
        <Route path={`${path}/maps`} component={Maps} />
        <Route path={`${path}/icons`} component={Icons} />
        <Route path={`${path}/project`} component={Projects} />

        <Route path={`${path}/calendar`} component={Calendars} />
        <Route path={`${path}/tables`} component={Tables} />
        <Route path={`${path}/forms`} component={Forms} />

        <Route path={`${path}/email/:page`} component={Inbox} />
        <Route path={`${path}/firestore`} component={Firebase} />
        <Route path={`${path}/main/chat`} component={Chat} />
        <Route path={`${path}/profile/settings`} component={Settings} /> */}
      </Suspense>
    </Switch>
  );
};

export default withAdminLayout(AdminRouters);
