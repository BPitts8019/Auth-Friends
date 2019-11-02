import React, {useContext} from "react";
import ErrorContext from "../contexts/ErrorContext";

function PageError () {
   const {error: {status, statusText, errorMsg}} = useContext(ErrorContext);

   return (
      <div>
         <h2>{status}: {statusText}</h2>
         <h3>{errorMsg}</h3>
      </div>
   );
}

export default PageError;