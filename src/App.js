import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css';
import Sidebar from './components/site/Sidebar';
import Footer from './components/site/Footer';
import Navbar from './components/site/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
      <Sidebar />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
