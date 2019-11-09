import React, {useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import authApi from "../utils/api";

// Contexts
import ErrorContext from "../contexts/ErrorContext";
import FriendsContext from "../contexts/FriendsContext";

function FriendList ({history}) {
   const {error, setError} = useContext(ErrorContext);
   const {friends, setFriends} = useContext(FriendsContext);

   useEffect(() => {
      authApi()
         .get("/api/friends")
         .then(response => {
            setFriends(response.data);
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
      (Array.isArray(friends) && friends.length > 0)
      ?  (<ul className="friendsList">
            {friends.map(friend => (
               <li key={friend.id} className="friend">
                  <Link to={`./friend/${friend.id}`}>{friend.name}</Link>
               </li>
            ))}
         </ul>)
      :  <p>Loading...</p>
   );
}

export default FriendList;