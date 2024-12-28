import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import News from './Components/News';
import Newsitem from './Newsitem';

export default class App extends Component {

  render() {
    return (
      <div>
      this is news cccomponent
      <Newsitem/>
      
      </div>
    )
  }
}
