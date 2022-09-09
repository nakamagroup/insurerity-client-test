import React from 'react';

import { IComplaintTableRowProps } from '../../interfaces/complaint';

const ComplaintTableRow = ({
  rowNumber,
  complaintId,
  complaint,
  company,
  source,
  type,
}: IComplaintTableRowProps) => {
  return (
    <tr
      className={`${
        (rowNumber !== null && rowNumber !== undefined ? rowNumber : 1) % 2 ===
        0
          ? 'bg-white dark:bg-gray-900'
          : 'bg-gray-50 dark:bg-gray-800'
      } border-b dark:border-gray-700`}>
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {complaintId}
      </th>
      <td className="py-4 px-6">{complaint}</td>
      <td className="py-4 px-6">{company.name}</td>
      <td className="py-4 px-6">{source}</td>
      <td className="py-4 px-6">{type}</td>
    </tr>
  );
};

export default ComplaintTableRow;
