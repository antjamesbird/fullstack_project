import React from 'react';
import ReactDOM from 'react-dom';
import JokeDisplay from './joke-display';
import renderer from 'react-test-renderer';

test("Renders the the Joke Display component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<JokeDisplay></JokeDisplay>, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Should match snapshot", () => {
  const tree = renderer.create(<JokeDisplay></JokeDisplay>).toJSON();
  expect(tree).toMatchSnapshot();
});
