import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import renderer from "react-test-renderer";

test("Renders the header component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header></Header>, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Should match snapshot", () => {
  const tree = renderer.create(<Header></Header>).toJSON();
  expect(tree).toMatchSnapshot();
});
