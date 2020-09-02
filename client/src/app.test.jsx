import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
  } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });


test("Renders the the App component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ApolloProvider client={client}><App></App></ApolloProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
