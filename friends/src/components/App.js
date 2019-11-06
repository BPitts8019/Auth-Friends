import React, { useState } from 'react';
import { NavLink, Route, Switch, withRouter } from "react-router-dom";
import { getToken } from "../utils/api";

// Context
import ErrorContext from "../contexts/ErrorContext";
import FriendsContext from "../contexts/FriendsContext";

// Components
import ProtectedRoute from "./ProtectedRoute";
import LoginForm from "./LoginForm";
import FriendList from "./FriendList";
import Friend from "./Friend";
import PageError from "./PageError";
import Logout from "./Logout";
import Missing from "./Missing";

function App() {
   const INITIAL_ERROR = {
      status: -1,
      statusText: "Unkown Error",
      errorMsg: "You should not see this. If you do, there is a problem with the app."
   };
   const [error, setError] = useState(INITIAL_ERROR);
   const ZERO_FRIENDS = [];
   const [friends, setFriends] = useState(ZERO_FRIENDS);
   const login = getToken();

   return (
      <div className="App">
         <header>
            <h1>My Friends List</h1>
         </header>

         <article>
            <nav>
               <NavLink exact to="/">Home</NavLink>
               {!login && <NavLink to="/login">Log In</NavLink>}
               {login && <NavLink to="/logout">Log Out</NavLink>}
               {login && <NavLink to="/add-friend">Add a Friend</NavLink>}
            </nav>


            <div className="content">
               {/* <Switch> */}
                  <ErrorContext.Provider value={{ error, setError, INITIAL_ERROR }}>
                     <FriendsContext.Provider value={{ friends, setFriends, ZERO_FRIENDS }}>
                        <ProtectedRoute exact path="/" component={FriendList} />
                        <Route exact path="/logout" component={Logout} />
                     </FriendsContext.Provider>
                     <ProtectedRoute exact path="/friend/:id" component={Friend} />
                     <Route exact path="/login" component={LoginForm} />
                     <Route exact path="/error" component={PageError} />
                     {/* <Route component={Missing} /> */}
                  </ErrorContext.Provider>
               {/* </Switch> */}
            </div>
         </article>
      </div>
   );
}

export default withRouter(App);
