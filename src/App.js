import React, { Component } from 'react';
import logo from './eye.svg';
import blacktext from './white-text.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#">
          <img src={blacktext} style={{marginBottom: 10}} height="30" alt=""/>
        </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Apps</a>
      </li>
    </ul>
  </div>
</nav>
        <header className="App-header">
          <p>
            <code>Welcome To</code>
          </p>
            <img src={blacktext} className="crowded-logo" alt="logo" />
          
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

<nav class="navbar navbar-expand-lg navbar-dark">
  <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <p>© The Crowded Studio 2018</p>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a href="https://twitter.com/crowded_studio" class="nav-link fa fa-twitter main-color"></a>
      </li>
    </ul>
</nav>

      </div>
    );
  }
}

export default App;
