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
      <PageHeader>Home page <small>(the only page)</small></PageHeader>
      <Jumbotron>
        <article>
          Check us out on <a href={links.github}>Github</a> and <a href={links.facebook}>Facebook</a>
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
        <AppContent />
        <AppFooter />
      </div>
    );
  }
}

export default App;
