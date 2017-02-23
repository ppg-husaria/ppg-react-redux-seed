import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AppHeader extends Component {
  render() {
    return <header>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </header>
  }
}

class AppContent extends Component {
  render() {
    return <article>
      To get started, edit <code>src/App.js</code> and save to reload.
    </article>
  }
}

class AppFooter extends Component {
  render() {
    return <footer>
      Copyright © 2017 Patryk Wertka &and; Mateusz Janota
    </footer>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppContent />
        <AppFooter />
      </div>
    );
  }
}

export default App;
