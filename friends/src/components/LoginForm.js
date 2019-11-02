import React from "react";

function LoginForm () {
   const wrapper = {
      margin: "2rem"
   };

   const h3Style = {
      marginBottom: "4px"
   };

   const inputStyle = {
      display: "block",
      padding: "10px",
      width: "100%",
      marginBottom: "10px",
      outline: "none",
      backgroundColor: "#f2ecdd",
      borderRadius: "2px",
      border: "1px solid #ddd1c7",
      boxShadow: "inset #ddd1c7 0 0 6px 2px"
   };

   return (
      <div style={wrapper}>
         <h3 style={h3Style}>Login</h3>
         <form name="login">
            <input type="email" placeholder="Email..." style={inputStyle} />
            <input type="password" placeholder="Password..." style={inputStyle} />
         </form>
      </div>
   );
}

export default LoginForm;