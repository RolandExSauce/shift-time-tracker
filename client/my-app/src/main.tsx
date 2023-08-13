// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   ApolloLink,
// } from "@apollo/client";
// import { createUploadLink } from "apollo-upload-client";

// const uploadLink = createUploadLink({
//   uri: "http://localhost:4000/graphql",
//   headers: {
//     "Apollo-Require-Preflight": "true",
//   },
//   credentials: "same-origin",
// });

// const client = new ApolloClient({
//   link: ApolloLink.from([uploadLink]),
//   cache: new InMemoryCache(),
// });

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <ApolloProvider client={client}>
//       <App />
//     </ApolloProvider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";
// import { HttpLink } from "@apollo/client";

//const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" })
const uploadLink = createUploadLink({
  uri: "http://localhost:4000/graphql",
  // headers: {
  //   "Apollo-Require-Preflight": "true",
  // },
});

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
  // Additional options
});
//MAYBE CHANGE TO "include"
// const clearTypeName = new ApolloLink((operation, forward) => {
//   if (operation.variables) {
//     /* eslint-disable */

//     operation.variables = JSON.parse(
//       JSON.stringify(operation.variables),
//       omitTypename
//     );
//   }

//   return forward(operation).map((data) => {
//     return data;
//   });
// });
const client = new ApolloClient({
  link: ApolloLink.from([
    // Report errors to console in a user friendly format
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    httpLink,
    uploadLink,
  ], ),
  

  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
