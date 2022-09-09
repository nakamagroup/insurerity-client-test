import React from 'react';
import Modal from 'react-modal';

import { IComplaintModal } from '../../interfaces/complaint';

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
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </Modal>
    </div>
  );
};
export default AppModal;
