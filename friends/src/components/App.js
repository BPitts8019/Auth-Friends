import React from 'react';
import {NavLink, Link, Route} from "react-router-dom";

function App() {
   return (
      <div className="App">
         <header>
            <h1>My Friends List</h1>
         </header>

         <article>
            <nav>
               <NavLink to="/">Home</NavLink>
               <NavLink to="/login">Log In</NavLink>
               <NavLink to="/logout">Log Out</NavLink>
               <NavLink to="/add-friend">Add a Friend</NavLink>
            </nav>
         
            <ul className="friendsList">
               <li className="friend"><Link to="./friend/:id">Bill</Link></li>
            </ul>
         </article>


      </div>
   );
}

export default App;
