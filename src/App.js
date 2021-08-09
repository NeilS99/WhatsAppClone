import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import Login from "./Login";
import Sidebar from "./Sidebar";

function App() {
  const [user, setUser] = useState(null);
  return (
    //BEM
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
          {/*Chat*/}
        </div>
      )}
    </div>
  );
}

export default App;
