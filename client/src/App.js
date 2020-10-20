import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
            <Navbar />
            <Route exact path="/Dashboard" />
      </div>  </Router>

  );
}

export default App;

