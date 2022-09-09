import { gql } from "@apollo/client";

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
