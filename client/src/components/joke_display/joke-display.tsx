import React, { useContext } from 'react';
import Joke from '../joke/joke';
import { AppContext } from '../../app_context';

const JokeDisplay = () => {
  const appContext = useContext(AppContext);
  return (
    <div>
      {
        appContext.jokeActive ? <Joke category={appContext.selectedCategory} /> : null
      }
    </div>
  );
};

export default JokeDisplay;
