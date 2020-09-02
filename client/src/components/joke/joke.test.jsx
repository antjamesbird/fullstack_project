import React from 'react';
import ReactDOM from 'react-dom';
import Joke from './joke';
import renderer from 'react-test-renderer';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

test("Renders the the Joke component", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Joke category={"history"}></Joke>
    </ApolloProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

test("Should match snapshot", () => {
  const tree = renderer
    .create(
      <ApolloProvider client={client}>
        <Joke category={"history"}></Joke>
      </ApolloProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
