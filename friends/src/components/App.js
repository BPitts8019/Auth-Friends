import React from 'react';
import "./App.css";

function App() {
   return (
      <div className="App">
         <header>
            <h1>My Friends List</h1>
         </header>

         <article>
            <nav>
               <a>Home</a>
               <a>Log In</a>
               <a>Account</a>
               <a>World</a>
            </nav>
         
            <ul className="friendsList">
               <li className="friend">Bill</li>
            </ul>
         </article>
      </div>
   );
}

export default App;
