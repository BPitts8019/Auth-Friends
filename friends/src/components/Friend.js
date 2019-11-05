import React, {useState, useEffect, useContext} from "react";
import authApi from "../utils/api";

// Contexts
import ErrorContext from "../contexts/ErrorContext";

// id: 3,
// name: 'Ryan',
// age: 15,
// email: 'ryan@lambdaschool.com'
function Friend ({match, history}) {
   const {error, setError} = useContext(ErrorContext);
   const [friend, setFriend] = useState();

   useEffect(() => {
      console.log(match.params);
      authApi()
         .get(`/api/friends/${match.params.id}`)
         .then(response => {
            setFriend(response.data);
         })
         .catch(err => {
            setError({
               ...error,
               status: err.response.status,
               statusText: err.response.statusText,
               errorMsg: err.response.data.error
            });
            history.push("/error");
         })
   }, []);

   return (
      (friend)
      ?  (<div className="friend-card">
            <h1>{friend.name}</h1>
            <h6>age: {friend.age}</h6>
            <h3>Email: {friend.email}</h3>
         </div>)
      :  <p>Loading...</p>
   );
}

export default Friend;