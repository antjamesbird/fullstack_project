import React from "react";
import ReactDOM from "react-dom";
import JokeDisplay from "./joke-display";

test("Renders the the Joke Display component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<JokeDisplay></JokeDisplay>, div);
  ReactDOM.unmountComponentAtNode(div);
});
