import React, {useState} from 'react';

// Context
import ErrorContext from "../contexts/ErrorContext";
// Components
import {NavLink, Route} from "react-router-dom";
import LoginForm from "./LoginForm";
import FriendList from "./FriendList";
import PageError from "./PageError";

function App() {
   const INITIAL_ERROR = {
      status: -1,
      statusText: "Unkown Error",
      errorMsg: "You should not see this. If you do, there is a problem with the app."
   };
   const [error, setError] = useState(INITIAL_ERROR);

   return (
      <div className="App">
         <header>
            <h1>My Friends List</h1>
         </header>

         <article>
            <nav>
               <NavLink exact to="/">Home</NavLink>
               <NavLink to="/login">Log In</NavLink>
               <NavLink to="/logout">Log Out</NavLink>
               <NavLink to="/add-friend">Add a Friend</NavLink>
            </nav>
         
            <ErrorContext.Provider value={{error, setError, INITIAL_ERROR}}>
               <div className="content">
                  <Route exact path="/login" component={LoginForm} />
                  <Route path="/error" component={PageError} />
               </div>
            </ErrorContext.Provider>
         </article>
      </div>
   );
}

export default App;
