import React, { Component } from 'react';
import './App.css';
import Nav from './navigation/nav.js';
import Header from './navigation/header.js';
import Examples from './examples/examples.js';
import Features from './features/features.js';
import Footer from './navigation/footer.js';
import Cta from './navigation/cta.js';
import Contact from './navigation/contact.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Header/>
        <Examples/>
        <Features/>
        <Cta/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
