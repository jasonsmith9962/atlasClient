import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css';
import Sidebar from './components/site/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar />
      </Router>
      
    </div>
  );
}

export default App;
