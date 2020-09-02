import React from 'react'
import ReactDOM from "react-dom";
import Loader from './loader';
import renderer from 'react-test-renderer';

test('Renders the loader component', () => {
  const div = document.createElement("div");
  ReactDOM.render(<Loader></Loader>, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Should match snapshot', () => {
  const tree = renderer.create(<Loader></Loader>).toJSON();
  expect(tree).toMatchSnapshot();
});