import React, { Component } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact
          name="Kevin Hubert"
          email="getoffmylawn@gmail.com"
          phone="555.555.5555"
        />
        <Contact
          name="Watson Dog"
          email="woof@gmail.com"
          phone="111.111.1111"
        />
        <Contact />
      </div>
    );
  }
}

export default App;
