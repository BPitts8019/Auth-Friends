import React, {useState} from "react";

function LoginForm () {
   //styles
   const wrapper = {
      margin: "2rem"
   };

   //local state
   const [data, setData] = useState({
      email: "",
      password: ""
   });

   // handlers
   const handleChange = event => {};
   const handleSubmit = event => {};

   return (
      <div style={wrapper}>
         <form name="login">
            <input type="email" placeholder="Email..." />
            <input type="password" placeholder="Password..." />
            <button type="submit">Login</button>
         </form>
      </div>
   );
}

export default LoginForm;