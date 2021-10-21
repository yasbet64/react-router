
import { Redirect, Route } from "react-router-dom";

/*const PrivateRouters = (props) => {
    return ( 
        <Route exact={props.exact} path={props.path} component={props.component} />
     );
};

const PrivateRouters = (props) => {
    return <Route {...props} />;
  };
  */

//simular la autenticacion 
let auth;
auth=true;
auth=null;


const PrivateRouters = ({ component: Component, ...rest }) => {
    return (
      <Route {...rest}>{auth ? <Component /> : <Redirect to="/login" />}</Route>
    );
  };
 
export default PrivateRouters;