import React from 'react'
import ReactDOM from "react-dom";
import Header from './header';

test('Renders the header component', () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header></Header>, div);
  ReactDOM.unmountComponentAtNode(div);
});