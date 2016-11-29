const React = require('react');
const ReactDOM = require('react-dom');
const renderer = require('react-test-renderer');
const user = require('../app/scripts/main.js')

test('Component renders correctly', () => {
  const users = renders.create(<user />).toJSON();
  expect(users).toMatchSnapshot();
})