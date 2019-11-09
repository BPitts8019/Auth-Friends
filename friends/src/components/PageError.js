import React, {useContext} from "react";
import ErrorContext from "../contexts/ErrorContext";

function PageError () {
   const {error: {status, statusText, errorMsg}} = useContext(ErrorContext);

   return (
      <div>
         <h1>{errorMsg}</h1>
         <h4>{status}: {statusText}</h4>
      </div>
   );
}

export default PageError;