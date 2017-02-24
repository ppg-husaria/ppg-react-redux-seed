import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class AppNav extends React.Component {
  render() {
    const items = [
      ["#", <p>NavItem 1</p>],
      ["#", <p>NavItem 2</p>]
    ];

    const renderableItems = items.map((item, i) => {
      const [path, content] = item;
      return <LinkContainer key={i} to={{ pathname: path }}>
        <NavItem eventKey={i}>
          {content}
        </NavItem>
      </LinkContainer>
    });

    // <LinkContainer to={{ pathname: '/', query: { bar: 'baz' } }}>
    return <Nav bsStyle="pills">
      {renderableItems}
    </Nav >
  }
}