import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

function intersperse(arr, sep) {
    if (arr.length === 0) {
        return [];
    }

    return arr.slice(1).reduce(function(xs, x, i) {
        return xs.concat([sep, x]);
    }, [arr[0]]);
}

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
    const links = {
      github: "https://github.com/ppg-husaria/pg_blog",
      facebook: "https://www.facebook.com/PPGHusaria"
    };

    return <Jumbotron>
      <article>
        Check us out on <a href={links.github}>Github</a> and <a href={links.facebook}>Facebook</a>
      </article>
    </Jumbotron>
  }
}

class AppFooter extends Component {
  render() {
    const createAuthorLink = (name, link, i) => <a href={link} key={i}>{name}</a>

    const authors = intersperse([
      ["Patryk Wertka", "https://www.facebook.com/spartanPAGE"],
      ["Mateusz Janota", "https://www.facebook.com/lexonouri"]
    ].map((author, i) => createAuthorLink(...author, i)), " ∧ ");

    return <footer>
      Copyright © 2017 {authors}
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
