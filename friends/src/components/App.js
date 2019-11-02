import React, {useState} from 'react';
import {NavLink, Route, withRouter} from "react-router-dom";
import {getToken} from "../utils/api";

// Context
import ErrorContext from "../contexts/ErrorContext";

// Components
import ProtectedRoute from "./ProtectedRoute";
import LoginForm from "./LoginForm";
import FriendList from "./FriendList";
import PageError from "./PageError";
import Logout from "./Logout";

function App() {
   const INITIAL_ERROR = {
      status: -1,
      statusText: "Unkown Error",
      errorMsg: "You should not see this. If you do, there is a problem with the app."
   };
   const [error, setError] = useState(INITIAL_ERROR);
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
         
            <ErrorContext.Provider value={{error, setError, INITIAL_ERROR}}>
               <div className="content">
                  <ProtectedRoute exact path="/" component={FriendList} />
                  <Route exact path="/login" component={LoginForm} />
                  <Route exact path="/error" component={PageError} />
                  <Route exact path="/logout" component={Logout} />
               </div>
            </ErrorContext.Provider>
         </article>
      </div>
   );
}

export default withRouter(App);
