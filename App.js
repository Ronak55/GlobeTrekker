import React from 'react';

import { ApolloProvider ,ApolloClient, InMemoryCache } from '@apollo/client';

import StackNavigator from './StackNavigator';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <StackNavigator />
    </ApolloProvider>
  );
};

export default App;
