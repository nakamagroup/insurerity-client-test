import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import Modal from 'react-modal';

import { ADD_COMPLAINT, FETCH_COMPLAINTS } from '../../graphql/queries';
import { IComplaintModal } from '../../interfaces/complaint';
import Button from '../Common/Button';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba( 190,192,193, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '480px',
    maxWidth: '600px',
    width: '80%',
    padding: 0,
    borderRadius: '10px',
    overflow: 'hidden',
  },
};

const AppModal = ({ isOpen, closeModal }: IComplaintModal) => {
  const [complaint, setComplaint] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [source, setSource] = useState('');
  const [addComplaint] = useMutation(ADD_COMPLAINT, {
    refetchQueries: [
      { query: FETCH_COMPLAINTS }, // DocumentNode object parsed with gql
      'Complaints', // Query name
    ],
  });

  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <div className="dark:bg-gray-900 p-5">
          <div className="flex items-center justify-between">
            <div className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300 flex-1">
              New Complaint
            </div>

            <button
              className="flex flex-row justify-end text-3xl mb-5 text-gray-900 dark:text-gray-300"
              onClick={closeModal}>
              {'\u00D7'}
            </button>
          </div>

          <div className="mb-6 px-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Complaint
            </label>
            <textarea
              onChange={({ target }) => {
                setComplaint(target.value);
              }}
              id="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your complaint"></textarea>
          </div>
          <div className="mb-6 px-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Source
            </label>
            <select
              onChange={({ target }) => {
                setSource(target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="Web">Web</option>
              <option value="Mobile">Mobile</option>
            </select>
            <div className="flex flex-row w-full justify-end mt-5">
              <Button
                label={!isLoading ? 'Add Complaint' : 'Loading'}
                disabled={isLoading}
                onClick={() => {
                  setIsLoading(true);
                  addComplaint({
                    variables: {
                      complaint,
                      companyId: 'ad6f4da8-06af-45be-ba79-83156a72471f',
                      source,
                      type: 'COMPLAINT',
                    },
                  })
                    .then(result => console.log(result))
                    .catch(e => console.log(e))
                    .finally(() => {
                      setIsLoading(false);
                      closeModal();
                    });
                }}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default AppModal;
