import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import ViewUsers from '../../AdminComponent/UsersDetails/ViewUsers';
const UsersRouterAdmin = () => {
	const { path } = useRouteMatch();
	return (
		<Switch>
			<Route exact path={path} component={ViewUsers} />
			{/* <Route exact path={`${path}/newSeller`} component={DashboardBase} /> */}
			{/* <Route exact path={`${path}/ecommerce`} component={Ecommerce} /> */}
			{/* <Route exact path={`${path}/`} component={Business} /> */}
			{/* <Route exact path={`${path}/performance`} component={Performance} /> */}
		</Switch>
	);
};

export default UsersRouterAdmin;
