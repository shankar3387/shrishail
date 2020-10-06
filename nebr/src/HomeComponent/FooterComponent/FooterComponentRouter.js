import AboutUs from "./AboutUs/AboutUs";
import Blogs from "./blogs/blogs";

const FooterComponentRoute = () => {
    const { path } = useRouteMatch();
    return (
      <Switch>
        <Route exact path={`${path}/aboutUs`} component={AboutUs} />
        <Route exact path={`${path}/blogs`} component={Blogs} />
        {/* <Route exact path={`${path}/productDetails/:id`} component={ProductDetails} />
        <Route exact path={`${path}/invoice`} component={Invoice} />
        <Route exact path={`${path}/orders`} component={Orders} />
        <Route exact path={`${path}/sellers`} component={Sellers} />
        <Route path={`${path}/cart`} component={Cart} /> */}
      </Switch>
    );
  };
  
  export default FooterComponentRoute;