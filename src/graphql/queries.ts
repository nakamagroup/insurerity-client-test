import { gql } from '@apollo/client';

import { IComplaint } from '../interfaces/complaint';

export const FETCH_COMPLAINTS = gql`
  query Complaints {
    complaint {
      companyId
      complaint
      complaintId
      source
      type
      company {
        name
      }
    }
  }
`;

export const ADD_COMPLAINT = ({
  complaint,
  company,
  source,
  type,
}: IComplaint) => {
  return gql`
    mutation AddComplaint {
      insert_complaint_one(
        object: {
          complaint: ${complaint}
          companyId: ${company}
          complaintId: null
          source: ${source}
          type: ${type}
        }
      ) {
        id
      }
    }
  `;
};
