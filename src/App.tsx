import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_COMPLAINTS } from './graphql/queries';

function App() {
  const {data} = useQuery(FETCH_COMPLAINTS);

  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data])

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  );
}

export default App;
