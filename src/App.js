import React, { Component } from 'react';
import { Jumbotron, PageHeader, Grid } from 'react-bootstrap';
import { AppHeader, AppFooter } from './components';
import './styles/App.css';

class AppContent extends Component {
  render() {
    const links = {
      github: "https://github.com/ppg-husaria/pg_blog",
      facebook: "https://www.facebook.com/PPGHusaria"
    };

    return <Grid>
      <PageHeader>todo: page header</PageHeader>
      <Jumbotron>
        <article>
          {this.props.children}
        </article>
      </Jumbotron>
    </Grid>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppContent>{this.props.children}</AppContent>
        <AppFooter />
      </div>
    );
  }
}

export default App;
