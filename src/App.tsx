import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';

import ComplaintTable from './components/Complaint/ComplaintTable';
import { FETCH_COMPLAINTS } from './graphql/queries';
import { IComplaint } from './interfaces/complaint';

function App() {
  const { loading, data } = useQuery(FETCH_COMPLAINTS);
  const [complaints, setComplaints] = useState<IComplaint[]>([]);

  useEffect(() => {
    if (!loading) {
      const complaint: IComplaint[] = data?.complaint;
      if (Array.isArray(complaint)) {
        setComplaints(complaint);
      }
    }
  }, [data, loading]);

  return (
    <>
      <div className="max-w-5xl mx-auto p-4">
        <button>Create new complaint</button>
        <ComplaintTable complaints={complaints} />
      </div>
    </>
  );
}

export default App;
