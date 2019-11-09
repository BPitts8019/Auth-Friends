import React from "react";
import {Route, Redirect} from "react-router-dom";
import {getToken} from "../utils/api";

function ProtectedRoute ({component: Component, ...rest}) {
   const login = getToken();

   return (
      <Route {...rest} render={props => {
         if (login) {
            return <Component {...props}/>;
         } else {
            return <Redirect to="/login" />;
         }
      }}/>
   );
}

export default ProtectedRoute;