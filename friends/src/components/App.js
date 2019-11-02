import React from 'react';

// Components
import {NavLink, Route} from "react-router-dom";
import LoginForm from "./LoginForm";
import FriendList from "./FriendList";

function App() {
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
         
            <div className="content">
               <Route exact path="/login" component={LoginForm} />
            </div>
         </article>
      </div>
   );
}

export default App;
