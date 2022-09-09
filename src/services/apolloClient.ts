import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const { REACT_APP_GRAPHQL_BASE_URL, REACT_APP_GRAPHQL_SECRET } = process.env;

const httpLink = createHttpLink({
  uri: `${REACT_APP_GRAPHQL_BASE_URL}/v1/graphql`,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "content-type": "application/json",
      "x-hasura-admin-secret": `${REACT_APP_GRAPHQL_SECRET}`,
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default apolloClient;
