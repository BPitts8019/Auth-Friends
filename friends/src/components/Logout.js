import React, {useEffect, useContext} from "react";
import {Redirect} from "react-router-dom";
import {clearToken} from "../utils/api";

//Contexts
import FriendsContext from "../contexts/FriendsContext";

function Logout () {
   const {setFriends, ZERO_FRIENDS} = useContext(FriendsContext);
   
   useEffect(() => {
      clearToken();
      setFriends(ZERO_FRIENDS);
   }, []);

   return <Redirect to="/login" />;
}

export default Logout;