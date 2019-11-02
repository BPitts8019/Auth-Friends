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
   const handleChange = event => {
      setData({
         ...data,
         [event.target.name]: event.target.value
      });
   };
   const handleSubmit = event => {
      event.preventDefault();
      console.log(data);
   };

   return (
      <div style={wrapper}>
         <form name="login" onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Enter an email" onChange={handleChange} value={data.email} />
            <input type="password" name="password" placeholder="Enter a password" onChange={handleChange} value={data.password} />
            <button type="submit">Login</button>
         </form>
      </div>
   );
}

export default LoginForm;