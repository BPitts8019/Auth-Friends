import React from "react";
import {Link} from "react-router-dom";

function FriendList () {
   return (
      <ul className="friendsList">
         <li className="friend"><Link to="./friend">Bill</Link></li>
      </ul>
   );
}

export default FriendList;