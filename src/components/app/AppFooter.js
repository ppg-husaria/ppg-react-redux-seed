import React from 'react';

function intersperse(arr, sep) {
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce(function (xs, x, i) {
    return xs.concat([sep, x]);
  }, [arr[0]]);
}

export class AppFooter extends React.Component {
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