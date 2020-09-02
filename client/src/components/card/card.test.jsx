import React from "react";
import ReactDOM from "react-dom";
import Card from "./card";
import renderer from "react-test-renderer";

test("Renders the Card component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Card></Card>, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Should match snapshot", () => {
  const tree = renderer.create(<Card></Card>).toJSON();
  expect(tree).toMatchSnapshot();
});
