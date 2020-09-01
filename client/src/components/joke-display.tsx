import React, { useContext, Fragment } from "react";
import Joke from "./joke";
import { AppContext } from "../app_context";

const JokeDisplay = () => {
  const appContext = useContext(AppContext);
  return (
    <div>
      {
        appContext.jokeActive ? <Joke category={appContext.selectedCategory} /> : <Fragment></Fragment>
      }
    </div>
  );
};

export default JokeDisplay;
