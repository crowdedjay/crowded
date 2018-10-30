import React, { Component } from 'react';
import logo from './eye.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="crowded-logo" alt="logo" />
          <p>
            <code>Still Initializing</code>
          </p>
          <a
            className="App-link"
            href="https://twitter.com/crowded_studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Twitter
          </a>
        </header>
      </div>
    );
  }
}

export default App;
