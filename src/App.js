import React from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    //BEM
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
        {/*Chat*/}
      </div>
    </div>
  );
}

export default App;
