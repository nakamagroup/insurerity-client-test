import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import './App.css';
import { FETCH_COMPLAINTS } from './graphql/queries';

function App() {
  const {loading, data} = useQuery(FETCH_COMPLAINTS);

  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data])

  return (
    <div className="App">
     <h1>Hello world</h1>
    </div>
  );
}

export default App;
