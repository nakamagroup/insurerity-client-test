import React from 'react';

import { IComplaintTableProps } from '../../interfaces/complaint';
import ComplaintTableRow from './ComplaintTableRow';

const ComplaintTable = ({ complaints }: IComplaintTableProps) => (
  <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="py-3 px-6">
            Complaint ID
          </th>
          <th scope="col" className="py-3 px-6">
            Complaint
          </th>
          <th scope="col" className="py-3 px-6">
            Company name
          </th>
          <th scope="col" className="py-3 px-6">
            Source
          </th>
          <th scope="col" className="py-3 px-6">
            Type
          </th>
        </tr>
      </thead>
      <tbody>
        {complaints.map((row, index) => (
          <ComplaintTableRow
            key={`${row.complaintId}-${index + 1}`}
            rowNumber={index}
            complaintId={row.complaintId}
            complaint={row.complaint}
            company={row.company}
            source={row.source}
            type={row.type}
          />
        ))}
      </tbody>
    </table>
  </div>
);

export default ComplaintTable;
