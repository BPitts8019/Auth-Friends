import React, {useEffect, useContext} from "react";
import {Redirect} from "react-router-dom";

//Contexts
import ErrorContext from "../contexts/ErrorContext";

function Missing () {
   const {setError, INITIAL_ERROR} = useContext(ErrorContext);

   useEffect(() => {
      setError({
         ...INITIAL_ERROR,
         status: 404,
         statusText: "Page Not Found",
         errorMsg: "OOPS!!"
      });
   }, []);

   return <Redirect to="/error" />;
}

export default Missing;