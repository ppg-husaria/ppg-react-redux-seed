import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('has proper header', () => {
  const app = mount(<App />);
  expect(app.find(<header />)).toBeTruthy();
  expect(app.contains(<h2>Welcome to React</h2>)).toBeTruthy();
})

it('has proper content', () => {
  const app = mount(<App />);
  expect(app.find(<article />)).toBeTruthy();
})

it('has proper footer', () => {
  const app = mount(<App />);
  const footer = <footer>Copyright © 2017 Patryk Wertka &and; Mateusz Janota</footer>;

  expect(app.find(<footer />)).toBeTruthy();
  expect(app.contains(footer)).toBeTruthy();
})