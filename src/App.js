import './App.css';

import React, { Component } from 'react'
import Header from './Component/Header';
import Footer from './Component/Footer';
import Notes from './Component/Notes';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Notes/>
        <Footer/>
      </div>
    )
  }
}

export default App;
