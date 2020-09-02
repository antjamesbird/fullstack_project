import React from 'react'
import ReactDOM from "react-dom";
import Loader from './loader';

test('Renders the loader component', () => {
  const div = document.createElement("div");
  ReactDOM.render(<Loader></Loader>, div);
  ReactDOM.unmountComponentAtNode(div);
});