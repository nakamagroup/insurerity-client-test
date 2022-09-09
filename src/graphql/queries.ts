import { gql } from '@apollo/client';

export const FETCH_COMPLAINTS = gql`
  query Complaints {
    complaint(order_by: { created_at: asc }) {
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

export const ADD_COMPLAINT = gql`
  mutation (
    $complaint: String!
    $companyId: uuid!
    $source: String!
    $type: String!
  ) {
    insert_complaint_one(
      object: {
        complaint: $complaint
        companyId: $companyId
        complaintId: null
        source: $source
        type: $type
      }
    ) {
      id
    }
  }
`;
