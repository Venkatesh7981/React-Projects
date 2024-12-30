import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="NewsMonkey" aboutText="About Us" />
        <News />
      </div>
    );
  }
}

export default App;