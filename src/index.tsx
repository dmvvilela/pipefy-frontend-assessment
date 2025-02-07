import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { relayStylePagination } from "@apollo/client/utilities";

const client = new ApolloClient({
  uri: process.env.REACT_APP_PIPEFY_API_URL || "",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          cards: relayStylePagination(),
        },
      },
    },
  }),
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_PIPEFY_API_TOKEN || ""}`,
  },
  credentials: "same-origin",
  connectToDevTools: true,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
