import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';    //importing the Person component

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/*Content inside the <Person> tag rendered between <header> and <div> */}
        <Person name="Rishi" age="25">I live in Boston</Person>
      </div>
    );
  }
}

export default App;
