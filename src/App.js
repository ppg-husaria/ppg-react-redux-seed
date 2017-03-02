import React, { Component } from 'react';
import { Jumbotron, PageHeader, Grid } from 'react-bootstrap';
import './styles/App.css';

//1st way to create component - use regular function
export const HelloWorldComponent = () => {
  return <h1>Hello World!</h1>
}

export const PageNotFoundComponent = () => {
  return <h1>You've entered wrong route, idiot</h1>
}

//2nd way to create component - extend React.Component and override render()
export class App extends Component {
  render() {
    return (
      <div className="App">
        \/ \/ App: rendered children \/ \/
        {this.props.children}
        /\ /\ App: rendered children /\ /\
      </div>
    );
  }
}