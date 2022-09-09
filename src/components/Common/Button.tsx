import React from 'react';

import { IButton } from '../../interfaces/common';

const Button = ({ label }: IButton) => (
  <button
    type="button"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {label}
  </button>
);

export default Button;
