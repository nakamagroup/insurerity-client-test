/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { usePagination } from 'react-use-pagination';

import Button from './components/Common/Button';
import Pagination from './components/Common/Pagination';
import TableSkeleton from './components/Common/TableSkeleton';
import TextInput from './components/Common/TextInput';
import AppModal from './components/Complaint/ComplaintModal';
import ComplaintTable from './components/Complaint/ComplaintTable';
import { FETCH_COMPLAINTS } from './graphql/queries';
import { IComplaint } from './interfaces/complaint';

const numItemsPerPage: number = 10;

function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const { loading, data } = useQuery(FETCH_COMPLAINTS);
  const [complaints, setComplaints] = useState<IComplaint[]>([]);
  const [searchResults, setSearchResults] = useState<IComplaint[]>([]);

  useEffect(() => {
    if (!loading) {
      const complaint: IComplaint[] = data?.complaint;
      if (Array.isArray(complaint)) {
        setComplaints(complaint);
      }
    }
  }, [data, loading]);

  const {
    currentPage,
    totalPages,
    setNextPage,
    setPreviousPage,
    nextEnabled,
    previousEnabled,
    startIndex,
    endIndex,
  } = usePagination({
    totalItems: complaints.length,
    initialPageSize: numItemsPerPage,
  });

  const [search, setSearch] = useState('');

  useEffect(() => {
    const newComplaints = complaints.filter(complaint => {
      return complaint.complaint.toLowerCase().includes(search.toLowerCase());
    });
    setSearchResults(newComplaints);
  }, [search]);

  return (
    <>
      <div className="max-w-5xl mx-auto p-4">
        <div className="md:flex justify-between items-center pt-4 pb-8">
          <div className="">
            <TextInput onChange={setSearch} />
          </div>
          <Button onClick={openModal} label={'Add new complaint'} />
        </div>
        <AppModal
          closeModal={closeModal}
          openModal={openModal}
          isOpen={modalIsOpen}
        />
        {loading ? (
          <TableSkeleton numRows={5} />
        ) : (
          <>
            <ComplaintTable
              complaints={
                search.length > 0
                  ? searchResults.slice(startIndex, endIndex + 1)
                  : complaints.slice(startIndex, endIndex + 1)
              }
            />
            <Pagination
              totalPages={totalPages}
              totalItems={
                search.length > 0 ? searchResults.length : complaints.length
              }
              setNextPage={setNextPage}
              setPreviousPage={setPreviousPage}
              previousEnabled={previousEnabled}
              nextEnabled={nextEnabled}
              currentPage={currentPage + 1}
              numItemsPerPage={numItemsPerPage}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
