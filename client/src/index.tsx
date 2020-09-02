import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloProvider
} from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
