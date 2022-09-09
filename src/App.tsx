import './App.css';

import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';

import { FETCH_COMPLAINTS } from './graphql/queries';

function App() {
  const { loading, data } = useQuery(FETCH_COMPLAINTS);

  useEffect(() => {
    if (!loading) {
      console.log(data);
    }
  }, [data, loading]);

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
