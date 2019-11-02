import React, {useState, useContext} from "react";
import authApi from "../utils/api";
import ErrorContext from "../contexts/ErrorContext";

function LoginForm ({history}) {
   //local state
   const [data, setData] = useState({
      username: "",
      password: ""
   });
   const {error, setError, INITIAL_ERROR} = useContext(ErrorContext);

   // handlers
   const handleChange = event => {
      setData({
         ...data,
         [event.target.name]: event.target.value
      });
   };
   const handleSubmit = event => {
      event.preventDefault();
      setError(INITIAL_ERROR);
      
      authApi()
         .post("/api/login", data)
         .then(response => {
            console.log(response.data);
         })
         .catch(err => {
            setError({
               ...error,
               status: err.response.status,
               statusText: err.response.statusText,
               errorMsg: err.response.data.error
            });
         })
   };

   return (
      <div>
         {
            (error.status >= 0)
            ?  <p className="error">{error.errorMsg}</p>
            : null
         }
         <form name="login" onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Enter a username" onChange={handleChange} value={data.email} />
            <input type="password" name="password" placeholder="Enter a password" onChange={handleChange} value={data.password} />
            <button type="submit">Login</button>
         </form>
      </div>
   );
}

export default LoginForm;