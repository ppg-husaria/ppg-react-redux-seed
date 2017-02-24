import React from 'react';
import logo from './assets/logo.svg';

export class AppHeader extends React.Component {
  render() {
    return <header>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </header>
  }
}