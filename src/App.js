import React from 'react';
import logo from './logo.svg';
import './App.css';
import Champions from "./components/Champions.js";
import Tournaments from "./components/Tournaments.js"
import TabNavigation from './components/TabNavigation';


function App() {
  return (
    <div className="App">
          <TabNavigation/>
    </div>
  );
}

export default App;
