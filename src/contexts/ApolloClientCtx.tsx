import {
  ApolloClient,
  InMemoryCache,
  concat,
  ApolloLink,
} from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { createContext, FC, useEffect, useRef } from "react";
import { createUploadLink } from "apollo-upload-client";
import { useState } from "react";
import { TApolloClientCtx } from "../types/context";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { SubscriptionClient } from "subscriptions-transport-ws";
const isBrowser = process.browser;

const authMiddleware = new ApolloLink((operation, forward) => {
  const token =
    isBrowser &&
    (sessionStorage.getItem("authToken") || localStorage.getItem("authToken"));
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }));

  return forward(operation);
});
const httpLink = createUploadLink({
  uri: `${process.env.NEXT_PUBLIC_GQL_HTTP_URL}/graphql`,
});

export const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          books: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          dashboard: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          wishlist: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          onlineUsers: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          authors: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          categories: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          users: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          shoppingCart: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          recipients: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
});
export const ApolloClientCtx = createContext<TApolloClientCtx>(null);
const ApolloClientCtxProvider: FC = ({ children }) => {
  const [isLoggin, setIsLoggin] = useState(false);

  const subsClient = useRef<SubscriptionClient>(null);
  useEffect(() => {
    if (isLoggin) {
      const authToken =
        isBrowser &&
        (sessionStorage.getItem("authToken") ||
          localStorage.getItem("authToken"));
      subsClient.current =
        process.browser &&
        new SubscriptionClient(
          `${process.env.NEXT_PUBLIC_GQL_WS_URL}/graphql`,
          {
            reconnect: true,
            connectionParams: {
              authorization: authToken ? `Bearer ${authToken}` : "",
            },
          }
        );
      const wsLink = process.browser && new WebSocketLink(subsClient.current);
      const splitLink = process.browser
        ? WebSocketLink.split(
            ({ query }) => {
              const definition = getMainDefinition(query);
              return (
                definition.kind === "OperationDefinition" &&
                definition.operation === "subscription"
              );
            },
            wsLink,
            httpLink
          )
        : httpLink;
      client.setLink(concat(authMiddleware, splitLink));
    } else {
      subsClient.current?.unsubscribeAll();
      subsClient.current?.close(true);
      client.setLink(concat(authMiddleware, httpLink));
    }
  }, [isLoggin]);
  return (
    <ApolloClientCtx.Provider
      value={{
        isLoggin,
        setIsLoggin,
      }}
    >
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ApolloClientCtx.Provider>
  );
};

export default ApolloClientCtxProvider;
