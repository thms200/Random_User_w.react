import React, { Component } from 'react';
import Header from "./Component/Header";
import Section from "./Component/Section";
import './App.css';

class App extends Component {  
  render() {
    return (
      <div>
        <Header></Header>
        <Section></Section>
      </div>
    )
  }
}

export default App;
