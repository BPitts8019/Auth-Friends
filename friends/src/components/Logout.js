import React, {useEffect} from "react";
import {Redirect} from "react-router-dom";
import {clearToken} from "../utils/api";

function Logout () {
   useEffect(() => {
      clearToken();
   }, []);

   return <Redirect to="/login" />;
}

export default Logout;