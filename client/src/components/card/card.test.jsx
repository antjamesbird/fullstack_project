import React from 'react'
import ReactDOM from "react-dom";
import Card from './card';

test('Renders the Card component', () => {
  const div = document.createElement("div");
  ReactDOM.render(<Card></Card>, div);
  ReactDOM.unmountComponentAtNode(div);
});