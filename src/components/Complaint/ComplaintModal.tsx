import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import Modal from 'react-modal';

import { ADD_COMPLAINT } from '../../graphql/queries';
import { IComplaintModal } from '../../interfaces/complaint';
import Button from '../Common/Button';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const AppModal = ({ isOpen, openModal, closeModal }: IComplaintModal) => {
  const [complaint, setComplaint] = useState('');
  const [source, setSource] = useState('');
  const [addComplaint] = useMutation(ADD_COMPLAINT);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <button
          className="flex flex-row justify-end w-full text-lg mb-5"
          onClick={closeModal}>
          x
        </button>

        <div className="mb-6 px-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Complaint
          </label>
          <input
            onChange={({ target }) => {
              setComplaint(target.value);
            }}
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6 px-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Source
          </label>
          <input
            onChange={({ target }) => {
              setSource(target.value);
            }}
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <div className="flex flex-row w-full justify-center mt-5">
            <Button
              label="Add Complaint"
              onClick={() => {
                addComplaint({
                  variables: {
                    complaint,
                    companyId: 'ad6f4da8-06af-45be-ba79-83156a72471f',
                    source,
                    type: 'COMPLAINT',
                  },
                })
                  .then(result => console.log(result))
                  .catch(e => console.log(e));
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default AppModal;
