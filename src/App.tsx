import React, { useQuery } from '@apollo/client';
import { useEffect } from 'react';

import { FETCH_COMPLAINTS } from './graphql/queries';

function App() {
  const { loading, data } = useQuery(FETCH_COMPLAINTS);

  useEffect(() => {
    if (!loading) {
      console.log(data);
    }
  }, [data, loading]);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
