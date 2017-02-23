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

  expect(app.find(<footer />)).toBeTruthy();

  [ ["Patryk Wertka", "https://www.facebook.com/spartanPAGE"],
    ["Mateusz Janota", "https://www.facebook.com/lexonouri"] 
  ].map((authorData) => {
    const [name, link] = authorData;
    expect(app.find(<a href={link}>{name}</a>)).toBeTruthy();
  });
})