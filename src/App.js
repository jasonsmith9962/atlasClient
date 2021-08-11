import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css';
import Sidebar from './components/site/Sidebar';
import Footer from './components/site/Footer';
import Header from './components/site/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <Sidebar />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
